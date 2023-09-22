var mysql = require('mysql');
var express = require('express');
var app = express();

var TABLE = 'form3';

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
        res.sendFile(__dirname + '/form3.html')
    });

    app.post('/myaction',(req,res)=>{
       
        var vim = req.body.vim;
        var heig = req.body.heig;
        var weig = req.body.weig;
        var ap = req.body.ap;
        var aip = req.body.aip;
        var desi = req.body.desi;
        var comp = req.body.comp;
        
       
        var sql = "insert into " +TABLE+ "(Visible_Identification_Mark,Height,Weight,Arrested,Active_in_politics,Designation,Company) values ('"+vim+"','"+heig+"','"+weig+"','"+ap+"','"+aip+"','"+desi+"','"+comp+"');";
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
app.listen(8086,function(){ console.log("Server listening on port ",this.address().port)});