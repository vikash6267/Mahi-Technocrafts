const userModel = require("../model/user");

const createInfo = async (req, res) => {
   const{email,firstname,message} = req.body;
    try {
        const infoSave = await userModel.create({
            email,
            firstname,
            message
        });
        res.status(200).json({
            success: true,
            data: infoSave,
          })
    } catch (error) {
        res.status(500).send({ message: "Somethig went wrong", success: false });
        console.log(error)
    }
}

const getAllInfo = async (req, res) => {
    try {
        const allInfo = await userModel.find();
        res.status(200).json({
            success: true,
            data: allInfo,
          })
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" })
    }
}
module.exports = { createInfo, getAllInfo };