import Head from 'next/head'
import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import Nav from '../../components/Nav'
import { Report } from '../../lib/types'
import { server } from '../../lib/utils'

let server_url = `${server}/api/report`

export default function HistoryPage({ data }: { data: Report[] }) {


	return (
		<Fragment>
			<Head>
				<title>Report - history</title>
			</Head>
			<Suspense>
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
											<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
												View
											</button>
										</Link>
									</td>
								</tr>
							))}
					</table>
				</div>
			</Suspense>
		</Fragment>
	);
}


export const getStaticProps = async () => {
	const data = await fetch(server_url).then((res) => res.json())

	return {
		props: {
			data
		}
	}
}