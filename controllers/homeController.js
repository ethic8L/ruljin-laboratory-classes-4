const { MENU_LINKS } = require("../constants/navigation");

module.exports.getHomeView = (req, res) => {
  res.render("home.ejs", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
};
