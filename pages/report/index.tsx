import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import Nav from '../../components/Nav'
import ReportComponent from '../../components/ReportComponent'
import { getDatabase } from '../../lib/db'
import { getCurrentWeekInTheYear } from '../../lib/utils'

export default function users({ report }) {
	let item = JSON.parse(report)

	return (
		<Fragment>
			<Head>
				<title>report</title>
			</Head>
			<Nav />
			{item ? (
				<ReportComponent {...{ report: item }} />
			) : (
				<section className="grid place-items-center mt-20">
					<p className="font-bold font-primary">No current report</p>
				</section>
			)}

			<section className="grid place-items-center mt-20">
				<Link href="/report/history" className="text-blue-500">
					View previous reports
				</Link>
			</section>
		</Fragment>
	);
}

export async function getServerSideProps() {
	let db = await getDatabase()

	const report = await db.collection('reports').findOne({
		sabbath_week: getCurrentWeekInTheYear()[1] - 1,
		year: getCurrentWeekInTheYear()[0]
	})

	console.log(report)

	return {
		props: {
			report: JSON.stringify(report)
		}
	}
}
