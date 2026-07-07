import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { toPortableText } from '@portabletext/markdown';
import { sanityClient } from '../src/sanity/sanityClient.js';

const DRY_RUN = process.env.DRY_RUN === 'true';
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

async function migrateCollection(collection, type) {
  console.log(`\nMigrating collection: ${collection} as type: ${type}...`);
  const collectionDir = path.join(CONTENT_DIR, collection);
  const files = await readdir(collectionDir);
  const mdFiles = files.filter((file) => file.endsWith('.md'));

  const documents = [];

  for (const file of mdFiles) {
    const filePath = path.join(collectionDir, file);
    const fileContent = await readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    if (!data.slug) {
      console.warn(`Skipping ${file}: slug is missing.`);
      continue;
    }

    const doc = {
      _id: `${type}-${data.slug}`,
      _type: type,
      title: data.title,
      slug: { _type: 'slug', current: data.slug },
      description: data.description,
      publishedAt: data.publishedAt
        ? new Date(data.publishedAt).toISOString()
        : new Date().toISOString(),
      ...(data.updatedAt && {
        updatedAt: new Date(data.updatedAt).toISOString(),
      }),
      ...(data.client && { client: data.client }),
      ...(data.year && { year: data.year }),
      ...(data.services && { services: data.services }),
      ...(data.tags && { tags: data.tags }),
      ...(data.featured && { featured: data.featured }),
      ...(data.outcome && { outcome: data.outcome }),
      ...(data.seoTitle && { seoTitle: data.seoTitle }),
      ...(data.seoDescription && { seoDescription: data.seoDescription }),
      ...(data.author && { author: data.author }),
      ...(data.category && { category: data.category }),
      body: content ? toPortableText(content) : [],
    };

    // Note: Cover image migration is manual for now.
    // We can log the path for easier manual upload.
    if (data.cover) {
      console.log(
        `  [Image] Manual upload needed for ${doc._id}: ${data.cover}`
      );
    }

    documents.push(doc);
  }

  if (DRY_RUN) {
    console.log(
      `[Dry Run] Would create/update ${documents.length} documents for '${collection}'.`
    );
    console.log(JSON.stringify(documents.slice(0, 2), null, 2)); // Log first 2 docs as sample
    return;
  }

  if (documents.length === 0) {
    console.log(`No documents to migrate for '${collection}'.`);
    return;
  }

  console.log(`Creating/updating ${documents.length} documents...`);
  try {
    const transaction = sanityClient.transaction();
    documents.forEach((doc) => {
      transaction.createOrReplace(doc);
    });
    const result = await transaction.commit();
    console.log(
      `Successfully migrated ${result.results.length} documents for '${collection}'.`
    );
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

async function main() {
  console.log(
    `Starting migration... (Dry Run: ${DRY_RUN ? 'YES' : 'NO'})`
  );
  await migrateCollection('projects', 'project');
  await migrateCollection('stories', 'story');
  console.log('\nMigration process finished.');
}

main().catch(console.error);