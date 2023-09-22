var mysql = require('mysql');
var express = require('express');
var app = express();

var TABLE = 'form6';

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
        res.sendFile(__dirname + '/form6.html')
    });

    app.post('/myaction',(req,res)=>{
       
        var ano = req.body.ano;
        var fn = req.body.fn;
        var mn = req.body.mn;
        var ln = req.body.tln;
        var db = req.body.db;
        var gen = req.body.gen;
        var oname = req.body.oname;
        var eid = req.body.eid;
        var no = req.body.no;
        var pass = req.body.pass;
        var cpass = req.body.cpass;
        
       
        var sql = "insert into " +TABLE+ "(adhaar_no,first_name,middle_name,last_name,DOB,gender,cp_sp,email_id,mob_no,password,c_password) values ('"+ano+"','"+fn+"','"+mn+"','"+ln+"','"+db+"','"+gen+"','"+oname+"','"+eid+"','"+no+"','"+pass+"','"+cpass+"');";
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
app.listen(8082,function(){ console.log("Server listening on port ",this.address().port)});