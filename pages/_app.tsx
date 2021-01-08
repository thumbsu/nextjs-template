import '../styles/globals.css'

import type { AppProps } from 'next/app'
import type { FC } from 'react'
import { wrapper } from 'stores'

const WrapperApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(WrapperApp)
