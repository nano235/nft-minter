"use client";

import React, { useState } from "react";
import { WalletContainer } from ".";

const ConnectWallet = () => {
	const [showWalletModal, setShowWalletModal] = useState<boolean>(false);
	return (
		<div className="w-full my-[10rem] grid place-content-center">
			<button
				className="gradient-button"
				type="button"
				onClick={() => setShowWalletModal(true)}
			>
				Connect Wallet
			</button>
			<WalletContainer
				showWalletModal={showWalletModal}
				setShowWalletModal={setShowWalletModal}
			/>
		</div>
	);
};

export default ConnectWallet;
