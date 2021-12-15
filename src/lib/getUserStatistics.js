import { MongoClient } from 'mongodb';

export default async function getUserStatistics(username) {
  if (username) {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db('WEB');
    const users = db.collection('Users');
    const result = await users.findOne({ username });
    console.log(result);
    return { lastUploadDate: result.lastUploadDate, totalUploads: result.TotalUploads };
  }
  return null;
}
