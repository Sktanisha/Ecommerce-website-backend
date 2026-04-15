const bannerModel = require("../model/banner.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const fs = require("fs");
const path = require("path");

exports.addBannerController = asyncHandler(async (req, res) => {
    const { filename } = req.file;
    const { isActive } = req.body;
    //res.send("banner created");
    const banner = new bannerModel({
        image: `${process.env.SERVER_URL}/${filename}`,
        isActive,
    });
    await banner.save();
    apiResponse(res, 201, "banner created successfully", banner);
});

exports.deleteBannerController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const findbanner = await bannerModel.findOneAndDelete({ _id: id });

    if (findbanner) {
        const folderpath = path.join(__dirname, "../uploads");
        let filepath = findbanner.image.split("/").pop();
        fs.unlink(`${folderpath}/${filepath}`, (err) => {
            if (err) {
                apiResponse(res, 500, err.message || "something went wrong");
            } else {

                apiResponse(res, 400, "banner deleted");
            }
        });
    } else {
        apiResponse(res, 400, "banner not found");
    }

});

exports.getAllBannersController = asyncHandler(async (req, res) => {
    const banners = await bannerModel.find({}).select("image isActive");

    apiResponse(res, 200, "banner added successfully");
});

exports.updateBannersController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { isActive } = req.body;
    const findbanner = await bannerModel.findOne({ _id: id });
    if (findbanner) {
        const folderpath = path.join(__dirname, "../uploads");
        let filepath = findbanner.image.split("/").pop();
        fs.unlink(`${folderpath}/${filepath}`, async (err) => {
            if (err) {
                apiResponse(res, 500, err.message || "something went wrong");
            } else {
                findbanner.image = `${process.env.SERVER_URL}/${req.file.filename}`;
                if (isActive) {
                    findbanner.isActive = isActive;
                }
                await findbanner.save();
                apiResponse(res, 200, "banner updated successfully", findbanner);
            }
        });
    } else {
        apiResponse(res, 400, "banner not found");
    }
});

exports.singleBannerController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const banner = await bannerModel.findOne({ _id: id });
    apiResponse(res, 200, "single banner fetch successfully", banner);
});