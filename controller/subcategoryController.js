const { asyncHandler } = require("../utils/asyncHandler");
const slugify = require("slugify");
const subcategoryModel = require("../model/subcategory.model");
const { apiResponse } = require("../utils/apiResponse");

exports.addSubCategoryController = asyncHandler(async (req, res) => {
    const { name , isActive} = req.body;
        const { filename } = req.file;
    
        const slug = slugify(name, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: false,
            locale: 'vi',
            trim: true
        })

    const addsubcategory = await  subcategoryModel.create({
        name, 
        slug,
        image: `${process.env.SERVER_URL}/${filename}`,
        isActive
        
    });
    apiResponse(res, 201, "subcategory created",addsubcategory);
});