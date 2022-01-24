const express = require('express');
const { getHomePage, getAboutPage, getPhotoPage, getVideoPage, getContactPage, getTherapyPage } = require('../controller/viewController/viewController');
const viewRouter = express.Router();


viewRouter.route("/").get(getHomePage);
viewRouter.route("/about").get(getAboutPage);
viewRouter.route("/therapy").get(getTherapyPage);
viewRouter.route("/photo").get(getPhotoPage);
viewRouter.route("/video").get(getVideoPage);
viewRouter.route("/contact").get(getContactPage);



module.exports = viewRouter;
