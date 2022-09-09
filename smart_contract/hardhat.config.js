require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VNbN7PmHKuy50xs2baErOkbpCBaYJw4u',
      accounts: ['6e05dccabb8417751cae233dfc1ba9228bd636db2a032e66af176b6230ad2ecd']
    }
  }
};
