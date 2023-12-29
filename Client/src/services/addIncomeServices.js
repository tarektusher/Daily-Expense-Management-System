import Axios from '../axios';

const addIncome = async ({
      memberId,
      sourceOfIncome,
      amount
  }) =>{
    console.log(memberId);
    console.log(sourceOfIncome);
    console.log(amount);
  await Axios.post('/addincome',{
      memberId,
      sourceOfIncome,
      amount
  });
}

const addIncomeServices = { addIncome };

export default addIncomeServices;