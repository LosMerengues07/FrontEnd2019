var express = require('express')
var multer = require('multer')
var upload = multer()
var buffer = {}
var app = express()
var myToken = 'XIBATMIIODSKYCNNLFMTWDRSUO'

app.use(express.static('../page/'))

app.post('/api/compute', upload.none(), function (req, res) {
  const token = req.get('hw-token')
  if (token === myToken) {
    const para1 = parseInt(req.body.firstParam)
    const para2 = parseInt(req.body.secondParam)
    const type = req.body.type
    let ans
    switch (type) {
      case 'ADD':
        ans = para1 + para2
        break
      case 'SUB':
        ans = para1 - para2
        break
      case 'MUL':
        ans = para1 * para2
        break
      case 'DIV':
        ans = Math.floor(para1 / para2)
    }
    res.json({ ans: ans })
  } else {
    res.sendStatus(403)
  }
})

app.post('/api/pair', upload.none(), function (req, res) {
  const token = req.get('hw-token')
  if (token === myToken) {
    const name = req.body.name
    const key = req.body.key
    buffer[name] = key
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
})

app.get('/api/pair', function (req, res) {
  const token = req.get('hw-token')
  if (token === myToken) {
    const name = req.query.name
    if (buffer[name]) {
      res.json({ key: buffer[name] })
    } else {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(403)
  }
})

app.delete('/api/pair', upload.none(), function (req, res) {
  const token = req.get('hw-token')
  if (token === myToken) {
    const name = req.query.name
    if (buffer[name]) {
      delete (buffer[name])
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(403)
  }
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
