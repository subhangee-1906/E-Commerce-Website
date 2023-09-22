var mysql = require('mysql');
var express = require('express');
var app = express();

var TABLE = 'form5';

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
        res.sendFile(__dirname + '/form5.html')
    });

    app.post('/myaction',(req,res)=>{
       
        var photo = req.body.photo;
        var sign = req.body.sign;
        var pd1 = req.body.pd1;
        var pd2 = req.body.pd2;
        var pd3 = req.body.pd3;
        var pd4 = req.body.pd4;
        
       
        var sql = "insert into " +TABLE+ "(Photo,Sign,SSC,PAN,Passport,Letter) values ('"+photo+"','"+sign+"','"+pd1+"','"+pd2+"','"+pd3+"','"+pd4+"');";
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
app.listen(8083,function(){ console.log("Server listening on port ",this.address().port)});