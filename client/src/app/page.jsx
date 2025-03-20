"use client"
import { useAuth } from "@/context/Auth"
import { redirect } from "next/navigation";

export default function App(){
  const {user} = useAuth();
  if(!user){
    redirect("/login");
  }
  return(
    <>
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center font-semibold text-lg">WelCome To ManagementSystem</h1>
      <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente neque, maiores quisquam dolor minus ut rem tempora corporis pariatur voluptatem.</p>
    </div>
    </>
  )
}