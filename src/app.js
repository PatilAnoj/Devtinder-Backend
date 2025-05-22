const express=require("express");
const app=express();

// app.use("/test",(req,res)=>{
//     res.send("hello from the server test");
// });

// app.use("/",(req,res)=>{
//     res.send("hello from the server");
// });

app.get("/user",(req,res)=>{
    res.send({username:"Akshay",userid:"1234"})
})

app.post("/user",(req,res)=>{
    res.send("added new user")
})

app.patch("/user",(req,res)=>{
    res.send("user details updated");
})

app.delete("/user",(req,res)=>{
    res.send("user deleted");
})

app.listen(3000,()=>{
    console.log("server started on port 3000")
})