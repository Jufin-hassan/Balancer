const express = require("express")

const app = express()
const connectDb = require('./config/db')
const path = require('path')

app.use(express.json({extended:false}))

//routes
const user = require('./routes/user')
const auth = require('./routes/auth')

const { check } = require("express-validator")
app.use('/api/user',user)
app.use('/api/auth',auth)


if(process.env.NODE_ENV === 'production'){
    //setting static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server started at port ",PORT);
})

connectDb();