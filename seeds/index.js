const sequelize = require("../config/connection");
const Product = require("../models/Product");
const WishList = require("../models/wishlist");
const shoeData = require("./shoe-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(shoeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
