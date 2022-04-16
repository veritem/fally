import { Fragment } from 'react'
import Nav from '../components/Nav'

export default function New() {
    return (
        <Fragment>
            <Nav />
            <form className="flex justify-center items-center my-4">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <label>Names</label>
                    <input
                        className="w-full px-3 py-2 mb-2 text-base leading-6 border rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                        type="text"
                        required
                        placeholder="Enter names"
                    />
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <label>Names</label>
                    <input
                        className="w-full px-3 py-2 mb-2 text-base leading-6 border rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                        type="text"
                        required
                        placeholder="Enter names"
                    />
                </div>
            </form>
        </Fragment>
    )
}
