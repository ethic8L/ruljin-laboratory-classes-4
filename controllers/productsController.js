const Product = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

exports.getProductsView = (req, res) => {
  res.render("products.ejs", {
    headTitle: "Shop - Products",
    path: "/products",
    activeLinkPath: "/products",
    menuLinks: MENU_LINKS,
    products: Product.getAll(),
  });
};

exports.getAddProductView = (req, res) => {
  res.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    path: "/products/add",
    activeLinkPath: "/products/add",
    menuLinks: MENU_LINKS,
  });
};

exports.addNewProduct = (req, res) => {
  const { name, description } = req.body;
  const newProduct = new Product(name, description);
  Product.add(newProduct);
  res.status(STATUS_CODE.FOUND).redirect("/products/new");
};

exports.getNewProductView = (req, res) => {
  const newestProduct = Product.getLast();
  res.render("new-product.ejs", {
    headTitle: "Shop - New product",
    path: "/products/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct,
  });
};

exports.getProductView = (req, res) => {
  const { name } = req.params;
  const product = Product.findByName(name);
  res.render("product.ejs", {
    headTitle: "Shop - Product",
    path: "/products",
    activeLinkPath: "/products",
    menuLinks: MENU_LINKS,
    product,
  });
};

exports.deleteProduct = (req, res) => {
  const { name } = req.params;
  Product.deleteByName(name);
  res.status(STATUS_CODE.OK).json({ success: true });
};
