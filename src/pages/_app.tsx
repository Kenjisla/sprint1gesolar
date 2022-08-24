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
        <meta name="description" content="Venda, instalação e manutenção de energia Solar. Produza sua própria energia e pare de pagar conta de luz."></meta>
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
