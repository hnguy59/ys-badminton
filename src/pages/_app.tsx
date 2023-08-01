import '~/utils/css/tailwind.css'
import '~/utils/css/twemoji.css'
import 'react-toastify/dist/ReactToastify.css'

import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { LayoutWrapper } from '~/components/layouts/LayoutWrapper'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Analytics />
        <Component {...pageProps} />
        <ToastContainer />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
