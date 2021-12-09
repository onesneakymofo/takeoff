import { addDecorator } from '@storybook/react'
import { CacheProvider } from '@emotion/react'
import { GlobalStyles } from 'twin.macro'
import createCache from '@emotion/cache'

import { Layout } from './Layout'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const cache = createCache({ prepend: true, key: 'twin' })

addDecorator((storyFn) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Layout>{storyFn()}</Layout>
  </CacheProvider>
))
