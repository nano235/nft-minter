import React from "react";
import { ImageCard, Modal } from "../shared";
import Image from "next/image";
import { open_sans } from "@/app/fonts";
import Accordion from "../shared/Accordion";
import { NFT } from "@/store/nftSlice";
import { Trait } from "@/interfaces";

interface Props {
	nft: NFT;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NftModal = ({ nft, setShowModal }: Props) => {
	const close = () => {
		setShowModal(false);
	};
	return (
		<Modal
			close={close}
			classNames="w-[90%] lg:w-[88.8rem] xlg:w-[108.8rem] py-[4rem] px-[2rem] xlg:pl-[5.6rem] lxg:pr-[6.8rem] lg:pb-[11.46rem] flex gap-[2rem] relative flex-wrap lg:flex-nowrap"
		>
			<button
				type="button"
				onClick={close}
				className="bg-transparent w-[3.3rem] h-[3.3rem] absolute right-[1.5rem] top-[1.1rem] rounded-md p-2 inline-flex items-center justify-center"
			>
				<Image src="/svgs/cancel.svg" alt="" width={33} height={33} />
			</button>
			<div className="w-full lg:w-[37.2rem] shrink-0">
				<ImageCard
					src={nft.metadata?.image}
					classNames="h-[20rem] lg:h-[38.55rem] mb-[1.8rem]"
				/>
				{nft.metadata?.attributes && (
					<Accordion title="Details">
						{nft.metadata?.attributes.map((trait: Trait, index: number) => (
							<div key={index} className="flex justify-between gap-[1rem]">
								<span className="text-base">{trait.type}</span>
								<span className="text-base">{trait.value}</span>
							</div>
						))}
					</Accordion>
				)}
			</div>
			<div className="max-w-[56rem] max-h-[10rem] lg:max-h-[100%] overflow-y-scroll">
				<h3 className="mb-[1.6rem]">{nft.metadata?.name}</h3>
				<div className="w-full border-b-[0.1rem] border-white/[0.5] pb-[1.6rem]">
					<h4
						className={`text-base font-semibold mb-[0.4rem] ${open_sans.className}`}
					>
						Description
					</h4>
					<p className={`text-base text-white/[0.7] ${open_sans.className}`}>
						{nft.metadata?.description}
					</p>
				</div>
			</div>
		</Modal>
	);
};

export default NftModal;
