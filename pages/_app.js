import { useEffect } from "react"
import AOS from "aos"

import { Inter } from '@next/font/google'
import 'aos/dist/aos.css'
import 'react-multi-carousel/lib/styles.css'
import '@/styles/globals.scss'

import Layout from '@/components/Layout/Layout'

const font = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 500
    });
  }, []);
  
  return (
    <Layout>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
