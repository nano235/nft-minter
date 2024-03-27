"use client";

import { NFT_ADDRESS } from "@/config";
import Musharka721Abi from "@/config/abis/musharka721.json";
import { useWriteContract } from "wagmi";

export default function useMint() {
	const { writeContract } = useWriteContract();

	const callNftMint = (to: `0x${string}`, tokenUri: string) => {
		return new Promise((resolve, reject) => {
			writeContract(
				{
					abi: Musharka721Abi,
					address: NFT_ADDRESS,
					functionName: "mint",
					args: [to, tokenUri],
				},
				{
					onSettled(data, error) {
						if (error) {
							reject(error);
						} else {
							resolve(data);
						}
					},
				},
			);
		});
	};

	return {
		callNftMint,
	};
}
