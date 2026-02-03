const express=require('express');
const bodyparser=require('cookie-parser');
const app=express();
app.use(bodyparser());
app.get('/',(req,res)=>{
    res.send('hello,welcome to the body server');

});


app.get('/set-cookie',(req,res)=>{
    res.cookie('username','john_doe');
    res.send('Cookie has been set');
});
app.get('/get-cookie',(req,res)=>{
    
    res.send(`Username Cookie: ${req.cookies.username}`);
});


app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
});
