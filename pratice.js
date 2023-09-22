var mysql = require('mysql');
var express = require('express');
var app = express();

var TABLE = 'form2';

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'projectdb',
    password: 'password'
})

con.connect((err)=>{
    if (err){
        console.log(err);
        res.send("Error in connecting to DB");
    }
    console.log("Connected!");

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    app.get('/',(req, res)=>{
        res.sendFile(__dirname + '/form2.html')
    });

    app.post('/myaction',(req,res)=>{
       
        var occup = req.body.occup;
        var ypost = req.body.ypost;
        var ofadd = req.body.ofadd;
        var tno = req.body.tno;
       
        var sql = "insert into " +TABLE+ "(Occupation_Service,Post,Address,Telephone) values ('"+occup+"','"+ypost+"','"+ofadd+"','"+tno+"');";
        con.query(sql,(err,result) =>{
            if(err){
                console.log(err);
                res.send("Error in saving");
            }olp
            else{
                console.log("Inserted Successfully");
                con.query("select * from " +TABLE, (err,result) => {
                    if(err){
                        console.log(err);       
                    }
                    res.send(result);                   
                })
            }
        })
    })
})
app.listen(8080,function(){ console.log("Server listening on port ",this.address().port)});