"use client"

import { useAuth } from "@/context/Auth";
import { redirect } from "next/navigation";
import { useState } from "react"

export default function Login(){
    const {loginUser , isLoading} = useAuth();
    const [showPassword , setShowPassword] = useState(false);
    const [loginData , setLoginData] = useState({
        email:"",
        password:""
    })
    const onChange = (e)=>{
        setLoginData({...loginData , [e.target.name]:e.target.value})
    }
    const handleShowPassword = (e)=>{
        e.preventDefault();
        setShowPassword((prev)=>!prev);
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!loginData){
            return;
        }
        const response = await loginUser(loginData);
        if(response.success){
            redirect("/");
        }
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            {
                isLoading ? "Loading....." : (
                    <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
                        <h1 className="text-center font-semibold text-2xl">Login</h1>
                        <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-300 font-semibold">Email</label>
                        <input
                        name="email" 
                        type="email" 
                        id="email" 
                        placeholder="JohnDoe@email.com"
                        value={loginData.email}
                        onChange={onChange} 
                        className="input p-2 w-full bg-gray-700 text-white" /> 
                        </div>
                        <div className="flex flex-col relative">
                        <label htmlFor="password" className="text-gray-300 font-semibold">Password</label>
                        <input
                        name="password" 
                        type={showPassword ? "text" : "password"}
                        id="password" 
                        placeholder="JohnDoe@123"
                        value={loginData.password}
                        onChange={onChange} 
                        className="input p-2 bg-gray-700 text-white w-full" /> 
                        <button
                        type="button"
                        className="absolute right-3 top-8 text-gray-400 hover:text-white"
                        onClick={handleShowPassword}
                        >{showPassword ? "Hide" : "Show"}</button>
                        </div>
                        <button 
                        className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
                        disabled={isLoading}>Login</button>
                    </form>
                )
            }
            
        </div>
    )
}