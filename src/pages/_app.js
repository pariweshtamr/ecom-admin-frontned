import Head from "next/head"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-commerce CMS System</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
