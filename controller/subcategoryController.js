const { asyncHandler } = require("../utils/asyncHandler");
const slugify = require("slugify");
const subcategoryModel = require("../model/subcategory.model");
const { apiResponse } = require("../utils/apiResponse");
const categoryModel = require("../model/category.model");

exports.addSubCategoryController = asyncHandler(async (req, res) => {
    if (!req.file) {
        apiResponse(res, 404, "image is required");
    } else {
        const { name, isActive, category } = req.body;
        const { filename } = req.file;

        const slug = slugify(name, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: false,
            locale: 'vi',
            trim: true
        })

        const addsubcategory = await subcategoryModel.create({
            name,
            slug,
            image: `${process.env.SERVER_URL}/${filename}`,
            isActive,
            category,

        });

        let updatecategory = await categoryModel.findOneAndUpdate(
            { _id: category },
            { $push: { subcategory: addsubcategory._id } },
            { new: true },

        );
        //await updatecategory.save();
        apiResponse(res, 201, "subcategory created", addsubcategory);
    }

});

exports.deleteSubCategoryController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletesubcategory = await subcategoryModel.findOneAndDelete({_id:id});

    let updatecategory = await categoryModel.findOneAndUpdate(
        {subcategory:id},
        {$pull:{subcategory: id}},
        {new: true},
    );
    apiResponse(res, 200, "subcategory deleted",deletesubcategory);
});