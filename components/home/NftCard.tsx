import React from "react";
import { ImageCard } from "../shared";
import { NFT } from "@/store/nftSlice";

interface Props {
	nft: NFT;
	onClick: () => void;
}

const NftCard = ({ ...props }: Props) => {
	return (
		<div
			onClick={props.onClick}
			className="w-full max-w-[40rem] md:max-w-[32rem] lg:max-w-[27rem] shrink-0 bg-white/[0.09] rounded-[0.5rem] px-[1.05rem] pt-[1.2rem] pb-[6.3rem] cursor-pointer"
		>
			<ImageCard src={props.nft.metadata?.image} />
			<p className="font-bold mt-[0.85rem]">{props.nft.metadata?.name}</p>
		</div>
	);
};

export default NftCard;
