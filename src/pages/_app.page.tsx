import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App