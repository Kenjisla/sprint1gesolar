import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import "../styles/globals.css"

import type { AppProps } from 'next/app'
import { CalculatorProvider } from "../hooks/useCalculator";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
  function GoogleTagManagerScript() {
    return {__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WXB5W9D');`}
  }

  return (
    <>
      <Head>
       <script dangerouslySetInnerHTML={GoogleTagManagerScript()} />
      </Head>

      <header>
        <Navbar />
      </header>      
      
      <main>
          <CalculatorProvider>
            <Component {...pageProps} />
          </CalculatorProvider>
      </main>

      <Footer />

      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-WXB5W9D"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}>
        </iframe>
      </noscript>
    </>
  )
}

export default MyApp
