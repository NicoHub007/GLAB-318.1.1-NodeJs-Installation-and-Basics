const http = require("http");
const PORT = 3000;
console.log("Hello");
http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("Hello World");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
})
.listen(PORT, ()=>{
    console.log(`server is running on the port ${PORT}`)
})