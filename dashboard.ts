import {defineConfig} from 'sanity'

export const dashboardConfig = defineConfig({
  widgets: [
    {
      name: 'document-list',
      options: {
        title: '최근 수정한 프로젝트/스토리',
        order: '_updatedAt desc',
        types: ['project', 'story'],
        showCreateNewButton: true,
      },
      layout: {
        width: 'medium',
      },
    },
    {
      name: 'project-info',
      layout: {
        width: 'small',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
      },
    },
  ],
})