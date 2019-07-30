var express = require("express")

var mysql = require("mysql")
var cors = require("cors")

var connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'productsdb',
        port:3306
    }
)

connection.connect((error) =>
{
    if(error)
    {
        throw error
        console.log(error)
    }
    console.log("success")

})
var app = express()
app.use(cors())


app.get('/all',(req,res) =>
{
    
   
    var query = "select * from products"
    connection.query(query,(error,success) =>
{
    if(error)
    {
        throw error
        console.log(error)
    }
    console.log(JSON.stringify(success))
    res.send(JSON.stringify(success))
    
    res.end()
})
}).listen(1002)
