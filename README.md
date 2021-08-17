# web3.js-application

### This is a simple ethereum blockchain application 
### The Ethereum blockchain was accessed using the Ropsten Testnet and every transaction can be verifeid on any Ethereum explorer e.g https://etherscan.io

### web3.js a JavaScript library for developing applications that run on the EVM was used

#### This application contains routes to create an account on the ethereum blockchain, check account balanace and make a transaction (transfer eth)

### How to run

#### 1. Clone the project in any favorable directory on your local machine using the command : git clone 
#### 2. Run the cd command into the cloned directory and run "npm install" to install dependencies
#### 3. First operation is to create an account. In order to get the url to connect to the Ethereum network go to infuria.io follow the instructions to create an account and get the url. Select Ropsten in the ENDPOINT drop down (that is what I used but any other ENDPOINT will work). Copy the instantly generated url and fix it accordingly in the code.
#### 4. use "npm run start" to start the application, it should start on port 8000. You can change it in app.js if that port is busy on your local machine
#### 5. visit localhost:8000/account/createaccount on your browser and you should receive the reponse with you new account details (address and privateKey). Although this is a test network but your privateKey should be kept safe
#### 6. To check your account balance (obviously 0 Eth) open the getBalance.js file and insert the account details as required the open your browser and visit localhost:8000/balance/getbalance and you should receive your balance
#### 7. The next thing is to make a transaction but you need to have some funds in there to make one because there's a charge called Gas that you need to pay in order to run a "write" transaction on the Ethereum blockchain. In order to have a test fund you can use go to https://faucet.ropsten.be/ simply enter your account address in the form field and click the "send me test Ether" button below. You might have to wait for some period before you get it because you'll be on a queue (I waited an hour :) ). You can repeat the getbalance operation to check if you have been credited 


