
const addIncome = require('../models/AddIncome')

const registerIncome = async ({
        memberId,
        sourceOfIncome,
        amount
    }) =>{
    const income = new addIncome ({
        memberId,
        sourceOfIncome,
        amount});
    await income.save();
}
module.exports = {
    registerIncome,
}