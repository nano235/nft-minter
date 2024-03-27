"use client";
import React, { useEffect } from "react";

interface Props {
	close: () => void;
	children?: React.ReactNode;
	classNames?: string;
}

const Modal = ({ close, classNames, children }: Props) => {
	useEffect(() => {
		const handleClickOutside = () => {
			close();
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [close]);
	return (
		<div className="bg-[#000]/[0.32] backdrop-blur-[0.6rem] fixed inset-0 z-[20] grid place-content-center place-items-center">
			<div
				className={`bg-black rounded-[1.6rem] min-w-[15rem] min-h-[25rem] max-h-[90dvh] max-w-[95%] ${classNames}`}
				onClick={(e: React.MouseEvent<HTMLDivElement>) =>
					e.nativeEvent.stopImmediatePropagation()
				}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
