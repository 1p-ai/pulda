import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => [
        Rule.required(),
        Rule.email().error('올바른 이메일 형식을 입력해주세요.'),
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
      validation: Rule => Rule.max(4).warning('대표 프로젝트는 최대 4개까지 선택할 수 있습니다.'),
    }),
    defineField({
      name: 'featuredStories',
      title: 'Featured Stories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'story'}}],
      validation: Rule => Rule.max(4).warning('대표 스토리는 최대 4개까지 선택할 수 있습니다.'),
    }),
  ],
})