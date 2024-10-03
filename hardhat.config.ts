import '@nomicfoundation/hardhat-verify';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-solhint';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'dotenv/config';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import { removeConsoleLog } from 'hardhat-preprocessor';
import 'hardhat-spdx-license-identifier';
import 'solidity-coverage';

// const mnemonicTest = 'guilt nation burst armed glad race cloth glue lumber kitchen echo electric captain arctic puppy';

const accounts = process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : [];

module.exports = {
  networks: {
    bscTest: {
      url: 'https://bsc-testnet.publicnode.com',
      saveDeployments: true,
      tags: ['bscTest'],
      accounts,
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      saveDeployments: true,
      tags: ['bsc'],
      accounts,
    },
    hardhat: {
      blockNumber: '0',
      accounts: {
        mnemonic: process.env.SEED_PHRASE,
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 180e3,
  },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  preprocess: {
    eachLine: removeConsoleLog((hre) => hre.network.name !== 'hardhat' && hre.network.name !== 'localhost'),
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};
