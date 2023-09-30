import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'
import { SWRConfig } from 'swr'
import fetch from '../lib/fetch'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <SWRConfig value={{ fetcher: fetch }}>
            <NextNProgress />
            <Component {...pageProps} />
            <Toaster />
        </SWRConfig>
    )
}

export default MyApp
