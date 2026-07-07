import {buildLegacyTheme} from 'sanity'

const props = {
  '--pulda-red': '#9f3a32',
  '--pulda-red-tint': '#cf6b5a',
  '--pulda-blue': '#13233a',
  '--pulda-beige': '#f4ead8',
  '--pulda-white': '#fbf4e7',
}

export const puldaTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--pulda-blue'],
  '--white': props['--pulda-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--pulda-beige'],
  '--component-text-color': props['--pulda-blue'],

  /* Brand */
  '--brand-primary': props['--pulda-red'],
  '--brand-secondary': props['--pulda-red-tint'],
})