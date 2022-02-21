import { SWRConfig } from 'swr'
import '../styles/globals.css'
import fetch from '../lib/fetch'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
    return (
        <SWRConfig value={{ fetcher: fetch }}>
            <Component {...pageProps} />
            <Toaster />
        </SWRConfig>
    )
}

export default MyApp
