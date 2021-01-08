import '../styles/globals.css'

import type { AppProps } from 'next/app'
import type { FC } from 'react'
import { useStore } from 'react-redux'
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from 'stores'

const WrapperApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const store = useStore()
  return (
    // @ts-ignore
    <PersistGate persistor={store.__persistor} loading={<div>loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default wrapper.withRedux(WrapperApp)
