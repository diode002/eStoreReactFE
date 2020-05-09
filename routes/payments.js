var express = require("express");
var router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_K);

/* GET users listing. */
router.post("/", function (req, res, next) {
  console.log(process.env.STRIPE_K);

  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeSucess) => {
    if (stripeErr) {
      console.log("sending" + stripeErr);

      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ sucess: stripeSucess });
    }
  });
});

module.exports = router;
