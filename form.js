var express = require('express');
var app = express();
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var TABLE = 'form3'; 
var mysql = mysql.createConnection({
    host:'localhost',
    database:'mydatabase',
    user: 'root',
    password: "subhangee19#" 
    });
    app.get('/',function(req,res,next){
        res.sendFile(__dirname+"/sample2.html");
        });


        app.post('/myaction', function(req, res) {
            console.log('req.body');
            console.log(req.body);
            res.write('You sent the Adhaar number "'+ req.body.ano+'".\n');
            res.write('You sent the first name "' + req.body.fn+'".\n');
            res.write('You sent the middle name "' + req.body.mn+'".\n');
            res.write('You sent the last name "' + req.body.lname+'".\n');
            res.write('You sent the date of birth "' + req.body.db+'".\n');
            res.write('You sent the gender "'+ req.body.gen+'".\n');
            res.write('You sent the office name "' + req.body.oname+'".\n');
            res.write('You sent the mobile number "' + req.body.mno+'".\n');
            res.write('You sent the Password "' + req.body.pass+'".\n');
            res.write('You sent the Confirm password "' + req.body.cpass+'".\n');
            res.end()

            mysql.connect(function(err)
            {
                    if (err) throw err;
                    console.log("Connected!");
                mysql.query("Insert into "+TABLE+" (ano,fn,mn,lname,db,gen,oname,mno,pass,cpass) VALUES ('"+req.body.ano+"','"+req.body.fn+"','"+req.body.mn+"','"+req.body.lname+"','"+req.body.db+"','"+req.body.gen+"','"+req.body.oname+"','"+req.body.mno+"','"+req.body.pass+"','"+req.body.cpass+"')",function(err, result)      
                {                                                      
                    if (err) throw err;
                    console.log("data saved");
                });
            });
        });
        app.listen(8080);
       console.log('Example app listening at port:8080');