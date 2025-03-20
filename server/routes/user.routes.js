const express = require("express");
const Router = express.Router();
const {register , login , logOut , currentUser, getUser , getUsers , deleteUser} = require("../controllers/user.controller");
const {userRegisterSchema , userLoginSchema} = require("../validations/user.validation");
const validateInput = require("../middlewares/validation.middleware"); 
const {verifyUser , roleCheck} = require("../middlewares/auth.middleware");
Router.route("/register").post(validateInput(userRegisterSchema) , verifyUser, roleCheck("Admin") ,  register);
Router.route("/login").post(validateInput(userLoginSchema) , login);
Router.route("/logout").get(verifyUser , logOut);
Router.route("/me").get(currentUser);
Router.route("/").get(getUsers);
Router.route("/:userId").get(getUser).delete(verifyUser, roleCheck("Admin") ,deleteUser);

module.exports = Router;