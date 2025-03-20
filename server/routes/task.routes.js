const express = require("express");
const Router = express.Router();
const upload = require("../middlewares/multer.middleware");
const {assignTask , tasksOfUser , getTask} = require("../controllers/task.controller");
const {verifyUser , roleCheck} = require("../middlewares/auth.middleware");
Router.route("/file/upload").post(upload.single("file") , verifyUser , roleCheck("Admin") , assignTask);
Router.route("/user-tasks/:userId").get(verifyUser , tasksOfUser);
Router.route("/:taskId").get(verifyUser, getTask);

module.exports = Router;