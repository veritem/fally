import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { getDatabase } from '../../../lib/db'
import { hash } from '../../../lib/utils'

export default async function Users(req: NextApiRequest, res: NextApiResponse) {
    let db = await getDatabase()

    switch (req.method) {
        case 'DELETE':
            const { id } = req.query

            let data = await db.collection('users').deleteOne({ _id: new ObjectId(id as string) })

            return res.status(200).json({ success: true, data })

        case 'POST':
            const { names, password, email, level } = JSON.parse(req.body)

            let user_exists = await db.collection('users').findOne({ names })

            if (user_exists !== null) {
                return res.status(400).json({ success: false, message: 'user already exists' })
            }

            let new_user = await db.collection('users').insertOne({
                email,
                names,
                level,
                password: await hash(password),
                role: 'MEMBER'
            })

            return res.status(201).json({ success: true, data: new_user })

        default:
            return res.status(200).json({ message: 'Not supported' })
    }
}
