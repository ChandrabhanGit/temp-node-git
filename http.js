const http = require(`http`)
const server = http.createServer((req,res) =>{
    if(req.url ===`/`)
    {
        res.end(`end ! welcome to our home page`);
    }
    if(req.url === `/about`)
    {
        res.end(`here is our short history`);
    }
    res.end(
        `
        <h1>oops!</h1>
        <p>not find the page</p>
        <a href="/">backhome page</a>
    `)
})

server.listen(5000)//what port is our server is using


