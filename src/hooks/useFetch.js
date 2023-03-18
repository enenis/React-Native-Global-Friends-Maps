import React,{useEffect,useState,useCallback} from 'react'
import { View,Text } from 'react-native'
import axios from "axios"


function useFetch(url) {
    const[data,setData]=useState()
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(true)


    const fetch= useCallback( async()=>{
        try {
            const{data:responseData}=await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    },[url])
     

    useEffect(()=>{
        fetch()
    },[fetch])

  return{data,loading,error}
}

export default useFetch