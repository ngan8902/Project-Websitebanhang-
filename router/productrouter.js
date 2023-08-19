const express = require("express")
const router = express.Router()
const ProductController = require("../controller/productcontroller")


router.get("/", ProductController.getProducts)

router.post("/", ProductController.createProduct)

router.put("/", (req, res) => {
    res.end('Home');
})

router.delete("/", (req, res) => {
    res.end('Home');
})

module.exports = router;