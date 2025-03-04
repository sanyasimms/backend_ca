const express=require("express");
const app=express();
app.use(express.json());
const users=[
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30, email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@example.com"}
];
app.get("/users",async(req,res)=>{
    try{
    const friend= await users.find();
    if(!users) return res.status(404).json({message:"user not found"});
    res.status(200).json({message:"user found",data:{friend}});
    }catch(err){
        res.status(400).json({message:"user parameter can not be empty"})
    }
});
const port=5000;
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})