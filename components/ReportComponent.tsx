import React from 'react'
import { Report } from '../lib/types'

export default function ReportComponent({ report }: { report: Report }) {
    return (
        report && (
            <section className="my-14">
                <div className="flex items-center justify-center">
                    <h3 className="py-4 font-bold">
                        Recorded on {new Date(report.created).toLocaleDateString('fr-FR')}
                    </h3>
                </div>
                <section className="grid place-items-center font-primary">
                    <table className="table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="border border-gray-200 font-primary p-4">
                                    Igikorwa
                                </th>
                                <th className="border border-gray-200 font-primary p-4">
                                    Ukocyakozwe
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 p-4">Abaje</td>
                                <td className="border border-gray-200 p-4">{report.presents}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-4">Abasibye</td>
                                <td className="border border-gray-200 p-4">{report.absent}</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-200 p-4">Abafite Impamvu</td>
                                <td className="border border-gray-200 p-4">{report.away}</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-200 p-4">Abarwayi</td>
                                <td className="border border-gray-200 p-4">{report.sick}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-4">Abasuye</td>
                                <td className="border border-gray-200 p-4">{report.visited}</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-200 p-4">Abasuwe</td>
                                <td className="border border-gray-200 p-4">{report.wereVisted}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-4">Abafashije</td>
                                <td className="border border-gray-200 p-4">{report.helped}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-4">Abafashijwe</td>
                                <td className="border border-gray-200 p-4">{report.wereHelped}</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-200 p-4">Abatangiye isabato</td>
                                <td className="border border-gray-200 p-4">
                                    {report.startedSabbath}
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-gray-200 p-4">Abize 7</td>
                                <td className="border border-gray-200 p-4">
                                    {report.studied7times}
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-gray-200 p-4">Abashyitsi</td>
                                <td className="border border-gray-200 p-4">{report.vistors}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-4">Twese twiriwe turi</td>
                                <td className="border border-gray-200 p-4">
                                    {report.vistors + report.presents}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        )
    )
}
