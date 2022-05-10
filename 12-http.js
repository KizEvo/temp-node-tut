const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our page");
    }
    if(req.url === '/about'){
        res.end("Here is our short");
    }
    res.end(`
    <h1>Oops!<h1>
    <p>TURN BACK IDIOT</p>
    <a href="/">Back home</a>
    `)
});



server.listen(5000)