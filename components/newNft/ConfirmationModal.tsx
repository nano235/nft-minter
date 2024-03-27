"use client";

import React, { useMemo, useState } from "react";
import { ImageCard, Loader, Modal } from "../shared";
import { open_sans } from "@/app/fonts";
import { useNftFormContext } from "./NftFormContext";
import { toast } from "react-toastify";
import { useUploadFileToIpfs, useUploadJsonToIpfs } from "@/hook/usePinata";
import { useAccount } from "wagmi";
import useMint from "@/hook/useMint";
import errorHandler from "@/utils/errorHandler";

interface Props {
	close: () => void;
	autoList: boolean;
}

const ConfirmationModal = ({ close, autoList }: Props) => {
	const { address } = useAccount();
	const [isLoading, setIsLoading] = useState(false);
	const { nftFormData, getImageUrl, setTxHash, resetState } = useNftFormContext();
	const { handleUpload: handleUploadFile } = useUploadFileToIpfs();
	const { handleUpload: handleUploadJson } = useUploadJsonToIpfs();
	const { callNftMint } = useMint();

	const imageUrl = useMemo(() => getImageUrl(), []);

	const listToOpensea = () => {};

	const mintNFT = async () => {
		try {
			setIsLoading(true);

			const toastId = toast.info("Step 1/3: Uploading image to IPFS...", {
				autoClose: false,
			});
			const ipfsUrl = await handleUploadFile(nftFormData.image);

			const metadata = {
				name: nftFormData.title,
				description: nftFormData.description ? nftFormData.description : "",
				image: ipfsUrl,
				attributes: nftFormData.traits,
			};

			toast.update(toastId, {
				type: "info",
				render: "Step 2/3: Uploading Metadata to IPFS...",
				autoClose: false,
			});
			const tokenUri = await handleUploadJson(metadata);

			toast.update(toastId, {
				type: "info",
				render: "Step 3/3: Minting NFT...",
				autoClose: false,
			});
			const tx = await callNftMint(address, tokenUri);
			setTxHash(tx as string);

			toast.update(toastId, {
				type: "success",
				render: "NFT minted successfully",
				autoClose: 5000,
			});
			resetState();
		} catch (error: any) {
			const errMessage = errorHandler(error);
			toast.error(errMessage || "An error occurred!");
		} finally {
			close();
			setIsLoading(false);
		}
	};

	return (
		<Modal
			close={close}
			classNames="w-[40rem] md:w-[45.7rem] px-[2.28rem] pt-[2.1rem] pb-[3.3rem]"
		>
			{imageUrl && (
				<ImageCard
					src={imageUrl}
					classNames="min-h-[24.5rem] pb-[2.1rem] mb-[1.8rem]"
				/>
			)}
			<p className="font-bold mb-[0.5rem] capitalize">{nftFormData.title}</p>
			<div className="overflow-y-scroll max-h-[15rem]">
				<p className={`text-base text-white/[0.7] ${open_sans.className}`}>
					{nftFormData.description}
				</p>
			</div>
			<button
				className={`gradient-button w-[15.5rem] mx-auto mt-[1.8rem] gap-[0.5rem] disabled:opacity-[0.5] disabled:cursor-not-allowed ${open_sans.className}`}
				disabled={isLoading}
				onClick={mintNFT}
			>
				{isLoading && <Loader />}
				<span>Continue</span>
			</button>
		</Modal>
	);
};

export default ConfirmationModal;
