import { MongoClient, Db } from 'mongodb'

let cachedDb: Db | undefined

export async function getDatabase(uri = "mongodb+srv://makuza:borntocode@cluster0.pr3o4.mongodb.net/fally?retryWrites=true&w=majority"): Promise<Db> {
    if (cachedDb) return cachedDb

    if (!uri) {
        throw new Error('No url found to connect')
    }

    const client = await MongoClient.connect(uri)

    const db = client.db('fally')

    cachedDb = db
    return db
}
