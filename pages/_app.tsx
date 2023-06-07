import 'css/tailwind.css'
import 'css/twemoji.css'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { LayoutWrapper } from '~/components/LayoutWrapper'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
        <ToastContainer />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
