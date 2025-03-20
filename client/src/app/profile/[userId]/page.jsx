"use client"
import { useAuth } from "@/context/Auth";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function createAgent(){
    const {user , isLoading} = useAuth();
    const [showPassword , setShowPassword] = useState(false);
    const handleShowPassword = (e)=>{
        e.preventDefault();
        setShowPassword((prev)=>!prev);
    }
    if(!user){
        redirect("/login");
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-900">{
            isLoading ? "Loading......" : user ? (
                <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md w-96">
                    <h1 className="text-center font-semibold text-2xl">Profile</h1>
                    <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-300 font-semibold">Name</label>
                    <input
                    name="name" 
                    type="text"
                    value={user.name} 
                    id="name" 
                    placeholder="John Doe"
                    readOnly
                    className="input p-2 w-full bg-gray-700 text-white" /> 
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-300 font-semibold">Email</label>
                    <input
                    name="email" 
                    type="email" 
                    id="email"
                    value={user.email} 
                    placeholder="JohnDoe@email.com"
                    readOnly
                    className="input p-2 w-full bg-gray-700 text-white" /> 
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-300 font-semibold">Phone</label>
                    <input
                    name="phoneNumber" 
                    type="text" 
                    id="phone"
                    value={user.phoneNumber} 
                    placeholder="+91123456789"
                    readOnly 
                    className="input p-2 w-full bg-gray-700 text-white" /> 
                    </div>
                    
                </form>
            ): (<p>user not Found!</p>)
        }
            
        </div>
    )
}