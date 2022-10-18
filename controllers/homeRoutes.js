const router = require("express").Router();
const path = require("path");
const { User, Product } = require("../models");
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll();

    //const users = userData.map((project) => project.get({ plain: true }));

    // Serialize data so the template can read it
    const shoes = productData.map((shoes) => shoes.get({ plain: true }));

    console.log(productData);
    res.render("homepage", {
      shoes,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:name", async (req, res) => {
  try {
    console.log(req.params.name);
    const shoesData = await Product.findAll({
      where: {
        name: {
          [Op.substring]: req.params.name,
        },
      },
    });
    if (!shoesData) {
      res.status(404).json({ message: "No shoes with this id!" });
      return;
    }
    //console.log(shoesData);
    const shoes = shoesData.map((shoes) => shoes.get({ plain: true }));
    console.log(shoes);
    res.render("homepage", {
      shoes,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
