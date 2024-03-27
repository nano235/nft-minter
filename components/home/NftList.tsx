"use client";
import React, { useState } from "react";
import { NftCard } from "..";
import NftModal from "./NftModal";
import { NFT } from "@/store/nftSlice";
import { useAppSelector } from "@/store";
import Link from "next/link";

const NftList = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedNFT, setSelectedNFT] = useState<NFT>();
	const nfts = useAppSelector(state => state.nft.nfts);

	const handleClick = (nft: NFT) => {
		setShowModal(true);
		setSelectedNFT(nft);
	};

	return (
		<>
			<div className="my-[6.8rem] flex flex-wrap justify-center md:justify-evenly xlg:justify-around gap-x-[1rem] gap-y-[2rem]">
				{nfts.length ? (
					nfts.map((nft: NFT, index: number) => (
						<NftCard key={index} nft={nft} onClick={() => handleClick(nft)} />
					))
				) : (
					<div className="grid place-content-center place-items-center my-[10rem] w-full">
						<h3>You do not have any NFT&apos;s minted</h3>
						<button className="gradient-button w-[20rem] mt-[2rem]">
							<Link href="/mint">Mint</Link>
						</button>
					</div>
				)}
			</div>

			{showModal && <NftModal nft={selectedNFT} setShowModal={setShowModal} />}
		</>
	);
};

export default NftList;
