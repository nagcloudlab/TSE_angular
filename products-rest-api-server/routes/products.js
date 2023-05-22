var express = require("express");
var router = express.Router();

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 2000,
    currencyCode: "INR",
    isAvailable: true,
    image: "assets/img/Laptop.png",
    description: "Laptop 1 description",
  },
  {
    id: 2,
    name: "Mobile",
    price: 2000,
    currencyCode: "INR",
    isAvailable: true,
    image: "assets/img/Mobile.png",
    description: "Laptop 1 description",
  },
];

router.get("/", function (req, res, next) {
  setTimeout(() => {
    res.json(products);
  }, 0);
});

router.get("/:id", function (req, res, next) {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.json(product);
});
router.post("/", function (req, res, next) {
  let product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.json(req.body);
});
router.put("/:id", function (req, res, next) {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  product.name = req.body.name;
  product.price = req.body.price;
  product.currencyCode = req.body.currencyCode;
  product.isAvailable = req.body.isAvailable;
  product.image = req.body.image;
  product.description = req.body.description;
  res.json(product);
});
router.delete("/:id", function (req, res, next) {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  products.splice(products.indexOf(product), 1);
  res.json(product);
});

const reviews = {
  1: [
    {
      ratings: 5,
      text: "This is a very good review",
      name: "John Doe",
    },
    {
      ratings: 1,
      text: "This is a very bad review",
      name: "Nag",
    },
  ],
  2: [
    {
      ratings: 5,
      text: "This is a very good review",
      name: "John Doe",
    },
  ],
};

router.get("/:id/reviews", function (req, res, next) {
  let productId = req.params.id;
  res.json(reviews[productId]);
});
router.post("/:id/reviews", function (req, res, next) {
  let productId = req.params.id;
  let review = req.body;
  reviews[productId].push(review);
  res.json(review);
});

module.exports = router;
