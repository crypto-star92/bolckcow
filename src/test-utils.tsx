import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { render } from '@testing-library/react'
import Web3Provider from 'components/Web3Provider'
import { DEFAULT_LOCALE } from 'constants/locales'
import { en } from 'make-plural/plurals'
import { ReactElement, ReactNode, useMemo } from 'react'
import { Provider } from 'react-redux'
import store from 'state'
// import ThemeProvider from 'theme'

import catalog from './locales/en-US'
import { useIsDarkMode } from './state/user/hooks'
import { theme } from 'theme'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/macro'

i18n.load({
  [DEFAULT_LOCALE]: catalog.messages,
})
i18n.loadLocaleData({
  [DEFAULT_LOCALE]: { plurals: en },
})
i18n.activate(DEFAULT_LOCALE)

const MockedI18nProvider = ({ children }: any) => <I18nProvider i18n={i18n}>{children}</I18nProvider>

const MockThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useIsDarkMode()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const WithProviders = ({ children }: { children?: ReactNode }) => {
  return (
    <MockedI18nProvider>
      <Provider store={store}>
        <Web3Provider>
          <MockThemeProvider>{children}</MockThemeProvider>
        </Web3Provider>
      </Provider>
    </MockedI18nProvider>
  )
}

const customRender = (ui: ReactElement) => render(ui, { wrapper: WithProviders })

export * from '@testing-library/react'
export { customRender as render }
