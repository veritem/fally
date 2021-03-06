import { MongoClient, Db } from 'mongodb'

let cachedDb: Db | undefined

export async function getDatabase(uri = process.env.DB_URL): Promise<Db> {
    if (cachedDb) return cachedDb

    if (!uri) {
        throw new Error('No url found to connect')
    }

    const client = await MongoClient.connect(uri)

    const db = client.db('fally')

    cachedDb = db
    return db
}
