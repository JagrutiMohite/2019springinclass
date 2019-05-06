const stripe = require("stripe")("process.env.STRIPE_PRIVATE");
const express = require('express');

const app = express.Router();

app.post("/charge", async (req, res, next)=>{
    (async () => {
        const charge = await stripe.charges.create({
          amount: 999,
          currency: 'usd',
          source: 'tok_visa',
          receipt_email: 'jenny.rosen@example.com',
        });
      })();
})
