import type {StructureResolver} from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('콘텐츠 관리')
    .items([
      // '사이트 설정'을 단일 항목(Singleton)으로 설정합니다.
      S.listItem()
        .title('사이트 설정')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings') // 문서 ID를 'siteSettings'로 고정합니다.
            .title('사이트 전역 설정'),
        ),

      S.divider(),

      // '프로젝트' 문서 목록을 표시합니다.
      S.documentTypeListItem('project').title('프로젝트'),

      // '스토리' 문서 목록을 표시합니다.
      S.documentTypeListItem('story').title('스토리'),

      // 나머지 문서 타입들을 기본 목록으로 표시할 수 있습니다.
      // ...S.documentTypeListItems().filter(item => !['siteSettings', 'project', 'story'].includes(item.getId() ?? '')),
    ])