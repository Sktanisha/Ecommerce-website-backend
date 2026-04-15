const bannerModel = require("../model/banner.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");


exports.addBannerController = asyncHandler(async(req, res) =>{
    res.send("working");
    return 
    const { filename } = req.file;
    const { isActive } = req.body;
    //res.send("banner created");
    const banner = new bannerModel({
        image : `${process.env.SERVER_URL}/${filename}`,
        isActive,
    });
    await banner.save();
    apiResponse(res, 201, "banner created successfully", banner);
});