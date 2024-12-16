const router = require("express").Router();
const adminController = require("../Controller/adminController");
router.post("/usercheck", adminController.adminDataCheck);
module.exports = router;