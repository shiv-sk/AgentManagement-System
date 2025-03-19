const Joi = require("joi");
exports.userRegisterSchema = Joi.object({
    name:Joi.string().trim().required(),
    email:Joi.string().email().trim().required(),
    password:Joi.string().trim().required(),
    role:Joi.string().valid("Agent" , "Admin").default("Agent").trim(),
    phoneNumber:Joi.string().required().max(20).trim(),
})

exports.userLoginSchema = Joi.object({
    email:Joi.string().email().trim().required(),
    password:Joi.string().trim().required(),
});
