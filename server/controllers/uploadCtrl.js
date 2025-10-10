const { uploadBufferToCloudinary } = require("../utils/cloudinary");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ success: false, message: "No image file provided" });
    }
    const result = await uploadBufferToCloudinary(req.file.buffer);
    return res.status(200).json({ success: true, url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to upload image" });
  }
};