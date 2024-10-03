// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title DexLedgerFlow Token
/// @author dlf.bemind.tech
/// @dev A token based on OpenZeppelin's principles

contract DexLedgerFlowTokenMock is ERC20 {
    constructor() ERC20("DexLedgerFlow Token", "DLFTokenMock") {
        _mint(msg.sender, 1000_000_000 ether);
    }

    function faucet() public {
        _mint(msg.sender, 100_000 ether);
    }
}
