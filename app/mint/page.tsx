"use client";

import NftForm from "@/components/newNft/NftForm";
import { NftFormProvider } from "@/components/newNft/NftFormContext";
import { ConnectWallet, TitleCard } from "@/components/shared";
import useNetwork from "@/hook/useNetwork";
import { useAccount } from "wagmi";

export default function Mint() {
	const { isConnected } = useAccount();
	const isValidNetwork = useNetwork();
	return (
		<>
			<TitleCard
				title="Mint New NFT"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. "
			/>
			{isConnected && isValidNetwork ? (
				<NftFormProvider>
					<NftForm />
				</NftFormProvider>
			) : (
				<ConnectWallet />
			)}
		</>
	);
}
