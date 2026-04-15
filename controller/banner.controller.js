exports.addBannerController = (req, res) =>{
    console.log(req.body);
    console.log(req.file);
    res.send("banner created");
}