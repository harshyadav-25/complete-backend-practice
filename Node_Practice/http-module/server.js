import http from 'node:http';

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/plain');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    if(req.method === 'GET' && req.url === '/'){
        res.statusCode = 200;
        res.end('Hello from Harsh  Server !!');
    }
    else if (req.method === 'GET' && req.url === '/about') {
        res.statusCode = 200;
        res.end('This is About Page');
    } 
    else if (req.method === 'GET' && req.url === '/contact') {
        res.statusCode = 200;
        res.end('Contact Us');
    }
    else if (req.method === 'GET' && req.url === '/skills') {
        res.statusCode = 200;
        res.end('I have rquired skills');
    }
    else if (req.method === 'GET' && req.url === '/api/user') {
        const user = {
            name: 'Harsh',
            role: 'Backend Developer',
            learning: 'MERN Stack'
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
    }
    
    else {
        res.statusCode = 404;
        res.end('404 - Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('server is running buddy!!');
})