import {defineConfig} from 'sanity'
import {schemaTypes} from './index'

export default defineConfig({
  name: 'pulda',
  title: 'Pulda Website Studio',
  projectId: 'p9gjsv1e',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
})