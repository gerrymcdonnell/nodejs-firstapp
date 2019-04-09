// in terminal node app.js

//http from here see vid 22 on HTTP
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
});


server.listen(3000);
console.log('Listening on port 3000...');