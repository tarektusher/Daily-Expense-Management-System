import Axios from '../axios';

const addExpense = async ({
      memberId,
      sourceOfExpense,
      amount
  }) =>{
    console.log(memberId);
    console.log(sourceOfExpense);
    console.log(amount);
  await Axios.post('/addexpense',{
      memberId,
      sourceOfExpense,
      amount
  });
}

const delteEmployee = async({emp_id,email})=>{
  const requestData = {
    emp_id : emp_id,
    email : email
  }
  console.log(emp_id, email);
  await Axios.delete(`/employee/${emp_id}`,{ data : requestData });
  
}

const editEmployee = async ({
  firstname,
  lastname,
  emp_id,
  age,
  email,
  phonenumber,
  address,
  department,
  position,
  salary ,
  joiningdate,
  education,
  skills,
}) =>{
  
  await Axios.put(`/employee/${emp_id}`,{
      firstname,
      lastname,
      emp_id,
      age,
      email,
      phonenumber,
      address,
      department,
      position,
      salary ,
      joiningdate,
      education,
      skills,
    });
}
const addExpenseServices = { addExpense, delteEmployee, editEmployee};

export default addExpenseServices;