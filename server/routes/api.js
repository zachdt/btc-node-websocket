const express = require("express")
const router = express.Router()
var request = require("request")

const getBlockCount = require("./methods/getBlockCount")

const dotenv = require("dotenv")
dotenv.config()

const USER = process.env.RPC_USER
const PASS = process.env.RPC_PASSWORD

const headers = {
  "content-type": "text/plain"
}

//Test Route
router.get("/test", (req, res) => res.json({ msg: "Server Active"}))

// VOID RPC METHODS
router.get("/getblockcount", (req, res) => {
  getBlockCount(req, res)
})

router.get("/getbestblockhash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/getconnectioncount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/getdifficulty", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/getblockchaininfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/getmininginfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/getpeerinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})

// COMPRESSED METHODS - NVM, CANT COMPRESS HASHES!!!
router.get("/getrawmempool", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


// 1 ARG RPC METHODS 
router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.index
  }"]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }"]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})


router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})



module.exports = router
