import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {dashboardTool} from '@sanity/dashboard'
import {schemaTypes} from './schemas'
import {deskStructure} from './deskStructure'
import {puldaTheme} from './theme'
import Logo from './components/logo'
import {dashboardConfig} from './dashboard'
import {CustomPublishAction} from './actions/customPublishAction'

export default defineConfig({
  name: 'pulda',
  title: 'Pulda Website Studio',

  projectId: 'p9gjsv1e', // WORKLOG.md 기반 임시 ID
  dataset: 'production',

  studio: {
    components: {
      logo: Logo,
    },
  },
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    dashboardTool(dashboardConfig),
    visionTool(),
  ],

  theme: puldaTheme,
  schema: {
    types: schemaTypes,
    // 'siteSettings'는 새로 생성할 수 없도록 템플릿 목록에서 제외합니다.
    templates: (prev) => {
      return prev.filter((template) => template.id !== 'siteSettings')
    },
  },
  document: {
    actions: (prev, context) => {
      // 기본 'publish' 액션을 우리의 커스텀 액션으로 교체합니다.
      return prev.map((action) => (action.action === 'publish' ? CustomPublishAction : action))
    },
  },
})