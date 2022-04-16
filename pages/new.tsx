import Head from 'next/head'
import { Fragment } from 'react'
import toast from 'react-hot-toast'
import Nav from '../components/Nav'
import useForm from '../lib/useForm'

export default function New() {
    const { handleChange, inputs, resetForm } = useForm({
        names: '',
        email: '',
        password: '',
        gender: '',
        level: ''
    })

    return (
        <Fragment>
            <Head>
                <title>new user</title>
            </Head>
            <Nav />

            <form
                className="flex justify-center items-center my-4 flex-col"
                onSubmit={async (e) => {
                    e.preventDefault()

                    const resp = await fetch('/api/users', {
                        method: 'POST',
                        body: JSON.stringify(inputs)
                    })

                    if (resp.status !== 201) {
                        toast.error('Error creating user')
                    }

                    const data = await resp.json()

                    if (data.success) {
                        toast.success('User created successfully')
                        resetForm()
                    }
                }}
            >
                <h1 className="text-left font-bold uppercase my-6">Add new user</h1>

                <div className="w-[20rem]">
                    <label>Names</label>
                    <input
                        className="w-full mb-3 rounded-md"
                        type="text"
                        required
                        name="names"
                        placeholder="Enter names"
                        value={inputs.names}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-[20rem]">
                    <label>Select Gender</label>
                    <select
                        className="w-full mb-3 rounded-md"
                        value={inputs.gender}
                        name="gender"
                        onChange={handleChange}
                    >
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>

                <div className="w-[20rem]">
                    <label>Level</label>
                    <input
                        className="w-full mb-3 rounded-md"
                        type="text"
                        required
                        name="level"
                        placeholder="CURL4, RCA1B"
                        value={inputs.level}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-[20rem]">
                    <label>Email</label>
                    <input
                        className="w-full mb-3 rounded-md"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-[20rem]">
                    <label>Password</label>
                    <input
                        className="w-full mb-3 rounded-md"
                        type="password"
                        name="password"
                        required
                        placeholder="Enter names"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="bg-black  text-white w-[20rem] cursor-pointer py-3 rounded-md"
                />
            </form>
        </Fragment>
    )
}
