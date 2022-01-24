
module.exports.getHomePage = (req, res, next) => {
    res.render("homePage.ejs", {title:"Home"});
}

module.exports.getAboutPage = (req, res, next) => {
    res.render("aboutPage.ejs", {title:"About"});
}

module.exports.getTherapyPage = (req, res, next) => {
    res.render("therapyPage.ejs", {title:"Therapy"});
}

module.exports.getPhotoPage = (req, res, next) => {
    res.render("photoPage.ejs", {title:"Photo"});
}

module.exports.getVideoPage = (req, res, next) => {
    res.render("videoPage.ejs", {title:"Video"});
}

module.exports.getContactPage = (req, res, next) => {
    res.render("contactPage.ejs", {title:"Contact"});
}