import Axios from "../axios";
import { useQuery } from "react-query";

export const useGetAllIncome=()=>{
    return useQuery('useGetAllIncome',()=>
        Axios({
            method: 'GET',
            url : '/addIncome',
        })
    )
}

