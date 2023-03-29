const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("request received from port 3001")

    //setting header file
    res.setHeader('Content-Type','text-html');

    let path = './view/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;       //network codes for the status
            break;
        case '/about':
            path +='about.html';
            res.statusCode = 200;
            break;

            case '/about-me':
                res.statusCode = 301       //resource moved form the source and is redirected to sth else
                res.setHeader('Location','/about');     //for redirect links 
                res.end();
                break;

        default:
            path +='404.html'
            res.statusCode = 400;       
            break;
    }


//send html file
fs.readFile(path,(err,data) =>{
    if(err){
        console.log(err)
        res.end();
    }else{
        // res.write(data);    //no need for single line if muntiple lines we write one after another
        res.end(data);
    }
})
})
server.listen(3001,'localhost',()=>{
    console.log("Listening to the requests in port 3001")
})