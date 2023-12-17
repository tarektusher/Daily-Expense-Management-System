const express = require('express');
const bodyParser = require('body-parser');
const addIncomeRoutes = express();
addIncomeRoutes.use(bodyParser.json());
const addIncomeServices = require('../services/addIncomeServices');
const AddIncome = require('../models/AddIncome');


//! API to create a user 
addIncomeRoutes.post('/addIncome', async (req,res) =>{
    const {
        memberId,
        sourceOfIncome,
        amount
      } = req.body;
    try {
        await addIncomeServices.registerIncome({
            memberId,
            sourceOfIncome,
            amount
          });
        res.status(201).json({ message: 'Income Added Successfully' });
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to update a user
addIncomeRoutes.put('/addIncome/:id', async (req,res) =>{
    try {
        const memberId = {
            memberId : req.params.id,
        } 
        const body = req.body;
        const member = await AddIncome.findOneAndUpdate(memberId,body,{new : true});
        if(member){
            res.json(member);
        }
        else {
            res.status(404).json({message : `Member is not Found`});
        }
        
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to delete a User
addIncomeRoutes.delete('/addIncome/:id', async(req, res) =>{
    console.log(req.body.memberId);
    console.log(req.body.email);
     const { 
        memberId,
        email
    } = req.body
    try {
        const member_id = await AddIncome.findOne({memberId});
        const member_email = await AddIncome.findOne({email});
        if(member_id && member_email){
            if(JSON.stringify(member_email) === JSON.stringify(member_id)){
                await addIncome.findOneAndDelete({emp_id});
                res.status(200).json({message : 'User Deleted successfully'});
            }
            else{
                res.status(404).json({message : 'User Email and addIncome Id does not match '})
            }
        }
        else{
            res.status(404).json({message : `User is not Found`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})
//! API to get all User

addIncomeRoutes.get('/addIncome', async (req, res) =>{
    try {
        const addIncomes = await AddIncome.find({});
        if(addIncomes){
            res.json(addIncomes);
        }
        else{
            res.status(404).json({message : `No User Record`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to get a specific user
addIncomeRoutes.get('/addIncome/:id', async(req, res) =>{
    try {
        
            member_id = req.params.id;
            email = req.params.email;
        
        const member_id = await AddIncome.findOne({member_id});
        const member_email = await AddIncome.findOne({email});

        if(member_id && member_email){
            res.status(200).json(member_id);
        }
        else{
            res.status(404).json({message : `addIncome is not Found`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})
module.exports = addIncomeRoutes;