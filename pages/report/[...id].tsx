import { useRouter } from 'next/router'
import { Fragment } from 'react'
import useSWR, { SWRConfig } from 'swr'
import Nav from '../../components/Nav'
import ReportComponent from '../../components/ReportComponent'
import fetcher from '../../lib/fetch'
import { Report } from '../../lib/types'
import { server } from '../../lib/utils'

const server_url = `${server}/api/report`

function Report() {
    const { query } = useRouter()

    const { data: report, error } = useSWR<Report>(`${server_url}/${query.id}`, fetcher)

    return (
        <Fragment>
            <Nav />

            <div className="my-12 text-center">
                <h2 className="text-2xl font-bold uppercase">Reports</h2>
                <ReportComponent {...{ report }} />
            </div>
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

export async function getServerSideProps({ params }) {
    const data = await (await fetch(server_url + `/${params.id}`)).text()

    return {
        props: {
            fallback: {
                data
            }
        }
    }
}
