import '../utils/css/tailwind.css'
import '../utils/css/twemoji.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'

import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { LayoutWrapper } from '../components/layouts/LayoutWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>YS Badminton - We push the limit.</title>
      </Head>
      <LayoutWrapper>
        <Analytics />
        <Component {...pageProps} />
        <ToastContainer />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
