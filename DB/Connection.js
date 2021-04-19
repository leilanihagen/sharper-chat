const mongoose = require('mongoose');

const URI = 'mongodb+srv://leilani:y@q4b_Zxq75BnNk@sharperchatcluster.rlwe6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// const client = new MongoClient(URI);

// async function run() {
//     try {
//       // Connect the client to the server
//       await client.connect();
//       // Establish and verify connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Connected successfully to server");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

const connectDB = async()=>{
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
   // console.log('DB conected!!!!!!!!')
}

module.exports = connectDB;