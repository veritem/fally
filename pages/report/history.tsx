import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import useSWR, { SWRConfig } from 'swr'
import Nav from '../../components/Nav'
import fetcher from '../../lib/fetch'
import { Report } from '../../lib/types'
import { server } from '../../lib/utils'

let server_url = `${server}/api/report`

function Report() {
    const { data, error } = useSWR<Report[]>(server_url, fetcher)

    if (error)
        return (
            <p>
                <pre>
                    <code>{JSON.stringify(error, null, 2)}</code>
                </pre>
            </p>
        )

    return (
        <Fragment>
            <Head>
                <title>Report - history</title>
            </Head>
            <section>
                <Nav />
                <div className="my-12 text-center">
                    <h2 className="text-2xl font-bold uppercase">Overall reports</h2>
                </div>

                <div className="flex justify-center items-center">
                    <table className="table-auto border-collapse border border-gray-300 my-5">
                        <tr>
                            <th className="border border-gray-200 font-primary p-4">No</th>
                            <th className="border border-gray-200 font-primary p-4">Week</th>
                            <th className="border border-gray-200 font-primary p-4">Year</th>
                            <th className="border border-gray-200 font-primary p-4">Date</th>
                            <th className="border border-gray-200 font-primary p-4">Action</th>
                        </tr>
                        {data &&
                            data.map((report: Report, index) => (
                                <tr key={report._id}>
                                    <td className="border border-gray-200 p-4">{index + 1}</td>
                                    <td className="border border-gray-200 p-4">
                                        {report.sabbath_week}
                                    </td>
                                    <td className="border border-gray-200 p-4">{report.year}</td>
                                    <td className="border border-gray-200 p-4">
                                        {new Date(report.created).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td className="border border-gray-200 p-4">
                                        <Link href={`/report/${report._id}`}>
                                            <a>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    View
                                                </button>
                                            </a>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </table>
                </div>
            </section>
        </Fragment>
    )
}

export default function History({ fallback }) {
    return (
        <SWRConfig value={{ fallback }}>
            <Report />
        </SWRConfig>
    )
}

export const getStaticProps = async () => {
    const data = await (await fetch(server_url)).text()

    return {
        props: {
            fallback: {
                server_url: data
            }
        }
    }
}
