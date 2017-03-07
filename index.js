var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 7889;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  switch(path){
    case  '/index.html':
      var htmlString = fs.readFileSync('./index.html')
      response.setHeader('Content-Type','text/html')
      response.end(htmlString)
      break
    case '/style.css':
      var cssString = fs.readFileSync('./style.css')
      response.setHeader('Content-Type','text/css')
      response.end(cssString)
      break
    case '/main.js':
      var jsString = fs.readFileSync('./main.js')
      response.setHeader('Content-Type','application/javascript')
      response.end(jsString)
      break
    default:
      response.end('404')
      break
  }

  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 7889 成功')

