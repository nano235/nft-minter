"use client";
import Logo from "./Logo";
import { open_sans } from "@/app/fonts";
import Link from "next/link";
import { navLinks } from "@/mock";
import { NavLink } from "@/interfaces";
import { usePathname } from "next/navigation";
import Wallet from "./Wallet";

const Header = () => {
	const pathName = usePathname();
	const checkActive = (href: string) => {
		const isActive = href === pathName;
		return isActive;
	};
	return (
		<header className="relative flex justify-center items-center z-[1]">
			<div className="max-w-[144rem] w-full flex justify-between relative px-[1rem] 2xlg:px-[15rem] lg:px-[10rem] md:px-[5rem] inset-x-0 py-[1.7rem] ">
				<Logo />
				<div className="flex items-center gap-[1rem] md:gap-[2.6rem]">
					<nav>
						<ul
							className={`flex gap-[1rem] md:gap-[2rem] ${open_sans.className}`}
						>
							{navLinks.map((navLink: NavLink) => (
								<li
									key={navLink.id}
									className={`capitalize text-[1rem] sm:text-sm md:text-base font-semibold ${checkActive(navLink.href) && "text-transparent bg-clip-text bg-gradient-to-r from-[#627eea] to-[#ec4467]"}`}
								>
									<Link href={navLink.href}>{navLink.label}</Link>
								</li>
							))}
						</ul>
					</nav>
					<Wallet />
				</div>
			</div>
		</header>
	);
};

export default Header;
