import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import "../styles/globals.css"

import type { AppProps } from 'next/app'
import { CalculatorProvider } from "../hooks/useCalculator";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GESOLAR | Energia Solar para todos</title>
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


    </>
  )
}

export default MyApp
