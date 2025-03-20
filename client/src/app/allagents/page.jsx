"use client"

import { useAuth } from "@/context/Auth"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function allAgents(){
    const {getUsers , isLoading , error , deleteUser , user} = useAuth();
    const [agents , setAgents] = useState([]);
    const getAllAgents = async()=>{
        const response = await getUsers();
        if(!response.success){
            alert(error);
        }
        setAgents(response?.data);
    }
    useEffect(()=>{
        getAllAgents();
    } , [])
    if(!user){
        redirect("/login");
    }
    return(
        <div className="w-full flex flex-col items-center gap-4 mt-5 min-h-screen">
            {
                isLoading ? "Loading......" : agents && agents.length > 0 ? agents.map((agent)=>(
                    <div className="card card-border bg-base-100 max-w-md w-full" key={agent?._id}>
                        <div className="card-body">
                            <h2 className="card-title">{agent.name}</h2>
                            <div className="card-actions justify-end">
                            <button className="btn bg-blue-500 hover:bg-blue-700" onClick={()=>deleteUser(agent?._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )) : (<p>agents are not available</p>)
            }
            
        </div>
    )
}