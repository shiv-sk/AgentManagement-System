"use client"
import { useAuth } from "@/context/Auth";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function createAgent(){
    const {registerUser , isLoading , user} = useAuth();
    const [showPassword , setShowPassword] = useState(false);
    const handleShowPassword = (e)=>{
        e.preventDefault();
        setShowPassword((prev)=>!prev);
    }
    const [registerData , setRegisterData] = useState({
        name:"",
        email:"",
        password:"",
        phoneNumber:""
    })
    const onChange = (e)=>{
        setRegisterData({...registerData , [e.target.name]:e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!registerData){
            return;
        }
        const response = await registerUser(registerData);
        console.log(response);
        if(response.success){
            redirect("/");
        }
    }
    if(!user){
        redirect("/login");
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-900">{
            isLoading ? "Loading......" : (
                <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
                    <h1 className="text-center font-semibold text-2xl">NewAgent</h1>
                    <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-300 font-semibold">Name</label>
                    <input
                    name="name" 
                    type="text"
                    value={registerData.name} 
                    id="name" 
                    placeholder="John Doe"
                    onChange={onChange} 
                    className="input p-2 w-full bg-gray-700 text-white" /> 
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-300 font-semibold">Email</label>
                    <input
                    name="email" 
                    type="email" 
                    id="email"
                    value={registerData.email} 
                    placeholder="JohnDoe@email.com"
                    onChange={onChange} 
                    className="input p-2 w-full bg-gray-700 text-white" /> 
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-300 font-semibold">Phone</label>
                    <input
                    name="phoneNumber" 
                    type="text" 
                    id="phone"
                    value={registerData.phoneNumber} 
                    placeholder="+91123456789"
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
                    value={registerData.password}
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
                    disabled={isLoading}>Create</button>
                </form>
            )
        }
            
        </div>
    )
}