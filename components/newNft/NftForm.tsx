"use client";
import { open_sans } from "@/app/fonts";
import Image from "next/image";
import React, { ChangeEvent, useMemo, useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { toast } from "react-toastify";
import { useNftFormContext } from "./NftFormContext";
import { useAccount } from "wagmi";
import TraitModal from "./TraitModal";
import { Trait } from "@/interfaces";

const NftForm = () => {
	const { address } = useAccount();
	const { nftFormData, setNftFormData, getImageUrl } = useNftFormContext();
	const [showModal, setShowModal] = useState<{
		confirmationModal: boolean;
		traitModal: boolean;
	}>({ confirmationModal: false, traitModal: false });
	const [autoList, setAutoList] = useState<boolean>(true);
	const titleRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);

	const closeTraitModal = () => {
		setShowModal({ ...showModal, traitModal: false });
	};
	const openTraitModal = () => {
		setShowModal({ ...showModal, traitModal: true });
	};
	const closeConfirmationModal = () => {
		setShowModal({ ...showModal, confirmationModal: false });
	};

	const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setNftFormData(prev => ({ ...prev, image: file }));
		}
	};

	const handleSubmit = (e: React.FormEvent, shouldList: boolean = true) => {
		e.preventDefault();
		setAutoList(shouldList)
		if (
			!nftFormData.image ||
			!titleRef.current?.value ||
			!descriptionRef.current?.value
		) {
			return toast.error("Please input all the fields");
		}
		const nftData = {
			title: titleRef.current?.value || "",
			description: descriptionRef.current?.value || "",
		};
		setNftFormData(prev => ({ ...prev, ...nftData }));
		setShowModal({ ...showModal, confirmationModal: true });
	};

	const deleteTrait = (id: number) => {
		const filteredTraits = nftFormData.traits?.filter(
			(trait: Trait) => trait.id !== id,
		);
		setNftFormData({ ...nftFormData, traits: filteredTraits });
	};
	const imageUrl = useMemo(() => getImageUrl(), [nftFormData?.image]);

	return (
		<div
			className={`max-w-[54.5rem] w-full mx-auto mt-[9.4rem] ${open_sans.className}`}
		>
			{imageUrl && (
				<div className="w-[30rem] h-[20rem] relative overflow-hidden max-w-[100%] mx-auto mb-[2rem] rounded-[0.5rem]">
					<Image src={imageUrl} alt="" fill sizes="100vw" />
				</div>
			)}
			<div>
				<label className="text-sm">NFT*</label>
				<div className="border-dashed border-[#9E9E9E] bg-[#383838] pt-[1.9rem] pb-[2.2rem] border-[0.1rem] rounded-[0.5rem] relative grid place-content-center cursor-pointer">
					<div className="flex gap-[0.5rem] mb-[0.8rem] justify-center">
						<Image src="/svgs/upload.svg" alt="" width={16} height={16} />
						<h6 className="text-md ">Upload Image</h6>
					</div>
					<input
						type="file"
						className="w-full h-full absolute inset-0 opacity-0 cursor-pointer z-1"
						accept="image/*"
						onChange={handleIconChange}
					/>
					<span className="text-sm text-white/[0.6]">
						format supported: Jpeg, png
					</span>
				</div>
			</div>
			<div className="mt-[1.9rem]">
				<label className="text-sm">Title*</label>
				<input
					type="text"
					className="border-[#9E9E9E] bg-[#383838] border rounded-[0.5rem] w-full placeholder:text-white py-[1.7rem] px-[2.07rem] text-base focus-within:border-[#9E9E9E] focus:border-[#9E9E9E]"
					placeholder="NFT Title"
					ref={titleRef}
				/>
			</div>
			<div className="mt-[1.9rem]">
				<label className="text-sm">Description</label>
				<textarea
					className="border-[#9E9E9E] bg-[#383838] border rounded-[0.5rem] w-full placeholder:text-white py-[1.7rem] px-[2.07rem] text-base focus-within:border-[#9E9E9E] focus:border-[#9E9E9E]"
					placeholder="Description"
					ref={descriptionRef}
				/>
			</div>
			<div className="mt-[2rem]">
				<label className="text-sm">Traits</label>
				{nftFormData.traits?.map((trait: Trait) => (
					<div
						key={trait.id}
						className="p-[1rem] bg-[#383838] flex justify-between rounded-[0.5rem] my-[1rem] border-[#9E9E9E] border"
					>
						<p>
							{trait.type}|{trait.value}
						</p>
						<div
							className="relative w-[2.4rem] h-[2.4rem] cursor-pointer"
							onClick={() => deleteTrait(trait.id)}
						>
							<Image src="/svgs/cancel.svg" alt="" fill sizes="100vw" />
						</div>
					</div>
				))}
				<div
					className="flex gap-[1rem] mt-[2rem] cursor-pointer"
					onClick={openTraitModal}
				>
					<div className="relative w-[2.4rem] h-[2.4rem]">
						<Image src="/svgs/plus.svg" alt="" fill sizes="100vw" />
					</div>
					<p>Add Traits</p>
				</div>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[1.7rem]">
				<button
					onClick={(e) => handleSubmit(e, false)}
					disabled={!address}
					className="w-full grid place-content-center text-base font-semibold p-[1.9rem] rounded-[0.3rem] hover:scale-[1.03] transition transition-300 disabled:opacity-[0.5] disabled:cursor-not-allowed"
				>
					Mint without listing
				</button>
				<button
					className="gradient-button w-full disabled:opacity-[0.5] disabled:cursor-not-allowed"
					disabled={!address}
					onClick={handleSubmit}
				>
					Mint and list immediately
				</button>
			</div>
			{showModal.traitModal && <TraitModal close={closeTraitModal} />}
			{showModal.confirmationModal && (
				<ConfirmationModal close={closeConfirmationModal} autoList={autoList} />
			)}
		</div>
	);
};

export default NftForm;
