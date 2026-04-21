const categoryModel = require("../model/category.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addCategoryController = asyncHandler(async(req,res)=>{
    const{name} = req.body;
    const{filename}  = req.file;

    const addcategory = await categoryModel.create({
        name,
        image: `${process.env.SERVER_URL}/${filename}`,
    });
    apiResponse(res, 201, "category created", )
});