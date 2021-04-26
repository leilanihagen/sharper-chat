const http = require('http');
const app = require('./app');
// const connectDB = require('./DB/Connection');
// const app = express();

// connectDB();
const Port = process.env.Port || 3000; // check for open ports, else use 3000

// Academind tutorial:
const server = http.createServer(app);
server.listen(Port);

// app.listen(Port, ()=>console.log('Server started!'));
