import hre, { ethers } from 'hardhat';
import { DeploymentsExtension } from 'hardhat-deploy/types';

module.exports = async ({ deployments }: { deployments: DeploymentsExtension }) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();

  await deploy('DexLedgerFlowToken', {
    contract: 'DexLedgerFlowToken',
    from: deployer.address,
    args: [],
    log: true,
  });

  console.log('DexLedgerFlow Token deployed');
};

module.exports.tags = ['DexLedgerFlowToken'];