import express from "express";
import User from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';
import verifyToken from "./auth.js";
import mongoose from 'mongoose';
const user = express.Router();

// --- Return List of Current Users ---


user.get('/', async (req, res) => {
    try {
        const customerSchema = User;
        const Customer = mongoose.model('User', customerSchema);

         await Customer.create({ firstname: 'D', lastname: 'd@foo.bar' });
        // await Customer.create({ name: 'B', age: 28, email: 'b@foo.bar' });

        // Find all customers
        const docs = await Customer.find();
        console.log(docs)
        // console.log(db.collection(users).find())
        // const users = await Users.find();
        // console.log(users);
        res.json(docs);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Create New User ---

user.post('/create', async (req, res) => {
    const customerSchema = User;
    const Customer = mongoose.model('User', customerSchema);
    const existingUser = await Customer.findOne({username: req.body.username});
    const existingEmail = await Customer.findOne({email: req.body.email});
    console.log(req.body.progress)
    if(existingUser !== null)
    {
        res.json({ message: "Username already exists."});
        return;
    }

    if(existingEmail !== null)
    {
        res.json({ message: "Email address already exists."});
        return;
    }

    let salt;
    let hash;
    let test = [{
        module1: {
            progress: [1, 0, 0]
        },
        module2: {
            progress: [0,0,0]
        }
        
    }]
    try {
        salt = await bcrypt.genSalt(12);
        hash = await bcrypt.hash(req.body.password, salt);
    }
    catch (err) {
        res.json({message: 'Password hashing failed.'});
        return;
    }
    const user = new Customer({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: hash,
        progress: test,
        complete: false
    });
    console.log(user.progress)
    try {
        const saveUser = await user.save();
        console.log(saveUser)
        res.json(saveUser);
        
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Get User By Id ---

user.get('/:userId', async (req, res) => {
    try {
        console.log(req.params['userId']);
        const users = await User.findById(req.params['userId']);
        res.json(users);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Delete User By Id ---

user.delete('/:userId', async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({ _id: req.params['userId'] });
        res.json(deleteUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Update User ---

user.patch('/:userId', async (req, res) => {
    try {
        const updateUser = await User.updateOne({ _id: req.params['userId'] }, { $set: { firstname: req.body['name'] }});
        res.json(updateUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Login to Existing User ---

user.post('/login', async (req, res) => {
    try {
        const customerSchema = User;
        const Customer = mongoose.model('User', customerSchema);
        const loginUser = await Customer.findOne({username: req.body.username});
        if(loginUser !== null) {
            const passValid = await bcrypt.compare(req.body.password, loginUser.password);
            if(!passValid) {
                res.json({message: 'Invalid username or password!'});
                return;
            }
            //const token = jwt.sign({_id: loginUser._id}, process.env.NOT_A_SECRET);
            res.json({token: loginUser});
            return;
        }
        res.json({message: 'Invalid username or password!'});
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Get Existing User Data ---

user.post('/getUser', async (req, res) => {
    try{
        let token = verifyToken(req.body.token);
        if(token === false)
        {
            res.json({message: 'Invalid token recieved!'});
            return;
        }
        const user = await User.findById(token._id);
        res.json({user});
        return;
    }
    catch (err){
        res.json({message: 'Error: Something is incorrecto!' })
    }
});

user.post('/progressCourse', async (req, res) => {
    try{
        // let token = verifyToken(req.body.username);
        // if(token === false)
        // {
        //     res.json({message: 'Invalid token recieved!'});
        //     return;
        // }
        
        const customerSchema = User;
        const Customer = mongoose.model('User', customerSchema);
        console.log(req.body.updatedValue)

        const user = await Customer.findOneAndUpdate({username: req.body.username}, req.body.updatedValue, {new: true});
        // console.log(user)
        res.json({user});
        return;
    }
    catch (err){
        res.json({message: 'Error: Something is incorrecto!' })
    }
});

user.post('/resetPassword', async (req, res) => {
    try{
        // let token = verifyToken(req.body.username);
        // if(token === false)
        // {
        //     res.json({message: 'Invalid token recieved!'});
        //     return;
        // }
        
        const customerSchema = User;
        const Customer = mongoose.model('User', customerSchema);
        //console.log(req.body.updatedValue)
        let salt;
    let hash;
        try {
            salt = await bcrypt.genSalt(12);
            hash = await bcrypt.hash(req.body.updatedValue, salt);
        }
        catch (err) {
            res.json({message: 'Password hashing failed.'});
            return;
        }
        const user = await Customer.findOneAndUpdate({username: req.body.username}, {password: hash}, {new: true});
        // console.log(user)
        res.json({user});
        
        return;
    }
    catch (err){
        res.json({message: 'Error: Something is incorrecto!' })
    }
});

user.post('/updateInfo', async (req, res) => {
    try{
        // let token = verifyToken(req.body.username);
        // if(token === false)
        // {
        //     res.json({message: 'Invalid token recieved!'});
        //     return;
        // }
        
        const customerSchema = User;
        const Customer = mongoose.model('User', customerSchema);
        //console.log(req.body.updatedValue)
        let salt;
    let hash;
       
        const user = await Customer.findOneAndUpdate({username: req.body.username}, req.body.updatedValue, {new: true});
        // console.log(user)
        res.json({user});
        
        return;
    }
    catch (err){
        res.json({message: 'Error: Something is incorrecto!' })
    }
});

export default user;
