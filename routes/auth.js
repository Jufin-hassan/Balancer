const express = require('express')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config');
const User = require('../models/User');
const auth = require('../middleware/auth')

const router = express.Router()

// @Route   POST api/auth
// @desc    checking user credentials
// @access  public
router.post('/',[
    check('email','Please enter the valid email!').isEmail(),
    check('password','Please enter the password').exists()
    ],
    async (req,res)=> {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
        }

        const {email,password} = req.body

        try {
            let user = await User.findOne({email})

            if(!user){
                return res.status(400).json({msg:"Invalid credentials!"})
            }

            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).json({msg:"Invalid credentials!"})
            }

            const payload = {
                user : {
                    id : user.id
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                expiresIn:360000  //usually it ll be 3600. Since for dev purpose  
                },                   //i ve added couple of zeroes..
                (err,token)=>{
                    if(err) throw err
                    res.json({token})
                })
    
        } catch (err) {
            console.error(err.message)
            res.status(500).message('Server error!')
        }
       

})

// @Route   GET api/auth
// @desc    Logging in the user
// @access  private
router.get('/',auth,async (req,res)=> {
    try {
        const user =  await User.findById(req.user.id).select('-password')
        res.json({user})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error!')
    }
    
})

module.exports = router