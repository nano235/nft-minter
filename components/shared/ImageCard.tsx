import Image from "next/image";
import React from "react";

interface Props {
	src: string;
	classNames?: string;
	title?: string;
}

const ImageCard = ({ src, classNames, title = "" }: Props) => {
	return (
		<div
			className={`${classNames && classNames} w-full bg-gradient-to-r  from-[#FFFFFF] to-[#B8B8B8] h-[21.5rem] rounded-[0.5rem] relative py-[1.28rem] grid justify-center`}
		>
			<div className="relative w-[20rem] h-[15rem] self-end">
				<Image src={src} alt={title} fill sizes="100vw" />
			</div>
			<div className=" opacity-20 w-full h-[1rem] blur-[0.1rem] bg-gradient-radial from-[#000000] to-[#000000]/[0] rounded-[50%] self-end justify-self-center"></div>
		</div>
	);
};

export default ImageCard;
