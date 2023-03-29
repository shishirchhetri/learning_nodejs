const http = require('http');
const server = http.createServer((req,res) => {
    console.log('request made')
    console.log(req.url,req.method)
    //set header content using set
    res.setHeader('Content-Type','text/plain') //change the plain to html if we want to send html and change the normal text to html element in the res.write

    res.write('hello, world\n');
    res.write("This is new world!!")
    res.end();
})


//listensing to the requests  made
server.listen(3000,'localhost',() =>{
    console.log('Listening for req on port 3000');
})