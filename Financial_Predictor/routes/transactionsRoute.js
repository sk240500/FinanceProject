const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.post("/add-transaction", async function (req, res) {
  try {
    const newtransaction = new Transaction(req.body);
    await newtransaction.save();
    res.send("Transaction Added Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/get-all-transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find({
      date: {
        $gt: moment("2022-07-01").toDate(),
      },
      userid: req.body.userid,
    });
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
