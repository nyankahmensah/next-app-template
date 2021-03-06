import 'styles/globals.css'
import type { AppProps } from 'next/app'
import ApolloProvider from 'apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
