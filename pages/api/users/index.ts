import { NextApiRequest, NextApiResponse } from 'next'
import { getDatabase } from '../../../lib/db'
import { hash } from '../../../lib/utils'

export default async function Users(req: NextApiRequest, res: NextApiResponse) {
    let db = await getDatabase()

    switch (req.method) {
        case 'POST':
            const { names, password, email, level, gender } = JSON.parse(req.body)

            let user_exists = await db.collection('users').findOne({ names })

            if (user_exists !== null) {
                return res.status(400).json({ success: false, message: 'user already exists' })
            }

            let new_user = await db.collection('users').insertOne({
                email,
                names,
                level,
                gender,
                password: await hash(password),
                role: 'MEMBER'
            })
            return res.status(201).json({ success: true, data: new_user })
        case 'GET':
            let users = await db
                .collection('users')
                .find({ status: undefined })
                .sort({ names: 1 })
                .toArray()
            return res.status(200).json({ success: true, data: users })
        case 'DELETE':
            const { id } = req.query
            console.log(id)
        default:
            return res.status(200).json({ message: 'Not supported' })
    }
}
