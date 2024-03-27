"use client";
import { open_sans } from "@/app/fonts";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
	const pathName = usePathname();
	const showHomeButton = pathName !== "/";
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer
			className={`relative z-1 bg-black flex justify-center items-center z-[1]`}
		>
			<div className="max-w-[144rem] w-full grid grid-cols-1 gap-[2rem] md:gap-0 md:grid-cols-3 items-center px-[1rem] 2xlg:px-[15rem] md:px-[5rem] py-[2.4rem]">
				<Logo />
				<p className={`md:place-self-center ${open_sans.className}`}>
					{`NFT Sea ${year} © All right reserved `}
				</p>
				<div className="grid">
					{showHomeButton && (
						<button
							className={`gradient-button md:place-self-end ${open_sans.className}`}
						>
							<Link href="/">Explore Marketplace</Link>
						</button>
					)}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
