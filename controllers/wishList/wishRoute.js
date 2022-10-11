const router = require("express").Router();
const { User, WishList, Product } = require("../../models");

// if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
// })};

const path = require("path");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./file.JSON"));
});

router.post('/', async (req, res)=> {
    try {
      console.log(req.body);
    const dbWishList = await WishList.create({
      user_id: req.body.username,
      product_id: req.body.product
    });

    // req.session.save(() => {
    //   req.session.loggedIn = true;

    //   res.status(200).json(dbWishList);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
}})

// router.get('/', async (req, res) => {
// try {
//     // get the user id from query params/req params
 
//     //[array of product ids] = // get from WishList table where user_id = 


// } catch (error) {
//       console.log(err);
//     res.status(500).json(err); 
// }
// })
// router.delete('/', async (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// })
module.exports = router;