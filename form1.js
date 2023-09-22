var mysql = require('mysql');
var express = require('express');
var app = express();

var TABLE = 'form1';

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
        res.sendFile(__dirname + '/form1.html')
    });

    app.post('/myaction',(req,res)=>{
       
        var cn = req.body.cn;
        var db = req.body.db;
        var iname = req.body.iname;
        var ino = req.body.ino;
        var eid = req.body.eid;
        var bname = req.body.bname;
        var sname = req.body.sname;
        var lmark = req.body.lmark;
        var local = req.body.local;
        var stnam = req.body.stnam;
        var dname = req.body.dname;
        var tname = req.body.tname;
        var vname = req.body.vname;
        var pno = req.body.pno;
        var rsince = req.body.rsince;
        var bname1 = req.body.bname1;
        var sname1 = req.body.sname1;
        var lmark1 = req.body.lmark1;
        var local1 = req.body.local1;
        var stname1 = req.body.stname1;
        var dname1 = req.body.dname1;
        var tname1 = req.body.tname1;
        var vname1 = req.body.vname1;
        var pno1 = req.body.pno1;
        var rsince1 = req.body.rsince1;
        var bname2 = req.body.bname2;
        var sname2 = req.body.sname2;
        var lmark2 = req.body.lmark2;
        var local2 = req.body.local2;
        var stname2 = req.body.stname2;
        var dname2 = req.body.dname2;
        var tname2 = req.body.tname2;
        var vname2 = req.body.vname2;
        var pno2 = req.body.pno2;
        var rsince2 = req.body.rsince2;
        var no = req.body.no;
       
        var sql = "insert into " +TABLE+ "(Applicant_Name,DOB,ID_Name,ID_Number,Email_Id,Building,street,Landmark,Locality,State,District,Tehsil,Village,Pincode,Resident_Since,Building1,Street1,Landmark1,Locality1,State1,District1,Tehsil1,Village1,Pincode1,Resident_Since1,Building2,Street2,Landmark2,Locality2,State2,District2,Tehsil2,Village2,Pincode2,Resident_Since2,Mobile_number) values ('"+cn+"','"+db+"','"+iname+"','"+ino+"','"+eid+"','"+bname+"','"+sname+"','"+lmark+"','"+local+"','"+stnam+"','"+dname+"','"+tname+"','"+vname+"','"+pno+"','"+rsince+"','"+bname1+"','"+sname1+"','"+lmark1+"','"+local1+"','"+stname1+"','"+dname1+"','"+tname1+"','"+vname1+"','"+pno1+"','"+rsince1+"','"+bname2+"','"+sname2+"','"+lmark2+"','"+local2+"','"+stname2+"','"+dname2+"','"+tname2+"','"+vname2+"','"+pno2+"','"+rsince2+"','"+no+"');";
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
app.listen(8089,function(){ console.log("Server listening on port ",this.address().port)});