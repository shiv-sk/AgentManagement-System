const multer  = require('multer');
const path = require("path");
const allowedExtensions = [".xls" , ".ods" , ".xlsx" , ".csv"];
const allowedMimes = [
    "application/vnd.ms-excel", 
    "application/vnd.oasis.opendocument.spreadsheet", 
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv"
];
const storage = multer.diskStorage({
    destination:function(req , file , cb){
        cb(null, './temp/uploadedfiles');
    },
    filename:function(req , file , cb){
        const extension = path.extname(file.originalname);
        cb(null , file.fieldname + Date.now() + extension);
    }
})

const fileFilter = function(req , file , cb){
    const extension = allowedExtensions.includes(path.extname(file.originalname).toLocaleLowerCase());
    const mimeType = allowedMimes.includes((file.mimetype));
    if(extension && mimeType){
        return cb(null , true);
    }else{
        return cb(new Error("Only excel files (xlsx , ods , csv , xls) are allowed!"));
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter:fileFilter
})

module.exports = upload;