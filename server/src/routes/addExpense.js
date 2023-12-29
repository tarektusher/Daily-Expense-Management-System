const express = require('express');
const bodyParser = require('body-parser');
const addExpenseRoutes = express();
addExpenseRoutes.use(bodyParser.json());
const addExpenseServices = require('../services/addExpenseServices');
const AddExpense = require('../models/AddExpense');


//! API to create a user 
addExpenseRoutes.post('/addexpense', async (req,res) =>{
    const {
        memberId,
        sourceOfExpense,
        amount
      } = req.body;
    try {
        
        console.log(memberId);
        console.log(sourceOfExpense);
        console.log(amount);
        await addExpenseServices.registerExpense({
            memberId,
            sourceOfExpense,
            amount
          });
        res.status(201).json({ message: 'Expense Added Successfully' });
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})
//! API to get Latest Expense
addExpenseRoutes.get('/latestExpenseData', async (req, res) => {
    try {
      // Assuming 'timestamp' is the field representing the insertion time
      const latestData = await AddExpense.findOne().sort({ timestamp: -1 }).limit(1);
      console.log(latestData)
      res.json(latestData);
    } catch (error) {
      console.error('Error fetching latest data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
//! API to get total user income 

addExpenseRoutes.get('/addexpense', async (req, res) =>{
    try {

        const addExpense = await AddExpense.find({});
        if(addExpense && addExpense.length > 0){
            let totalAmount = 0;
            addExpense.forEach((expense)=>{
                totalAmount +=expense.amount;
                
            })
            res.json(totalAmount);
        }
        else{
            res.status(404).json({message : `No User Record`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to update a user
addExpenseRoutes.put('/addExpense/:id', async (req,res) =>{
    try {
        const memberId = {
            memberId : req.params.id,
        } 
        const body = req.body;
        const member = await AddExpense.findOneAndUpdate(memberId,body,{new : true});
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
addExpenseRoutes.delete('/addExpense/:id', async(req, res) =>{
    console.log(req.body.memberId);
    console.log(req.body.email);
     const { 
        memberId,
        email
    } = req.body
    try {
        const member_id = await AddExpense.findOne({memberId});
        const member_email = await AddExpense.findOne({email});
        if(member_id && member_email){
            if(JSON.stringify(member_email) === JSON.stringify(member_id)){
                await AddExpense.findOneAndDelete({emp_id});
                res.status(200).json({message : 'User Deleted successfully'});
            }
            else{
                res.status(404).json({message : 'User Email and addExpense Id does not match '})
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

addExpenseRoutes.get('/addexpense', async (req, res) =>{
    try {
        const addExpenses = await AddExpense.find({});
        if(addExpenses){
            res.json(addExpenses);
        }
        else{
            res.status(404).json({message : `No User Record`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to get a specific user
addExpenseRoutes.get('/addExpense/:id', async(req, res) =>{
    try {
        
            member_id = req.params.id;
            email = req.params.email;
        
        const member_id = await AddExpense.findOne({member_id});
        const member_email = await AddExpense.findOne({email});

        if(member_id && member_email){
            res.status(200).json(member_id);
        }
        else{
            res.status(404).json({message : `addExpense is not Found`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})
module.exports = addExpenseRoutes;