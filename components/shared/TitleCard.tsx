import { open_sans } from "@/app/fonts";
import React from "react";

interface Props {
	title: string;
	description?: string;
}

const TitleCard = ({ ...props }: Props) => {
	return (
		<div className="grid place-content-center rounded-3xl border border-white p-[2rem] md:p-[4.4rem] bg-white/[0.09]">
			<div className="max-w-4xl text-center">
				<h2 className="text-[3rem] lg:text-[4.4rem] font-bold leading-[6.4rem] text-transparent bg-clip-text gradient-text m-4">
					{props.title}
				</h2>
				{props.description && (
					<p className={`${open_sans.className}`}>{props.description}</p>
				)}
			</div>
		</div>
	);
};

export default TitleCard;
