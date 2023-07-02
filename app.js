const express=require("express");
const bodyparser =require("body-parser");

// const ejs=require("ejs");
var items=["wake Up","Exercise","BreakFast"];
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",function(req,res)
{
    // res.send("ya working");
    var today=new Date();
    // var day="";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day=today.toLocaleDateString("en-US",options);
   
       
   
    res.render("hello",{dayname:day,newitem:items});

});
app.post("/",function(req,res)
{
    var item=req.body.task;
    items.push(item);
    res.redirect("/");
})
app.listen(3000,function(req,res)
{
    console.log("sever started on the port 3000")
})
