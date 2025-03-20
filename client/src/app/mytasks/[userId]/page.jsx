"use client"
import { useAuth } from "@/context/Auth";
import { useTask } from "@/context/Task";
import { redirect, useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function MyTasks(){
    const {userId} = useParams();
    const {tasksOfUser , error} = useTask();
    const {user} = useAuth();
    const [tasks , setTasks] = useState([]);
    const handleOnClick = (taskId)=>{
        if(!taskId){
            return;
        }
        redirect(`/taskview/${taskId}`)
    }
    const getUserTasks = async()=>{
        if(!userId){
            return;
        }
        const response = await tasksOfUser(userId);
        console.log(response);
        if(!response.success){
            alert(error);
        }
        setTasks(response?.data);
    }
    useEffect(()=>{
        getUserTasks();
    } , [])
    if(!user){
        redirect("/login")
    }
    return(
        <div className="w-full flex flex-col items-center gap-4 mt-5 min-h-screen">
            {
                tasks && tasks.length > 0 ? tasks.map((task)=>(
                    <div className="card card-border bg-base-100 max-w-md w-full" key={task?._id}>
                        <div className="card-body">
                            <h2 className="card-title">{task.notes}</h2>
                            <div className="card-actions justify-end">
                            <button className="btn bg-blue-500 hover:bg-blue-700" 
                            onClick={()=>handleOnClick(task?._id)}>View</button>
                            </div>
                        </div>
                    </div>
                )) : (<p>no tasks for you!</p>)
            }
            
            
        </div>
    )
}