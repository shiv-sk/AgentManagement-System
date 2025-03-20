"use client"
import { useAuth } from "@/context/Auth";
import { useTask } from "@/context/Task"
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskView(){
    const {viewTask , isLoading} = useTask();
    const {user} = useAuth();
    const {taskId} = useParams();
    const [task , setTask] = useState(null);
    const getTask = async()=>{
        if(!taskId){
            return;
        }
        const response = await viewTask(taskId);
        if(!response.success){
            alert(error);
        }
        setTask(response.data);
    }
    useEffect(()=>{
        getTask();
    } , [taskId])
    if(!user){
        redirect("/login");
    }
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
            <div className="w-full max-w-4xl bg-gray-700 shadow-md rounded-lg p-6 md:p-8 flex flex-col gap-6">
                {
                    isLoading ? "Loading...." : task ? (
                        <>
                            <h5 className="text-xl font-bold text-white mb-4">FirstName: {task.firstName}</h5>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <p className="text-white">Notes</p>
                                    <p className="text-white mt-2">{task.notes}</p>
                                </div>
                                <div className="flex-1">
                                    <span className="text-white">Phone</span>
                                    <p className="text-white mt-2">{task.phoneNumber}</p>
                                </div>
                            </div>   
                        </>
                    ) : (<p>task not found!</p>)
                }
                
            </div>
        </div>
    )
}