var mysql = require('mysql');
var express = require('express');
var app = express();

var TABLE = 'form2';

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
        res.sendFile(__dirname + '/form2.html')
    });

    app.post('/myaction',(req,res)=>{
       
        var occup = req.body.occup;
        var ypost = req.body.ypost;
        var ofadd = req.body.ofadd;
        var tno = req.body.tno;
        var ten = req.body.ten;
        var twe = req.body.twe;
        var dug = req.body.dug;
        var dpg = req.body.dpg;
        var sncn = req.body.sncn;
        var mug = req.body.mug;
        var mpg = req.body.mpg;
        var yps = req.body.yps;
        var ypc = req.body.ypc;
       
        var sql = "insert into " +TABLE+ "(Occupation_Service,Post,Address,Telephone,marks_in_10th,marks_in_12th,degree_in_UG,degree_in_PG,School_name,marks_in_ug,marks_in_pg,year_of_passing_school,year_of_passing_college) values ('"+occup+"','"+ypost+"','"+ofadd+"','"+tno+"','"+ten+"','"+twe+"','"+dug+"','"+dpg+"','"+sncn+"','"+mug+"','"+mpg+"','"+yps+"','"+ypc+"');";
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
app.listen(8085,function(){ console.log("Server listening on port ",this.address().port)});