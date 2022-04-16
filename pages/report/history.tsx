import Head from 'next/head'
import { Fragment } from 'react'
import Nav from '../../components/Nav'

export default function Report() {
    return (
        <Fragment>
            <Head>
                <title>Report - history</title>
            </Head>
            <section>
                <Nav />
                <div className="my-5">Reports</div>
            </section>
        </Fragment>
    )
}
