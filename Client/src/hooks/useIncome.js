import Axios from "../axios";
import { useQuery } from "react-query";

const useGetAllIncome=()=>{
    return useQuery('useGetAllIncome',()=>
        Axios({
            method: 'GET',
            url : '/addIncome',
        })
    )
}

const useGetIncomeList = ()=>{
    return useQuery ('useGetIncomeList', ()=>
        Axios({
            method : 'GET',
            url : '/incomelist'
        })
    )
}

const useGetLatestIncome = () =>{
    return useQuery ('useGetLatestIncome',()=>
        Axios({
            method : 'GET',
            url : '/latestIncomeData'
        })
    )
}
const useIncome = {useGetAllIncome, useGetIncomeList, useGetLatestIncome}
export default useIncome;