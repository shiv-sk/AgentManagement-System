"use client"
import { useAuth } from "@/context/Auth";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Header(){
    const {user , logoutUser} = useAuth();
    const [userId , setUserId] = useState(null);
    useEffect(()=>{
        if(!user){
            return;
        }
        setUserId(user?._id);
    } , [user])
    return (
        <div className="navbar bg-blue-500 shadow-sm">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-xl">Logo</Link>
            </div>
    
            {user ? (
                user.role === "Admin" ? (
                    <>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link href="/uploadfile">Upload File</Link></li>
                                <li><Link href="/allagents">All Agents</Link></li>
                                <li><Link href="/createagent">Create Agent</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button className="btn" onClick={logoutUser}>Logout</button>
                        </div>
                    </>
                ) : user.role === "Agent" ? (
                    <>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link href={`/mytasks/${userId}`}>My Tasks</Link></li>
                                <li><Link href={`/profile/${userId}`}>Profile</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button className="btn" onClick={logoutUser}>Logout</button>
                        </div>
                    </>
                ) : null
            ) : (
                <div className="navbar-end">
                    <Link href="/login" className="btn">Login</Link>
                </div>
            )}
        </div>
    );
    
}