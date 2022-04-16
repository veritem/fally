import Link from 'next/link'
import router from 'next/router'
import { server } from '../lib/utils'

export default function Nav() {
    const logout = async () => {
        let resp = await fetch(`${server}/api/signout`)
        router.push('/')
    }

    return (
        <nav className="bg-black shadow-md py-4 items-center px-12 text-white flex justify-end space-x-4">
            <Link href="/">
                <a>home</a>
            </Link>

            <Link href="/attendance">
                <a>attendancies</a>
            </Link>
            <Link href="/report">
                <a>report</a>
            </Link>

            <Link href="/support">
                <a>support</a>
            </Link>

            <button className="bg-gray-800 px-4 py-2 rounded-sm shadow-md" onClick={logout}>
                logout
            </button>
        </nav>
    )
}
