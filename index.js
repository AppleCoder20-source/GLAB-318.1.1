const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>Welcome to the homepage!</p>');
        res.write('<p>Check out the following pages:</p>');
        res.write('<ul>');
        res.write('<li><a href="/about">About Us</a></li>');
        res.write('<li><a href="/time">Current Time</a></li>');
        res.write('</ul>');
        res.end()

    } else if (req.url === '/about') {
        res.write('<h1>About Us</h1>');
        res.write('<p>Welcome to the About Page!</p>');
        res.end();

    } else if (req.url === '/time') {
        const times = new Date().toLocaleString();
        res.write('<h1>Time and Date Information!</h1>');
        res.write(`<p>${times}</p>`);
        res.end();

    } else {
        res.write('<h1 style = "color:red">Oops!</h1>');
        res.write('<p>This page doesnt exist</p>');
        res.write('<p>Try going back to the <a href="/">homepage</a>.</p>');
        res.end();
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
