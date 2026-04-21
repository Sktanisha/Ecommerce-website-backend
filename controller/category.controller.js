const categoryModel = require("../model/category.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const slugify = require('slugify');
const fs = require("fs");
const path = require("path");

exports.addCategoryController = asyncHandler(async(req,res)=>{
    const{name} = req.body;
    const{filename}  = req.file;

const slug = slugify(name, {
  replacement: '-', 
  remove: undefined, 
  lower: true,
  strict: false,     
  locale: 'vi',      
  trim: true         
})

    const addcategory = await categoryModel.create({
        name,
        image: `${process.env.SERVER_URL}/${filename}`,
        slug,
    });
    apiResponse(res, 201, "category created", )
});

exports.deleteCategoryController = asyncHandler(async(req,res)=>{
const {slug} = req.params;
const findcategory = await categoryModel.findOneAndDelete({slug})

if (findcategory) {
        const folderpath = path.join(__dirname, "../uploads");
        let filepath = findcategory.image.split("/").pop();
        fs.unlink(`${folderpath}/${filepath}`, (err) => {
            if (err) {
                apiResponse(res, 500, err.message || "something went wrong");
            } else {

                apiResponse(res, 200, "category deleted");
            }
        });
    } else {
        apiResponse(res, 400, "category not found");
    }
});