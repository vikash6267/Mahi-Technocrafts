const express = require("express");
const multer = require("multer");
const router = express.Router();

const { uploadImage } = require("../controllers/uploadCtrl");

const upload = multer({ storage: multer.memoryStorage() });

// POST /api/v1/uploads/image
router.post("/image", upload.single("image"), uploadImage);

module.exports = router;