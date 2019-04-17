const express = require('express')

const app = express()

const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

const router = express.Router()

router.get('/seller',function(req,res){
    res.json({
        errno:0,
        data:seller
    })
})

router.get('/goods',function(req,res){
    
})