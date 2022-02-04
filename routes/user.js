const express = require('express')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')


const User = require('../models/User') //model of user

const router = express.Router()




// @Route   POST api/user
// @desc    registering user
// @access  public
router.post('/',[
    check('name','Please enter your name!')
    .not()
    .isEmpty(),
    check('email','Please enter a valid Email').isEmail(),
    check('password','Password must be atleast 6 charecters long')
    .isLength({min:6}),
    check('start_time','Please enter your work beginning time').notEmpty(),
    check('end_time','Please enter your work ending time').notEmpty(),
    check('breakfast','Please enter your breakfast time').notEmpty(),
    check('lunch','Please enter your lunch time').notEmpty(),
    check('dinner','Please enter your dinner time').notEmpty(),
],async (req,res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
       return res.status(400).json({errors : errors.array()})
    }

    const {name,email,password,start_time,end_time,breakfast,lunch,dinner} = req.body

    try {
        let user = await User.findOne({email})
        //Checking if user already exists
        if(user){
            return res.status(400).json({msg:"User already exists!"})
        }

        user = new User({
            name,
            email,
            password,
            start_time,
            end_time,
            breakfast,
            lunch,
            dinner
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt)
        await user.save()

        const payload = {
            user : {
                id : user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
            expiresIn:360000
            },
            (err,token)=>{
                if(err) throw err
                res.json({token})
            })

    } catch (err) {
        console.error(err.message)
        res.status(500).message('Server error!')
    }

    

})


//  PUT api/user
//  updating contact
//  private
router.put('/:id',auth,async (req,res)=> {
    const {name,start_time,end_time,breakfast,lunch,dinner} = req.body

    const userUpdate = {}

    if(name) userUpdate.name = name
    if(start_time) userUpdate.start_time = start_time
    if(end_time) userUpdate.end_time = end_time
    if(breakfast) userUpdate.breakfast = breakfast
    if(lunch) userUpdate.lunch = lunch
    if(dinner) userUpdate.dinner = dinner

    try {
        let user = await User.findById(req.params.id)

        //contact is thr?
        if(!user) res.status(404).json({msg:'Contact not found'})

        //Only the user who created the contact can modify
        //wen hacker uses postman or ajax this saves us
        if(user._id.toString() !== req.user.id) res.status(401).json({msg:'Unauthorized Access'})

        contact = await User.findByIdAndUpdate(req.params.id,
            {$set:userUpdate},
            {new:true}
            )

        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error!')
    }
})


module.exports = router