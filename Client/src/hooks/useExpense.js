import Axios from "../axios";
import { useQuery } from "react-query";

 const useGetAllExpense = () =>{
    return useQuery('useGetAllExpense',()=>
        Axios({
            method: 'GET',
            url : '/addexpense',
        })
    )
}

const useGetExpenseList = ()=>{
    return useQuery ('useGetExpenseList', ()=>
        Axios({
            method : 'GET',
            url : '/Expenselist'
        })
    )
}

const useGetLatestExpense = () =>{
    return useQuery ('useGetLatestExpense',()=>
        Axios({
            method : 'GET',
            url : '/latestExpenseData'
        })
    )
}
const useExpense = {useGetAllExpense, useGetExpenseList, useGetLatestExpense}
export default useExpense;