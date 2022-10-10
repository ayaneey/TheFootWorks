// import models
const Product = require("./product");
const User = require("./user");
const WishList = require("./wishlist");

User.hasMany(WishList, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

WishList.belongsTo(User, {
  foreignKey: "user_id",
});

Product.hasMany(WishList, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

WishList.belongsTo(Product, {
  foreignKey: "product_id",
});

module.exports = {
  Product,
  User,
  WishList,
};
