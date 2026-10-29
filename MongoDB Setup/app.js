const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req,res) => {
    res.send("hey");
})

app.get('/', (req,res) => {
    res.send("hey");
})

app.get('/create', async(req,res) => {
    let createUser = await userModel.create({
        name: "Harsh",
        email: "harsh@123",
        username: "harsh25"

    })
    res.send(createUser);
   
})

app.get('/update', async(req,res) => {
    let updateUser = await userModel.findOneAndUpdate({username: "harsh25"},{name: "Harsh yadav"},{new: true});
    res.send(updateUser);
   
})

//read
app.get('/read', async(req,res) => {
    let readUser = await userModel.find({username: "harsh25"});
    res.send(readUser);
})

//delete
// app.get('/delete', async(req, res) =>{
//     let deleteUser = await userModel.deleteOne({username: "harsh25"});
//     res.send(deleteUser);
//     res.send("deleted");
// })

//crud operations mongodb me store ho rha hai? 
//yes, crud operations mongodb me store ho rha hai.
//how to check in mongodb?
//open mongodb compass and check the database mongopractice and collection users.

app.listen(3000)
