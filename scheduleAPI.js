const express = require("express")
const router = express.Router()

const db = require("../database/connection")
const calculate = require("../logic/irrigationLogic")


router.post("/schedule",(req,res)=>{

const {

name,
phone,
email,
district,
village,
crop,
soil,
method,
area

} = req.body

const result = calculate(crop,soil,area)

db.run(

`INSERT INTO farmers
(name,phone,email,district,village,crop,soil,method,area,water,time)
VALUES(?,?,?,?,?,?,?,?,?,?,?)`,

[name,phone,email,district,village,crop,soil,method,area,result.water,result.time]

)

res.json(result)

})


router.get("/farmers",(req,res)=>{

db.all("SELECT * FROM farmers",(err,rows)=>{

res.json(rows)

})

})

module.exports = router