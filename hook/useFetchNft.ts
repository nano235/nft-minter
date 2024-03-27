"use client";

import { IPFS_NODE, NFT_ADDRESS } from "@/config";
import Musharka721Abi from "@/config/abis/musharka721.json";
import { useAppDispatch, useAppSelector } from "@/store";
import { NFT, setNFTs } from "@/store/nftSlice";
import { useState } from "react";
import { useAccount, useWatchContractEvent } from "wagmi";

export default function useFetchNft() {
	const { address } = useAccount();
	const nftState = useAppSelector(state => state.nft);
	const dispatch = useAppDispatch();
	const [nftData, setNftData] = useState<NFT[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const addNftToStore = (nft: NFT) => {
		const newData = [nft, ...nftState.nfts];
		setNftData(newData);
		dispatch(setNFTs(newData));
	};

	const onLogs = async ([log]: any[]) => {
		try {
			const { to, tokenURI, tokenId } = log.args;
			if (to === address) {
				const _tokenId = BigInt(tokenId).toString();
				const _tokenURI = `${IPFS_NODE}/${getIpfsHash(tokenURI)}`;
				let metadata: any;
				try {
					metadata = await fetchJSONFromIPFS(_tokenURI);
					console.log(metadata);
				} catch (error) {
					
				} 
				
				addNftToStore({
					tokenId: _tokenId,
					tokenURI: _tokenURI,
					metadata
				})
			}
		} catch (error) {
			console.log(error, "error cosd");
			
		}
	};

	const getIpfsHash = (url: string) => {
		const hashRegex = /^[a-zA-Z0-9]+$/;
		if (hashRegex.test(url)) {
			return url;
		} else {
			const ipfsRegex = /(?:ipfs:\/\/|\/ipfs\/)([^/]+)/i;
			const match = ipfsRegex.exec(url);
			if (match && match.length > 1) {
				return match[1];
			} else {
				return null;
			}
		}
	};

	async function fetchJSONFromIPFS(ipfsUrl: string) {
		try {
			const response = await fetch(ipfsUrl);
			if (!response.ok) {
				throw new Error(`Failed to fetch data from ${ipfsUrl}`);
			}

			const jsonData = await response.json();
			return jsonData;
		} catch (error) {
			console.error("Error fetching JSON from IPFS:", error);
			return null;
		}
	}

	useWatchContractEvent({
		abi: Musharka721Abi,
		address: NFT_ADDRESS,
		eventName: "Minted",
		onLogs
	});
}
