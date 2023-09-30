import Link from 'next/link'
import router from 'next/router'
import { server } from '../lib/utils'

export default function Nav() {
    const logout = async () => {
        await fetch(`${server}/api/signout`)
        router.push('/signin')
    }

    return (
        <nav className="bg-black shadow-md py-4 items-center px-12 text-white flex justify-end space-x-4">
            <Link href="/">home</Link>

            <Link href="/attendance">attendancies</Link>
            <Link href="/report">report</Link>

            <Link href="/support">support</Link>

            <button className="bg-gray-800 px-4 py-2 rounded-sm shadow-md" onClick={logout}>
                logout
            </button>
        </nav>
    )
}
