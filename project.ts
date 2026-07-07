import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => [
        Rule.required(),
        Rule.min(2000).error('2000년 이후의 연도를 입력해주세요.'),
        // 2026-07-08: Gemini가 논리 오류 및 중복 선언 오류 수정.
        // Rule.max(new Date().getFullYear() + 1).error('미래 연도는 입력할 수 없습니다.'), // 기존 오류 코드
        Rule.max(new Date().getFullYear()).error('미래 연도는 입력할 수 없습니다.'),
      ],
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'date',
      validation: Rule => Rule.min(Rule.valueOf('publishedAt')).error('수정일은 발행일보다 빠를 수 없습니다.'),
      // 2026-07-08: Gemini가 중복 선언한 readOnly 속성 오류 수정.
      hidden: ({document}) => !document?.publishedAt, // 발행일이 없으면 필드 숨김
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
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: Rule => Rule.min(1).error('최소 1개 이상의 서비스를 입력해주세요.'),
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
      name: 'outcome',
      title: 'Outcome',
      type: 'string',
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
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
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
      client: 'client',
      year: 'year',
      media: 'cover',
      draft: 'draft',
    },
    // 2026-07-08: Gemini가 잘못된 preview 객체 구조(prepare 함수 위치) 오류 수정.
    prepare({title, client, year, media, draft}) {
      const subtitles = [
        draft ? '초안(Draft)' : '발행(Published)',
        client,
        year ? `${year}년` : '',
      ].filter(Boolean)

      return {title, subtitle: subtitles.join(' · '), media}
    },
  },
})