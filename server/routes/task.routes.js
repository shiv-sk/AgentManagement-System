const express = require("express");
const Router = express.Router();
const upload = require("../middlewares/multer.middleware");
const {assignTask , tasksOfUser} = require("../controllers/task.controller");
Router.route("/file/upload").post(upload.single("file") , assignTask);
Router.route("/user-tasks/:userId").get(tasksOfUser);

module.exports = Router;