const express = require('express')
const Web3 = require("web3");
const web3 = new Web3(process.env.URL);
const createAcctRoute = express.Router()

// create an ethereum account the account will be created on the Ropsten network from the infura url
const createAccount = async (req, res) => {
    try {
        //this returns an object detailing the newly created account {address, privateKey, ...}
        const newAccount = await web3.eth.accounts.create();
        res.status(201).json({ 'status': true, 'address': `${newAccount.address}`, 'privateKey': `${newAccount.privateKey}` })
        console.log(newAccount);
    } catch (error) {
        console.log(error);
    }
};

createAcctRoute.route('/createaccount').get(createAccount)



module.exports = createAcctRoute