"use client";

import NftForm from "@/components/newNft/NftForm";
import { NftFormProvider } from "@/components/newNft/NftFormContext";
import { ConnectWallet, TitleCard } from "@/components/shared";
import { useAccount } from "wagmi";

export default function Mint() {
	const { isConnected } = useAccount();
	return (
		<>
			<TitleCard
				title="Mint New NFT"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. "
			/>
			{isConnected ? (
				<NftFormProvider>
					<NftForm />
				</NftFormProvider>
			) : (
				<ConnectWallet />
			)}
		</>
	);
}
