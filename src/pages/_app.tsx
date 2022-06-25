import { Navbar } from "../components/Navbar";

import "../styles/globals.css"

import type { AppProps } from 'next/app'
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>      
      
      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}

export default MyApp
