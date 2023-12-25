const express = require("express");
const { createInfo, getAllInfo } = require("../controllers/userCtrl");

const router = express.Router();

router.post("/", createInfo);
router.get("/", getAllInfo);

module.exports = router;