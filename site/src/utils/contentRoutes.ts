export const toContentSlug = (id: string) => id.replace(/\.(md|mdx)$/i, '');

export const getProjectPath = (id: string) => `/project/${toContentSlug(id)}/`;
export const getStoryPath = (id: string) => `/story/${toContentSlug(id)}/`;
