const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const User = require("../modles/user.model");
const Task = require("../modles/task.model");
const XLSX = require("xlsx");
const path = require("path");

exports.assignTask = asyncHandler(async(req , res)=>{
    const filePath = req.file?.path;
    if(!filePath){
        throw new apiError(500 , "file is not uploaded! ");
    }
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    const agents = await User.find({role:"Agent"});
    if(agents.length === 0){
        throw new apiError(404 , "there are no agents to assign task! ");
    }
    const tasksPerAgent = Math.ceil(data.length / agents.length);
    const tasks = [];

    for(let i = 0; i < agents.length; i++){
        const agentTasks = data.slice(i * tasksPerAgent, (i + 1) * tasksPerAgent);
        for(const taskData of agentTasks){
            const task = new Task({
                firstName:taskData.FirstName,
                phoneNumber: taskData.Phone,
                notes: taskData.Notes,
                assignedTo: agents[i]._id,
            })
            tasks.push(task);
        }
    }
    await Task.insertMany(tasks);
    return res.status(201).json(
        new apiResponse(201 , "File uploaded, tasks assigned, and saved to the database ! " , tasks)
    )
})

exports.tasksOfUser = asyncHandler(async(req , res)=>{
    const {userId} = req.params;
    if(!userId){
        throw new apiError(400 , "userId is required! ");
    }
    const tasks = await Task.find({assignedTo:userId});
    if(tasks.length === 0){
        return res.status(404).json(
            new apiResponse(404 , "tasks are not found! " , {})
        )
    }
    return res.status(200).json(
        new apiResponse(200 , "tasks for you! " , tasks)
    )
})

exports.getTask = asyncHandler(async(req , res)=>{
    const {taskId} = req.params;
    if(!taskId){
        throw new apiError(400 , "userId is required! ");
    }
    const task = await Task.findById(taskId);
    if(!task){
        return res.status(404).json(
            new apiResponse(404 , "task not found! " , {})
        )
    }
    return res.status(200).json(
        new apiResponse(200 , "task is! " , task)
    )
})