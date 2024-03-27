ERC721 - Minting page

## User requirement

As a user I want to be able to connect my wallet to an application and mint new nft.

On this application we will require a minting page where the user will add title, description and upload a photo. And at the end of the process to call the minting function on the provided contract.

Minting function should be disabled if the user has not connected his/hers wallet on the app.

After successful minting the user should be notified that nft has minted successfully or if some error occurred notify the user about the error in the ui.

## ERC721 Mint function parameters:

mint(to: string, uri: string);

## Acceptance criteria:

Create page for minting nft.
It should contain inputs for title, description and image.
Create function to upload image from local storage and store it to decentralised storage. (IPFS)
Use https://docs.opensea.io/docs/metadata-standards to create standardised json object and store the json object to decentralised storage.
Create service call to contracts
use wagmi integration to call minting function.
Implementation of figma design
Figma
From figma implement the following:

Minting
Confirmation
Wallet
Figma design:
https://www.figma.com/file/XB4gGDbJpYZfIQ7WKCUy8W/Untitled?node-id=0%3A1&t=Aq82EFBS6cP3Bo1Y-1

## Needed variables

Contracts are deployed on goerli network:
ERC721

env var:

NEXT_PUBLIC_CHAIN_ID=5
NEXT_PUBLIC_ALCHEMY_ENDPOINT= https://eth-goerli.g.alchemy.com/v2/JX3AuWVExGLDcewOKvGpytzrWWzghZD3
NEXT_PUBLIC_NFT_ADDRESS="0x3D216932E996c025E1d417c0396b1105a68963c6"

Needed INFO:
IPFS_NODE = 'https://ipfs.io/ipfs';

Contract: https://goerli.etherscan.io/address/0x3D216932E996c025E1d417c0396b1105a68963c6#code
ABI:
https://github.com/LinumLabs/web3-task-abi/blob/dev/Musharka721.json

Use Pinata to store the files. https://www.pinata.cloud/

Try using https://eth-goerli.g.alchemy.com/v2/JX3AuWVExGLDcewOKvGpytzrWWzghZD3.
Let's continue with this RPC, so it's not a blocker for you.

Goerli has been depricated. Try using this RPC
When review is needed add @saksijas to your repo.

## Requirements

React, Typescript, NextJS, wagmi & tailwind
