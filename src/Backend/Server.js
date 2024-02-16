import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import cors from 'cors'; 
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors()); 
const uri = 'mongodb://localhost:27017';
const dbName = 'URL_shortener';

app.post('/save-url', async (req, res) => {
    const { url } = req.body;

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db(dbName);
        await db.collection('urls').insertOne({ url });
        await client.close();

        res.json({ message: 'URL saved successfully.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});
app.get('/get-urls', async (req, res) => {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db(dbName);
        const urls = await db.collection('urls').find().toArray();
        await client.close();

        res.json({ urls });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
