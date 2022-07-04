import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import "../styles/globals.css"

import type { AppProps } from 'next/app'
import { CalculatorProvider } from "../hooks/useCalculator";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
