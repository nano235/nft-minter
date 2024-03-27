"use client"
import { open_sans } from "@/app/fonts";
import { Wallet } from "@/interfaces";
import { wallets } from "@/mock";
import Image from "next/image";
import React from "react";
import { Connector, useChainId, useConnect } from "wagmi";

interface Props {
	setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
	showWalletModal: boolean;
}

const WalletContainer = ({ setShowWalletModal, showWalletModal }: Props) => {
	const { connectors, connect } = useConnect();
	const chainId = useChainId();

	const close = () => {
		setShowWalletModal(false);
	};
	return (
		<div
			className={`fixed right-0 h-[100dvh] z-[20] bg-black top-0 w-[30rem] md:w-[45rem] pt-[3rem] md:pt-[3.5rem] px-[2rem] md:pl-[2.66rem] md:pr-[9.05rem] border-l-[0.1rem] border-white/[0.2] transition duration-500 ${showWalletModal ? "translate-x-[0]" : "translate-x-[101vw]"} ${open_sans.className}`}
		>
			<button
				type="button"
				onClick={close}
				className="bg-transparent w-[4.5rem] h-[4.5rem] absolute right-[1rem] top-[2.5rem] md:right-[2.9rem] md:top-[3.7rem] rounded-md p-2 inline-flex items-center justify-center"
			>
				<div className="relative w-[4.5rem] h-[4.5rem]">
					<Image src="/svgs/cancel.svg" alt="" fill sizes="100vw" />
				</div>
			</button>
			<h3 className="text-l md:text-xl">Connect Wallet</h3>
			<div className="w-full flex flex-col gap-[2.7rem] mt-[3.2rem] mb-[2.7rem]">
				{wallets.map((wallet: Wallet) => {
					const connector = connectors.find((c) => c.id === wallet.connectorName)
					if(!connector) return;
					
					return (
						<ConnectorButton
							key={connector.uid}
							connector={connector}
							wallet={wallet}
							onClick={() => connect({ connector, chainId })}
						/>
					);
				})}
			</div>
			<div className="w-full">
				<p>
					Dont have a wallet?{" "}
					<a
						href="https://ethereum.org/en/wallets/find-wallet/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-transparent bg-clip-text bg-gradient-to-r from-[#627eea] to-[#ec4467]"
					>
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
};

export default WalletContainer;

function ConnectorButton({
	connector,
	onClick,
	wallet
}: {
	connector: Connector;
	onClick: () => void;
	wallet: Wallet
}) {
	const [ready, setReady] = React.useState(false);
	React.useEffect(() => {
		(async () => {
			const provider = await connector.getProvider();
			setReady(!!provider);
		})();
	}, [connector, setReady]);

	return (
		<button
			className="bg-[#282828] py-[1.6rem] px-[2.4rem] rounded-[1rem] border border-[#11143B33]/[0.2] flex gap-[1.6rem] items-center"
			disabled={!ready}
			onClick={onClick}
		>
			<Image src={wallet.icon} width={24} height={24} alt={wallet.label} />
			<h3 className="text-base md:text-[2rem] capitalize font-normal">
				Connect {wallet.label}
			</h3>
		</button>
	);
}
