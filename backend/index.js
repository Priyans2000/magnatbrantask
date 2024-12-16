const express = require ("express")
const app =express()
const mongoose=require("mongoose")
const cors=require("cors");
const bodyParser = require('body-parser');
const adminRouter=require("./Routes/adminRouter")
require("dotenv").config();

const PORT =process.env.PORT || 5000
app.use(cors());
 

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("mongoose connected to database")
}).catch((err)=>{
    console.log("connected to database: ",err)
}) 


app.use("/admin",adminRouter)



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})