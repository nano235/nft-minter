import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<div>
			<Link href="/">
				<h1 className="text-[2rem] lg:text-[4.8rem] font-bold leading-[7rem]">
					<span>NFT</span>{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#627eea] to-[#ec4467]">
						SEA
					</span>
				</h1>
			</Link>
		</div>
	);
};

export default Logo;
