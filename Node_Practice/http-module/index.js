import http from 'node:http';


// creating my first server

const server = http.createServer((req, res) =>{
    res.end("Hello from Node Server!!");
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});

//to run this node index.js