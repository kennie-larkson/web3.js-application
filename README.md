# web3.js-application

### This is a simple ethereum blockchain application 
### The Ethereum blockchain was accessed using the Ropsten Testnet and every transaction can be verifeid on any Ethereum explorer e.g etherscan.io

### web3.js a JavaScript library for developing applications that run on the EVM was used

#### This application contains routes to create an account on the ethereum blockchain, check account balanace and make a transaction (transfer eth)

### How to run

#### 1. Clone the project in any favorable directory on your local machine using the command : git clone 
#### 2. Run the cd command into the cloned directory and run "npm install" to install dependencies
#### 3. First operation is to create an account. In order to get the url to connect to the Ethereum network go to infuria.io follow the instructions to create an account and get the url. Select Ropsten in the ENDPOINT drop down (that is what I used but any other ENDPOINT will work). Copy the instantly generated url and fix it accordingly in the code.
#### 4. use "npm run start" to start the application, it should start on port 8000. You can change it in app.js if that port is busy on your local machine
#### 5. visit localhost:8000/account/createaccount on your browser and you should receive the reponse with you new account details (address and privateKey). Although this is a test network but your privateKey should be kept safe


