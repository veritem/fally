import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { getDatabase } from '../../../lib/db'

export default async function Report(req: NextApiRequest, res: NextApiResponse) {
    let db = await getDatabase()
    switch (req.method) {
        case 'GET':
            const { id } = req.query

            let report = await db.collection('reports').findOne({ _id: new ObjectId(id as string) })

            if (!report) {
                return res.status(404).json({ message: 'Report not found' })
            }

            return res.status(200).send(report)
        default:
            return res.status(200).json({ message: 'Nothing here' })
    }
}
