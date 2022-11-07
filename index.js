const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// User : proFlowers
// Pass: FE67qFfmJAjXKU4u


// Add database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6hyeg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const serviceCollection = client.db('proFlowers').collection('services');
        app.get('/services', async(req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })
    }
    finally{

    }

}

run().catch(err => console.error(err))


// Checking server running or not
app.get('/', (req, res) => {
    res.send("Pro Flowers server Running well")
});


// Server Running 
app.listen(port, (req, res) => {
    console.log("Server is running on :", port);
})