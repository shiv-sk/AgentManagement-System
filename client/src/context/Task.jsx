"use client"
import { createContext, useContext, useState } from "react";
import {baseUrl, getAndDeleteReq, postAndPatchReq} from "../apiCalls/apiCalls"

const TaskContext = createContext({
    user:null,
    tasksOfUser:()=>{},
    viewTask:()=>{},
    newTask:()=>{},
})
const useTask = ()=>useContext(TaskContext);
const TaskProvider = ({children})=>{
    const [error , setError] = useState(false);
    const [isLoading , setIsLoading] = useState(false);

    const tasksOfUser = async(userId)=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/task/user-tasks/${userId}` , "get");
            // console.log("response from AuthContext! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from AuthContext! " , error);
            const errorMessage = error.response?.data?.message || "login failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "login failed." };
        }finally{
            setIsLoading(false);
        }
    }
    const viewTask = async(taskId)=>{
        try {
            setIsLoading(true);
            const response = await getAndDeleteReq(`${baseUrl}/task/${taskId}` , "get");
            // console.log("response from AuthContext! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from AuthContext! " , error);
            const errorMessage = error.response?.data?.message || "login failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "login failed." };
        }finally{
            setIsLoading(false);
        }
    }
    const newTask = async(data)=>{
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/task/${taskId}` , "post" , data , true);
            // console.log("response from AuthContext! " , response?.data);
            return { success: true, data: response?.data };
        } catch (error) {
            console.log("error from AuthContext! " , error);
            const errorMessage = error.response?.data?.message || "login failed. Please try again.";
            setError(errorMessage);
            return { success: false, error: errorMessage || "login failed." };
        }finally{
            setIsLoading(false);
        }
    }
    return(
        <TaskContext.Provider value={{tasksOfUser ,  viewTask , newTask , error , isLoading}}>
            {children}
        </TaskContext.Provider>
    )
}

export {TaskProvider , useTask}