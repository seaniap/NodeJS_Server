let http = require('http');

let myApp = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    })
    if (req.url == '/') {
        res.end("歡迎來到首頁。")
    } else if (req.url == '/about') {
        res.end("歡迎來到關於我們頁")
    } else {
        res.end("抱歉，找不到您的網頁。")
    }
});

myApp.listen(3000);