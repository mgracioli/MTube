import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import {
  ColorModeContext,
  ColorModeProvider,
} from '../src/contexts/color-mode-context'

const tema = {
  light: {
    backgroundBase: '#f9f9f9',
    backgroundLevel1: '#ffffff',
    backgroundLevel2: '#f0f0f0',
    borderBase: '#e5e5e5',
    textColorBase: '#222222',
  },
  dark: {
    backgroundBase: '#181818',
    backgroundLevel1: '#202020',
    backgroundLevel2: '#313131',
    borderBase: '#383838',
    textColorBase: '#f1f1f1',
  },
}

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode="dark">{props.children}</ColorModeProvider>
  )
}

function MyApp({ Component, pageprops }) {
  const colorModeContext = useContext(ColorModeContext)

  return (
    <ThemeProvider theme={tema[colorModeContext.mode]}>
      <CSSReset />
      <Component {...pageprops} />
    </ThemeProvider>
  )
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}
