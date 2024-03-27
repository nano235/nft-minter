"use client";

import React, { useState } from "react";
import { Modal } from "../shared";
import Image from "next/image";
import { Trait } from "@/interfaces";
import { useNftFormContext } from "./NftFormContext";

interface Props {
	close: () => void;
}

const TraitModal = ({ close }: Props) => {
	const { setNftFormData, nftFormData } = useNftFormContext();

	const lastIndex = nftFormData.traits!.length - 1;
	let id = nftFormData.traits!.length ? nftFormData.traits![lastIndex].id : 0;

	const [traitData, setTraitData] = useState<Trait>({ id, type: "", value: "" });
	let disabled = !traitData.type || !traitData.value;

	const handleChange = (e: any) => {
		setTraitData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const addTrait = () => {
		const updatedTraitData = {
			id: ++traitData.id,
			type: traitData.type,
			value: traitData.value,
		};
		const traits = nftFormData.traits ?? [];
		const traitArr = [...traits, updatedTraitData];
		setNftFormData({ ...nftFormData, traits: traitArr });
		close();
	};

	return (
		<Modal
			close={close}
			classNames="w-[90%] md:w-[50rem] relative pt-[1.5rem] pb-[3rem] px-[3rem]"
		>
			<button
				type="button"
				onClick={close}
				className="bg-transparent w-[3.3rem] h-[3.3rem] absolute right-[1.5rem] top-[1.1rem] rounded-md p-2 inline-flex items-center justify-center"
			>
				<Image src="/svgs/cancel.svg" alt="" width={33} height={33} />
			</button>
			<h3 className="mb-[1.6rem]">Add Trait</h3>
			<div className="grid w-full grid-cols-2 gap-[2rem]">
				<div>
					<label className="text-sm">Type</label>
					<input
						type="text"
						className="border-[#9E9E9E] bg-[#383838] mt-[1rem] border rounded-[0.5rem] w-full placeholder:text-white py-[0.7rem] px-[1rem] text-base focus-within:border-[#9E9E9E] focus:border-[#9E9E9E]"
						placeholder="Ex: size"
						value={traitData.type}
						name="type"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label className="text-sm">Value</label>
					<input
						type="text"
						className="border-[#9E9E9E] bg-[#383838] mt-[1rem] border rounded-[0.5rem] w-full placeholder:text-white py-[0.7rem] px-[1rem] text-base focus-within:border-[#9E9E9E] focus:border-[#9E9E9E]"
						placeholder="Ex: large"
						value={traitData.value}
						name="value"
						onChange={handleChange}
					/>
				</div>
			</div>
			<button
				className="gradient-button mt-[8rem] w-full disabled:opacity-[0.5] disabled:cursor-not-allowed"
				disabled={disabled}
				onClick={addTrait}
			>
				Add
			</button>
		</Modal>
	);
};

export default TraitModal;
