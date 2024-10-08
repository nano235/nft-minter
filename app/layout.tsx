import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/shared";
import { cinzel } from "./fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/providers";
import Updater from "./updaters";

export const metadata: Metadata = {
	title: "NFT MINTER",
	description: "NFT MINTER",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${cinzel.className}`}>
				<Providers>
					<Updater>
						<ToastContainer
							position="top-right"
							autoClose={2000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="dark"
						/>
						<main className=" h-full overflow-hidden relative ">
							<div className="w-full h-full inset-0 overflow-hidden absolute z-0 blur-[4.5rem] before:content-[''] before:absolute before:inset-0 before:bg-[#000]/[0.67]">
								<div className="bg-gradient-radial w-[82rem] h-[82rem] from-[#DE8FFF] via-[#753DEB] via-[46%] to-[#000000] to-[66%] left-[-33.6rem] top-[-38.4rem] rounded-[50%] absolute z-[-1]"></div>
								<div className="bg-gradient-radial w-[82rem] h-[82rem] from-[#DE8FFF] via-[#753DEB] via-[46%] to-[#000000] to-[66%] left-[-33.6rem] top-[18.56rem] rounded-[50%] absolute z-[-1]"></div>
								<div className="bg-gradient-radial w-[50rem] h-[50rem] from-[#627EEA] via-[#2F3C70] via-[46%] to-[#000000] to-[66%] left-[-19.69rem] top-[106.5rem] rounded-[50%] absolute z-[-1]"></div>
								<div className="bg-gradient-radial w-[65.86rem] h-[65.86rem] from-[#FEE676] via-[#9C4763] via-[46%] to-[#000000] to-[66%] left-[-18.18rem] bottom-[-16rem] rounded-[50%] absolute z-[-1]"></div>
								<div className="bg-gradient-radial w-[54.8rem] h-[54.8rem] from-[#34C77B] to-[#000000] to-[66%] left-[30.5%] top-[32.18rem] rounded-[50%] absolute z-[-1]"></div>
								<div className="bg-gradient-radial w-[76.65rem] h-[76.65rem] from-[#EC4467] via-[#7B2336] via-[46%] to-[#000000] to-[66%] right-[-51.8rem] lg:right-[-25.95rem] top-[28.53rem] rounded-[50%] absolute z-[-1]"></div>
								<div className="bg-gradient-radial w-[91.23rem] h-[91.23rem] from-[#CCFFA6] via-[#FEE676] via-[46%] to-[#000000] to-[66%] right-[-64.5rem] lg:right-[-32.25rem] top-[-48.76rem] rounded-[50%] absolute z-[-1]"></div>
							</div>
							<Header />
							<section className="max-w-[144rem] mx-auto md:px-[5rem] px-[1rem] pb-[10.6rem] 2xlg:px-[15rem] lg:px-[10rem] relative">
								{children}
							</section>
							<Footer />
						</main>
					</Updater>
				</Providers>
			</body>
		</html>
	);
}
