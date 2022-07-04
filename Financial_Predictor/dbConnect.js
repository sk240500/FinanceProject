const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://skAdmin:hemangi%4025@cluster0.xp40swu.mongodb.net/finance_tracker' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected', () => console.log('Mongo DB Connection Successfull'))