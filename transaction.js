require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3(process.env.URL);
const express = require("express");
// const Tx = require("ethereumjs-tx").Transaction;
const Tx = require("ethereumjs-tx");
// const { Transaction } = require("@ethereumjs/tx");
// const Common = require('@ethereumjs/common')

const txnRoute = express.Router();

const fromAcct = process.env.NEW_ACCOUNT_ADDRESS;
const fromPrivateKey = process.env.NEW_ACCOUNT_PRIVATE_KEY;
const fromPrivateKeyBuffer = Buffer.from(fromPrivateKey, 'hex');

const toAcct = process.env.NEW_ACCOUNT_ADDRESS_01;
// const toPrivateKey = Buffer.from(`${process.env.NEW_ACCOUNT_PRIVATE_KEY_01}`, 'hex');
const toPrivateKey = process.env.NEW_ACCOUNT_PRIVATE_KEY_01;

const transferSum = async (req, res) => {
  try {
    const txnCount = await web3.eth.getTransactionCount(fromAcct);
    console.log(`Transaction count: ${txnCount}`);

    //build a transaction
    const txnObject = {
      nonce: web3.utils.toHex(txnCount),
      to: toAcct,
      value: web3.utils.toHex(web3.utils.toWei("0.01", "ether")),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    };

    // sign transaction
    const signedTx = await web3.eth.accounts.signTransaction(
      txnObject,
      fromPrivateKey,
      (error, signed) => {
        return signed;
      }
    );
    console.log( 'signed txn : ',signedTx);

    // broadcast transaction to the thereum blockchain
    const tx = new Tx.Transaction(txnObject, { chain: "ropsten" });
    tx.sign(fromPrivateKeyBuffer);

    const serializedTx = tx.serialize().toString('hex');
    await web3.eth
      .sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", console.log);
    console.log('tx : ', tx)
    console.log('serialized tx : ', serializedTx)


      //get transaction receipt 
      const txReceipt = await web3.eth.getTransactionReceipt('0x88ed95903865db979f2e6f079f07d4c6908409f009a137b3c0404475271436ea')
      console.log('txn receipt : ',txReceipt)
      res.status(200).json({
          status: true,
          transaction_receipt: txReceipt
      })
  } catch (error) {
    console.log(error.message);
  }
};

txnRoute.route("/maketransfer").get(transferSum);

module.exports = txnRoute;
