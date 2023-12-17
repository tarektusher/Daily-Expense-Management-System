const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    memberId : {
        type : String,
        required : true,
        unique  : true,
    },
    sourceOfIncome : {
        type : String,
        required : true,
    },
    amount : {
        type : Number,
        required : true,
    },
    
},
    {
        timestamps : true
    }
   )

const addIncome = mongoose.model('addIncome',incomeSchema);
module.exports = addIncome;