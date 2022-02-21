import Head from 'next/head'
import router from 'next/router'
import { Fragment, useState } from 'react'
import toast from 'react-hot-toast'
import { server } from '../lib/utils'

export default function Signin() {
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const handle_signin = async () => {
        try {
            let resp = await fetch(`${server}/api/signin`, {
                method: 'POST',
                body: JSON.stringify({ password, email })
            })

            if (resp.status == 201) {
                setPassword('')
                setEmail('')
                toast.success('Successfully signed in!')
            } else {
                toast.error('Invalid email or password')
                return
            }

            router.push('/app')
        } catch (message) {
            toast.error(message)
            return
        }
    }

    return (
        <Fragment>
            <Head>
                <title>signin</title>
            </Head>
            <section className="grid place-items-center h-screen w-screen">
                <form
                    className="w-96 px-8 py-12"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handle_signin()
                    }}
                >
                    <h1 className="text-2xl text-center font-bold">Signin</h1>
                    <div className="py-5">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-3 rounded-md px-3 w-full border-2 border-gray-900"
                        />
                    </div>
                    <div className="py-5">
                        <label className="block">Password</label>
                        <input
                            type="password"
                            className="rounded-md px-3 w-full border-2 border-gray-900 py-3"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="signin"
                        className="bg-black text-white w-full py-3 rounded-md cursor-pointer"
                    />
                </form>
            </section>
        </Fragment>
    )
}
