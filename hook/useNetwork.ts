"use client";
import { CHAIN_ID } from "@/config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

export default function useNetwork() {
	const { isConnected, chainId } = useAccount();
	const [isValidNetwork, setIsValidNetwork] = useState(false);
	useEffect(() => {
		console.log(chainId, "chainID");

		if (isConnected && chainId?.toString() !== CHAIN_ID) {
			setIsValidNetwork(false);
			toast.error(
				"You are not connected to sepolia network. Please switch your network to Sepolia network",
			);
		} else if (chainId?.toString() === CHAIN_ID) {
			setIsValidNetwork(true);
		}
	}, [chainId, isConnected]);

	return isValidNetwork;
}
