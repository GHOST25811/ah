const db = require("./db");
var pr={};
/*
pr.getinfo=(lim=-1,result)=>{
let  query="select * from author";
if(lim>-1)
query+="limit"+db.escape(lim);
db.query(query,(err,res )=>{

    if (err) {
        result(err, null);
    } 
    else {
        result(null, res);
    }
})

};*/

pr.getinfo=(limit=-1,result)=>{
    console.log('on');
    let query = "select * from message ";
        //db.escape(name + "%");
    if (limit > -1) {
        query += " LIMIT " + db.escape(Number.parseInt(limit));}
    
       console.log(query);
    db.query(query , (err, res, fields) => {
    
        if (err) {
            console.log(err);
            result(err, null);
        }
        else {       
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = pr;

