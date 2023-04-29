const express = require('express');
// const { homeController } = require('../../controllers');
const {userController} =require("./controller/userController")

const router = express.Router();


// router.get('/', homeController.index);
router.get('/',userController.index
)

module.exports = router;