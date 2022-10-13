const router = require("express").Router();

const wishRoute = require("./wishRoute");

router.use("/", wishRoute);

module.exports = router;
