
const addExpense = require('../models/AddExpense')

const registerExpense = async ({
        memberId,
        sourceOfExpense,
        amount
    }) =>{
    const expense = new addExpense ({
        memberId,
        sourceOfExpense,
        amount
    });
    await expense.save();
}

module.exports = {
    registerExpense,
}