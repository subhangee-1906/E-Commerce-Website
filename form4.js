var mysql = require('mysql');
var express = require('express');
var app = express();

var TABLE = 'form4';

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydatabase',
    password: 'subhangee19#'
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
        res.sendFile(__dirname + '/form4.html')
    });

    app.post('/myaction',(req,res)=>{
       
        var dis = req.body.dis;
        var tes = req.body.tes;
        var city = req.body.city;
        var lps = req.body.lps;
        var sr1 = req.body.sr1;
        var tnam1 = req.body.tnam1;
        var tadd1 = req.body.tadd1;
        var sr2 = req.body.sr2;
        var tnam2 = req.body.tnam2;
        var tadd2 = req.body.tadd2;
       
        var sql = "insert into " +TABLE+ "(District,Tehsil,City,Local_police_station,Sr1,Name1,Address1,Sr2,Name2,Address2) values ('"+dis+"','"+tes+"','"+city+"','"+lps+"','"+sr1+"','"+tnam1+"','"+tadd1+"','"+sr2+"','"+tnam2+"','"+tadd2+"');";
        con.query(sql,(err,result) =>{
            if(err){
                console.log(err);
                res.send("Error in saving");
            }
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
app.listen(8084,function(){ console.log("Server listening on port ",this.address().port)});