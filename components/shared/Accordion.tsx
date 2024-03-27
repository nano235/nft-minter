"use client";
import { open_sans } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
	title: string;
	children: React.ReactNode;
}

const Accordion = ({ ...props }: Props) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const toggleAccordion = () => {
		setIsActive(!isActive);
	};
	return (
		<div
			className={`border border-[#9E9E9E] bg-[#383838] px-[2.07rem] py-[1.7rem] rounded-[0.5rem] ${open_sans.className}`}
		>
			<button
				className="w-full flex justify-between items-center"
				onClick={toggleAccordion}
			>
				<span className="text-base max-w-[80%]">{props.title}</span>
				<div
					className={`relative w-[2.4rem] h-[2.4rem] ${
						isActive ? "rotate-180" : "rotate-0"
					} transition duration-300`}
				>
					<Image src="/svgs/chevron.svg" fill alt="" sizes="100vw" />
				</div>
			</button>
			{isActive && (
				<div className="py-4 max-h-[8rem] overflow-y-scroll">
					{props.children}
				</div>
			)}
		</div>
	);
};

export default Accordion;
