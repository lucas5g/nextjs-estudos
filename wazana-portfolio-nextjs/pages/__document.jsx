import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from 'src/styles/theme'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lato:ital,wght@0,100;0,700;1,100&family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}