const router = require("express").Router();
const path = require("path");
const { User, Product } = require("../models");
const withAuth = require("../utils/auth");

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

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
