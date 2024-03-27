# NFT Minter

This is a basic NFT minting application. Users can mint NFT on the sepolia network

Ideally, to display user NFTs, we would use a service like Alchemy or Morallis or SimpleHash api to fetch NFT's for a particular wallet and collection since it's cheaper than re-indexing the blockchain. However, for the purpose of simplicity, I have used wagmi to listen to the contracts events and store formatted NFT data for a particular user to their localstorage. 

Also, a more robust approach could be to index and store the minted NFTS by the tokenId, tokenURI, metadata and owner using a long-term storage like databases. Again, I have simplified this by storing NFTS in a redux store which is then persisted to the browser's localstorage.

## A
The following was achieved in this task;

- Implemented figma detail to detail
- Added responsiveness to design implementation
- Added NFT attributes feature
- Upload NFT image and standardized JSON metadata to IPFS using pinata
- Listen to contract event and parse NFT minted data to display user owned NFTS
- Implemented wallet connect feature


### How to run:

```bash
 git clone https://github.com/nano235/nft-minter.git
 cd nft-minter
 yarn #or npm install

 yarn dev #or npm run dev
```