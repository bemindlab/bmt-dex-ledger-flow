import hre from 'hardhat';
import { ethers } from 'hardhat';
import { DeploymentsExtension } from 'hardhat-deploy/types';

module.exports = async ({ deployments }: { deployments: DeploymentsExtension }) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();

 await deploy('DexLedgerFlowTokenMock', {
    contract: 'DexLedgerFlowTokenMock',
    from: deployer.address,
    args: [],
    log: true,
  });
  
  console.log('DLFTokenMock deployed');
};

module.exports.tags = ['DLFTokenMock'];
