import Axios from "../axios";
import { useQuery } from "react-query";

export const useGetAllExpense=()=>{
    return useQuery('useGetAllExpense',()=>
        Axios({
            method: 'GET',
            url : '/addExpense',
        })
    )
}

