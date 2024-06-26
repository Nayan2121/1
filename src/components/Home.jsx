import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";


export default function Home() {
    const [data, setData] = useState([]);

    const loadUser = async () => {
        const res = await axios.get("http://localhost:3001/users")
        console.log(res.data, "res")
        setData(res.data)

    }

    useEffect(() => {
        loadUser();
    }, [])

    function handleDelete(id) {
        axios.delete(`http://localhost:3001/users/${id}`)
            .then(() => {
                loadUser()
            })
    }

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Employees</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all employees. You can add new employees, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div>
                        <Link to="/create">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add new employee
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>Employee</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                City
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Update
                                            </th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {data.map((cvalue) => (
                                            <tr key={cvalue.id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">

                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{cvalue.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">{cvalue.email}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        {cvalue.city}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap py-4 text-center text-sm font-medium">
                                                    <a href="#" className='text-white px-4 py-2 rounded-lg bg-blue-500'>
                                                        Edit
                                                    </a>
                                                </td>
                                                <td className='whitespace-nowrap py-4 text-sm text-center font-medium'>
                                                    <a onClick={() => handleDelete(cvalue?.id)} href="#" className='text-white px-4 py-2 rounded-lg bg-red-500'>
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
