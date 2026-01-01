const express = require("express");
const app=express();
app.use(express.json());
let name="suriya";
let dept="IT";
let age =21;
app.get("/users",(req,res)=>{
  res.json({
    name:name,
    dept:dept,
    age:21
  });
});
app.put("/users",(req,res)=>{
  const{name:newName,dept:newDept,age:newAge}=req.body;
  if(newName)name=newName;
  if(newDept)dept=newDept;
  if(newAge)age=newAge;
  res.json({
    message: "User updated successfully",
    updatedData: {
      name,
      dept,
      age
    }
  });
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/users");
});