import { createSecretKey } from 'crypto';
import Cookies from 'Cookies';
import { jwtDecrypt } from 'jose/jwt/decrypt';
import { MongoClient } from 'mongodb';

export default async function processedUpload(req, res) {
  try {
    if (req.method === 'POST') {
      // console.log('it was a post method');
      // console.log(req);

      const cookies = Cookies(req, res);
      const jwt = cookies.get('HarOnline');
      console.log(jwt);
      if (jwt) {
        const secretKey = await createSecretKey(Buffer.from(process.env.JWT_KEY));
        const { payload } = await jwtDecrypt(jwt, secretKey);
        console.log('This is the log', payload.username.length !== 0);
        if (payload.username.length !== 0) {
          console.log('entered');
          const client = new MongoClient(process.env.MONGO_URI);
          await client.connect();
          const db = client.db('WEB');
          const users = db.collection('Users');
          if (req.body.password) {
            console.log("Data")
            const result = await users.updateOne(
              { username: payload.username },
              {
                $set: {
                  passwordHash: req.body.password,
                },
              },
            );
            console.log(result);
            if (result.modifiedCount > 0) {
              res.status(200);
              res.json({ message: 'OK' });
            } else {
              res.status(500);
              res.json({ message: 'Error' });
            }
          }
        } else {
          res.status(406);
          res.json({ message: 'User Not Found' });
        }
      }
    } else {
      res.status(500);
      res.json({ message: 'Error' });
    }
  } catch (err) {
    console.log(err);
  }
}
