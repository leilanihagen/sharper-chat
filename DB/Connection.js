const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const URI = 'mongodb+srv://leilani:CatsM3ow@sharperchatcluster.rlwe6.mongodb.net/sharper-chat?retryWrites=true&w=majority';
const mongoClient = new MongoClient(URI);

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
    // Unit test:
    console.log(mongoose.connection.readyState)
   // console.log('DB conected!!!!!!!!')
}
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected~');
})
module.exports = connectDB;