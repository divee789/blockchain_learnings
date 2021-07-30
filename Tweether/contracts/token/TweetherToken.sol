// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "../helpers/Owned.sol";

interface ERC20Interface {
    function totalSupply() external view returns (uint256);

    function balanceOf(address tokenOwner)
        external
        view
        returns (uint256 balance);

    function allowance(address tokenOwner, address spender)
        external
        view
        returns (uint256 remaining);

    function transfer(address to, uint256 tokens)
        external
        returns (bool success);

    function approve(address spender, uint256 tokens)
        external
        returns (bool success);

    function transferFrom(
        address from,
        address to,
        uint256 tokens
    ) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint256 tokens);
    event Approval(
        address indexed tokenOwner,
        address indexed spender,
        uint256 tokens
    );
}

// ----------------------------------------------------------------------------
// Contract function to receive approval and execute function in one call
// ----------------------------------------------------------------------------
interface ApproveAndCallFallBack {
    function receiveApproval(
        address from,
        uint256 tokens,
        address token,
        bytes memory data
    ) external;
}

// ----------------------------------------------------------------------------
// ERC20 Token, with the addition of symbol, name and decimals and a
// fixed supply
// ----------------------------------------------------------------------------
contract TweetherToken is ERC20Interface, Owned {
    string public symbol;
    string public name;
    uint8 public decimals;
    uint256 _totalSupply;

    uint256 public FOR_ICO = 750000;
    uint256 public FOR_FOUNDER = 250000;

    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    constructor() {
        symbol = "TWE";
        name = "TweetherToken";
        decimals = 0;
        _totalSupply = FOR_FOUNDER + FOR_ICO;
        balances[ownerAddr] = _totalSupply;
        emit Transfer(address(0), ownerAddr, _totalSupply);
    }

    function totalSupply() external view virtual override returns (uint256) {
        return _totalSupply;
    }

    // ------------------------------------------------------------------------
    // Get the token balance for account `tokenOwner`
    // ------------------------------------------------------------------------
    function balanceOf(address tokenOwner)
        public
        view
        virtual
        override
        returns (uint256 balance)
    {
        return balances[tokenOwner];
    }

    // ------------------------------------------------------------------------
    // Transfer the balance from token owner's account to `to` account
    // - Owner's account must have sufficient balance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transfer(address to, uint256 tokens)
        public
        virtual
        override
        returns (bool success)
    {
        require(tokens > 0, "You need to send some ether");
        require(
            balances[msg.sender] > tokens,
            "Not enough tokens in the reserve"
        );
        balances[msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account
    //
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
    // recommends that there are no checks for the approval double-spend attack
    // as this should be implemented in user interfaces
    // ------------------------------------------------------------------------
    function approve(address spender, uint256 tokens)
        public
        virtual
        override
        returns (bool success)
    {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Transfer `tokens` from the `from` account to the `to` account
    //
    // The calling account must already have sufficient tokens approve(...)-d
    // for spending from the `from` account and
    // - From account must have sufficient balance to transfer
    // - Spender must have sufficient allowance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transferFrom(
        address from,
        address to,
        uint256 tokens
    ) public virtual override returns (bool success) {
        require(tokens > 0, "You need to send some ether");
        require(balances[from] >= tokens, "Not enough tokens"); // the owner's balance can take this
        require(allowed[from][msg.sender] >= tokens, "Not enough allowance"); // the allowed delegated transfer isnt crossed
        balances[msg.sender] -= tokens;
        allowed[from][msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(from, to, tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Returns the amount of tokens approved by the owner that can be
    // transferred to the spender's account
    // ------------------------------------------------------------------------
    function allowance(address tokenOwner, address spender)
        public
        view
        virtual
        override
        returns (uint256 remaining)
    {
        return allowed[tokenOwner][spender];
    }

    // ------------------------------------------------------------------------
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account. The `spender` contract function
    // `receiveApproval(...)` is then executed
    // ------------------------------------------------------------------------
    function approveAndCall(
        address spender,
        uint256 tokens,
        bytes memory data
    ) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        ApproveAndCallFallBack(spender).receiveApproval(
            msg.sender,
            tokens,
            address(this),
            data
        );
        return true;
    }

    // ------------------------------------------------------------------------
    // Don't accept ETH
    // ------------------------------------------------------------------------
    fallback() external {
        revert("Not Accepting Ether");
    }

    // ------------------------------------------------------------------------
    // Owner can transfer out any accidentally sent ERC20 tokens
    // ------------------------------------------------------------------------
    function transferAnyERC20Token(address tokenAddress, uint256 tokens)
        public
        onlyOwner
        returns (bool success)
    {
        return ERC20Interface(tokenAddress).transfer(ownerAddr, tokens);
    }

    function fundICO(address icoAddr) public onlyOwner {
        transfer(icoAddr, FOR_ICO);
    }
}
