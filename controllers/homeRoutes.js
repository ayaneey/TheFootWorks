const router = require("express").Router();
const path = require("path");
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ["password"] },
    //   order: [["name", "ASC"]],
    // });

    // const users = userData.map((project) => project.get({ plain: true }));

    res.render("hompage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const shoesData = await Product.findAll({
      where: {
        name: {
          [Op.like]: "%Nike",
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
