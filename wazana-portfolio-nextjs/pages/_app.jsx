import Head from 'next/head'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import { AuthProvider } from "../contexts/AuthContext"
import theme from '../styles/theme'
import { Global, css } from '@emotion/react'

const myTheme = extendTheme(theme)

const GlobalStyle = ({ children }) => (
    <>
        <Head>
            <meta />
        </Head>
        <CSSReset />
        <Global
            styles={css`
             html{
                scroll-behavior: smooth
             }   
             #__next{
                display: flex;
                flex-direction: column;
                min-height: 100vh;
             }
            `
            }

        />
    </>
)

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={myTheme}>
            <AuthProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </AuthProvider>
        </ChakraProvider>
    )
}

export default MyApp