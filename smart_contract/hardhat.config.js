require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/XOykJ0i0nqjR3sda-US05vl0mk3TYgYb',
      accounts:['7f0c9af316d2818ad2ca557d443220deb58fa74779fe71c7f85aee7eb81b3e62']
    }
  }
};


