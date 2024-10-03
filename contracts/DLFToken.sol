// SPDX-License-Identifier: MIT

//** Playbux Token */
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @title DexLedgerFlow Token
/// @author dlf.bemind.tech
/// @dev A token based on OpenZeppelin's principles

contract DexLedgerFlowToken is ERC20Burnable {
    /// @notice A constructor that mint the tokens
    constructor() ERC20("DexLedgerFlow", "DLF") {
        // Mint 1 Billion tokens
        _mint(msg.sender, 1000_000_000 ether);
    }
}
