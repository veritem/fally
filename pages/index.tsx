import Head from 'next/head'
export default function Home() {
    return (
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="application" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/app',
            permanent: false
        }
    }
}
