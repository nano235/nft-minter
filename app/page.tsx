"use client";

import NftList from "@/components/home/NftList";
import { ConnectWallet, TitleCard } from "@/components/shared";
import useNetwork from "@/hook/useNetwork";
import { useAccount } from "wagmi";

export default function Home() {
	const { isConnected } = useAccount();
	const isValidNetwork = useNetwork();

	return (
		<div className="h-full">
			<TitleCard title="Listing Owned NFTs" />

			{isConnected && isValidNetwork ? <NftList /> : <ConnectWallet />}
		</div>
	);
}
