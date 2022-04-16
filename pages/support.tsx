import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Support() {
    return (
        <Fragment>
            <Head>
                <title>support</title>
            </Head>

            <section className="py-20 px-36">
                <h1 className="font-bold uppercase text-3xl py-4">Support</h1>

                <p>Hey there, Hope you&apos;re doing great!</p>
                <p>If you have any question regarding this software don&apos;t panic</p>
                <p>
                    Email the creator at{' '}
                    <a href="mailto:mugaboverite@gmail.com" className="text-blue-500">
                        mugaboverite@gmail.com
                    </a>{' '}
                    otherwise check back
                    <Link href="/">
                        <a className="text-blue-500 text-sm"> home</a>
                    </Link>
                </p>
            </section>
        </Fragment>
    )
}
