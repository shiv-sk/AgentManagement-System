"use client"
import { useAuth } from "@/context/Auth";
import { useTask } from "@/context/Task";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
export default function UploadFile(){
    const {newTask , isLoading , error} = useTask();
    const {user} = useAuth();
    const [file, setFile] = useState(null);
    const onDrop = useCallback((acceptedFiles)=>{
        if(acceptedFiles.length > 0){
            setFile(acceptedFiles[0]);
        }
    } , [])
    if(!user){
        redirect("/login");
    }
    const handleNewTask = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file" , file);
        if(!file){
            alert("please select a file");
        }
        const response = await newTask(formData);
        if(!response.success){
            alert(error);
        }
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop , multiple: false, });
    return(
        <div className="flex justify-center items-center mx-auto min-h-screen w-96 h-12 flex-col gap-4">
            {
                isLoading ? "Loading.......": (
                    <>
                        <h4 className="text-center text-lg">Drag & Drop a file or click to select</h4>    
                        <div {...getRootProps()} className="border-2 border-dashed cursor-pointer p-4 w-full">
                            <input {...getInputProps()} />
                            {isDragActive ? <p>Drop the file here...</p> : <p className="text-center font-bold text-lg">Drag & Drop a file</p>}
                        </div>
                        <button className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md w-full" 
                        onClick={handleNewTask}>Submit</button>
                    </>
                )
            }
        
        </div>
    )
}