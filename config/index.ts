export const APP_NAME = "NFT MINTER"
export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID || "11155111"
export const ALCHEMY_ENDPOINT = process.env.NEXT_PUBLIC_ALCHEMY_ENDPOINT
export const NFT_ADDRESS = (process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x${string}`) || "0xc507d4FbD9b5Bd102668c00a3eF7ec68bF95C6A1"
export const IPFS_NODE = process.env.NEXT_PUBLIC_IPFS_NODE || "https://ipfs.io/ipfs"