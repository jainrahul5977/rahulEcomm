const express = require('express');
// const { homeController } = require('../../controllers');
const {index}  = require("../controller/userController")

const userRouter = express.Router();


// router.get('/', homeController.index);
userRouter.get('/',index
)

module.exports = userRouter;