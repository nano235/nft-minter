"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { WalletContainer } from ".";
import useIsMounted from "@/hook/useIsMounted";
import { toast } from "react-toastify";
import { CHAIN_ID } from "@/config";

export default function Wallet() {
	const { isConnected } = useAccount();

	return isConnected ? <Account /> : <ConnectWallet />;
}

export function ConnectWallet() {
	const [showWalletModal, setShowWalletModal] = useState<boolean>(false);
	return (
		<>
			<Image
				className="relative cursor-pointer"
				src="/svgs/wallet.svg"
				alt=""
				width={28}
				height={28}
				onClick={() => setShowWalletModal(true)}
			/>

			<WalletContainer
				showWalletModal={showWalletModal}
				setShowWalletModal={setShowWalletModal}
			/>
		</>
	);
}

function Account() {
	const { address } = useAccount();
	const { disconnect } = useDisconnect();
	const { data: ensName } = useEnsName({ address });
	const mounted = useIsMounted();
	if (!mounted) return null;

	const formattedAddress = formatAddress(address);

	return (
		<div className="row">
			<div className="inline">
				<div className="stack">
					{address && (
						<div className="text">
							{ensName
								? `${ensName} (${formattedAddress})`
								: formattedAddress}
						</div>
					)}
				</div>
			</div>
			<button className="button" onClick={() => disconnect()} type="button">
				Disconnect
			</button>
		</div>
	);
}

function formatAddress(address?: string) {
	if (!address) return null;
	return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
}
