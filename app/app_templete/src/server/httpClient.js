
export default class HttpClient {

    static host = "localhost";
    static port = '3000';

    static async Post(path, para, json_flag = true) {
        const uri = 'http://' + this.host + ':' + this.port + path
        const options = {
            method: "POST",
            uri: uri,
            json: para
        };
        var response = await this.Request(options)
        return response
    }

    static async Request(options) {
        var rp = require('request-promise');
        var response = await rp(options)
            .then(function (parsedBody) {
                return Promise.resolve(parsedBody)
            })
            .catch(function (err) {
                return Promise.resolve(err)
            })
        return response
    }
}
