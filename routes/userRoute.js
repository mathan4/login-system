const express=require("express")
const { signup, login, home } = require("../controllers/userController")
const verifyToken = require("../middleware/verifyUser")
const route=express()

route.post('/signup',signup)
route.post('/login',login)
route.get('/home',verifyToken,home)

module.exports=route