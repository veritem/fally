import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import useSWR, { SWRConfig } from 'swr'
import Nav from '../components/Nav'
import fetch from '../lib/fetch'
import { User } from '../lib/types'
import { server } from '../lib/utils'

export default function Users() {
    const { data, mutate } = useSWR<{ data: User[] }>(`${server}/api/users`)

    return (
        <Fragment>
            <Head>
                <title>Users</title>
            </Head>
            <Nav />
            <section className="pb-10 grid place-items-center mt-10">
                <div className="my-4">
                    <Link href="/new">
                        <a className="bg-black text-white px-4 py-2 rounded-md my-4">
                            add new user
                        </a>
                    </Link>
                </div>

                <table className="table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-200 p-4">No</th>
                            <th className="border border-gray-200 p-4">Name</th>
                            <th className="border border-gray-200 p-4">Email</th>
                            <th className="border border-gray-200 p-4">Gender</th>
                            <th className="border border-gray-200 p-4">Class</th>
                            <th className="border border-gray-200 p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data.map((item, index) => (
                            <tr key={item._id}>
                                <td className="border border-gray-200 p-4">{index + 1}</td>
                                <td className="border border-gray-200 p-4">{item.names}</td>
                                <td className="border border-gray-200 p-4">{item.email}</td>
                                <td className="border border-gray-200 p-4">{item.gender}</td>
                                <td className="border border-gray-200 p-4">{item.class}</td>
                                <td
                                    className="border border-gray-200 p-4 cursor-pointer text-blue-500"
                                    onClick={async () => {
                                        if (
                                            confirm(
                                                `are you sure you want to delete ${item.names}?`
                                            )
                                        ) {
                                            const resp = await fetch(
                                                `${server}/api/users/${item._id}`,
                                                {
                                                    method: 'DELETE'
                                                }
                                            )

                                            if (resp.ok) {
                                                mutate({
                                                    data: data.data.filter(
                                                        (i) => i._id !== item._id
                                                    )
                                                })
                                            }
                                        }
                                    }}
                                >
                                    delete
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Fragment>
    )
}
