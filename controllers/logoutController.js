const { LOGOUT_LINKS } = require("../constants/navigation");
const { getProcessLog } = require("../utils/logger");

module.exports.getLogoutView = (req, res) => {
  res.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
};

module.exports.killApplication = (req, res) => {
  getProcessLog(); 
  process.exit();
};
