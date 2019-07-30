var mysqldb = require("mysql")

var connection = mysqldb.createConnection(
    {
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'productsdb'
    })

    connection.connect((error) =>
{
    if(error)
    {
        throw error
    console.log(error)
    }
    console.log("connected to database")
    var createtablequery = "create table products(name varchar(65),price int(10),description varchar(65), id int(8) auto_increment,primary key(id))"
    connection.query(createtablequery,(error,success) =>
{
    if(error)
    {
        throw error
    }
    console.log("table created successfully")
})
})