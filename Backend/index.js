import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
const app=express()
dotenv.config()

const connect=async()=>{
try{
  await mongoose.connect(process.env.MONGO)
}catch(error){
  throw error
}
}

app.use("/api/auth",authRoute)
app.use("/apihotels",hotelsRoute)
app.use("/api/users",usersRoute)
app.use("/api/rooms",roomsRoute)

app.listen(8800,()=>{
  connect()
  console.log("Connected to backend..")
})