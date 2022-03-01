const NFTs = artifacts.require("../contracts/FractionalNFT");
const Tokens = artifacts.require("../contracts/FractionalNFTToken");

module.exports = async function (deployer) {
    const IPFS_IMAGE_METADATA_URI = `ipfs://QmQdPYTY8yArgVmMJK319e75rsi91bwtUF5JsSF9CLnEYe/`

    // Deploy NFT collection first...

    await deployer.deploy(
        NFTs,
        "A Famous Painting",
        "FP",
        IPFS_IMAGE_METADATA_URI,
    )

    // Once deployed, we grab the address, and deploy the ERC20 vault...

    const nft = await NFTs.deployed()

    await deployer.deploy(
        Tokens,
        "Famous Paintings Token",
        "FPT",
        nft.address,
        1000
    )
};