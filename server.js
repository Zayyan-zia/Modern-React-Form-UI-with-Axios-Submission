const express=require('express');
const app=express();
const mysql=require('mysql2/promise');
const db= mysql.createPool({
host:'',
user:'',
password:'',
database:''
});
app.get('/api/world',(req,res,next)=>{
    const name='zayyan zia';
    res.send(name);
});
app.post(Routes,(req,res,next)=>{
   const {fullname,email,password}=req.body;
   res.send(fullname,'you have successfully added on database with password');
   db.execute('INSERT INTO users (name,eamil,password) VALUES(?,?,?)',[fullname,email,password]);
})
const port=process.env.PORT||3001;                                                                                                                                                                                                                                                                    
app.listen(port,()=>{
    console.log(`server running on https://localhost${port}`);
});
