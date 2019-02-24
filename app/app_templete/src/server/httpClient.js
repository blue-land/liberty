export default class HttpClient{
constructor(){
    this.host = "localhost";
    this.port = 3000;
}

static async Post(path,para,json_flag=true){
        const options = {
            host: this.host,
            port: this.port,
            method: "POST",
            path: path,
            headers: {
                "Content-Type": "application/json"
            }
        };
        var content= para;
this.request(options,content)

}


static request(options,content){
    const http = require("http");
    const addReq = http.request(options, res => {
        res.setEncoding("utf-8");
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
            return chunk
          });
          console.log(res)
        });
    addReq.write(JSON.stringify({ json:true, content:content}));
    addReq.end()

}


// static async request(options,content){
//     const http = require("http");
//     const addReq = http.request(options, res => {
//         res.setEncoding("utf-8");
//         res.on('data', (chunk) => {
//             console.log(`BODY: ${chunk}`);
//             return chunk
//           });
//           console.log(res)
//         });
//     addReq.write(JSON.stringify({ json:true, content:content}));
//     addReq.end();   
// }

}