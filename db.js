var express = require("express")
var mysqldb = require("mysql")


var connection = mysqldb.createConnection(
    {
    host:'localhost',
    user:'root',
    password:'',
    port:3306
    })

    connection.connect((error) =>
{
    if(error)
    {
        throw error
        console.log(error)
    }

    console.log("conected to mysql server.........")

    var createquery ="create database productsdb"
    connection.query(createquery,(error,success) =>
{
    if(error)
    {
        throw error
        console.log(error)
    }
    console.log("successfull")
})
})

var expressapp = express()

expressapp.get('/',(req,res) =>{
    res.send("hello from express")
})

expressapp.get('/hello',(req,res) =>{
    res.send("message: hello")
    console.log(req.query)
})


expressapp.listen(1234)
