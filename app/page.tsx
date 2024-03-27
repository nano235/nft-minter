"use client";

import NftList from "@/components/home/NftList";
import { ConnectWallet, TitleCard } from "@/components/shared";
import { useAccount } from "wagmi";

export default function Home() {
	const { isConnected } = useAccount();

	return (
		<div className="h-full">
			<TitleCard title="Listing Owned NFTs" />
			
			{isConnected ? (
				<NftList />
			) : (
				<ConnectWallet />
			)}
		</div>
	);
}
