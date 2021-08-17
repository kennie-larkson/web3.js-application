require('dotenv').config()
const express = require("express");
const Web3 = require("web3");
const web3 = new Web3(process.env.URL);
const getBalanceRoute = express.Router();

const getAccountBalance = async (req, res) => {
  try {
    const balanceInWei = await web3.eth.getBalance(process.env.NEW_ACCOUNT_ADDRESS);
    console.log(`Balance: ${balanceInWei} in wei`);
    //convert balance from wei to ether
    const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether')
    console.log(`Balance: ${balanceInEther} ETH`);
    res.status(200).json({'status': true, 'Balance': `${balanceInEther} ETH`})
  } catch (error) {
      console.log(error.message);
  }
};

getBalanceRoute.route("/getbalance").get(getAccountBalance);

module.exports = getBalanceRoute;
