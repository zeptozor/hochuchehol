import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>#ХочуЧехол</title>
                <meta name="description" content="Аксессуары для мобильных телефонов и уникальный сервис для телефонов" />
                <link rel="shortcut icon" href="z.png" type="image/png" sizes="any" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
