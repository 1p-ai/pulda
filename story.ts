import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required(),
        Rule.max(96).warning('제목은 96자 이내로 작성하는 것이 좋습니다.'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        // isUnique 함수를 사용해 다른 문서에 같은 슬러그가 있는지 확인합니다.
        isUnique: async (slug, context) => {
          const {document, getClient} = context
          const client = getClient({apiVersion: '2026-07-07'})
          const id = document?._id.replace(/^drafts\./, '')
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
          }
          const query = `!defined(*[
            !(_id in [$draft, $published]) &&
            slug.current == $slug
          ][0]._id)`
          return await client.fetch(query, params)
        },
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => [
        Rule.required(),
        Rule.max(200).warning('요약 설명은 200자 이내로 작성해주세요.'),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'date',
      validation: Rule => Rule.min(Rule.valueOf('publishedAt')).error('수정일은 발행일보다 빠를 수 없습니다.'),
      readOnly: ({value}) => !value,
      hidden: ({document}) => !document?.publishedAt,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: '풀다',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('대표 이미지는 필수입니다.'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'Work Note',
      options: {
        list: [
          { title: '브랜드 이야기 (Brand)', value: 'Brand' },
          { title: '공지 (Notice)', value: 'Notice' },
          { title: '시장 동향 (Market)', value: 'Market' },
          { title: '작업 노트 (Work Note)', value: 'Work Note' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'relatedProjects',
      title: '관련 프로젝트',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'project'}]},
      ],
      validation: Rule => Rule.max(3).warning('관련 프로젝트는 최대 3개까지 연결할 수 있습니다.'),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: Rule => Rule.max(60).warning('SEO 제목은 60자 이내를 권장합니다.'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: Rule => Rule.max(160).warning('SEO 설명은 160자 이내를 권장합니다.'),
    }),
    defineField({
      name: 'noindex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      publishedAt: 'publishedAt',
      media: 'cover',
      draft: 'draft',
    },
    prepare({title, category, publishedAt, media, draft}) {
      const subtitles = [
        draft ? '초안(Draft)' : '발행(Published)',
        category,
        publishedAt,
      ].filter(Boolean)

      return {title, subtitle: subtitles.join(' · '), media}
    },
  },
})