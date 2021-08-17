require("dotenv").config();
const express = require("express");
const app = express();
// const Web3 = require("web3");
// const web3 = new Web3(process.env.URL);

const createAccountRoute = require("./createAcct");
const getBalanceRoute = require("./getBalance");
const txnRoute = require('./transaction')

app.get("/", (req, res) => {
  res.status(200).send("<h3>Your smart contracts application is live</h3>");
});

app.use("/account", createAccountRoute);
app.use("/balance", getBalanceRoute);
app.use('/transaction', txnRoute)

app.listen(8000, () => {
  console.log(`Server runing on port:8000`);
});
