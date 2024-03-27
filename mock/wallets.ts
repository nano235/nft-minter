import { Wallet } from "@/interfaces";

export const wallets: Wallet[] = [
	{
		label: "Metamask",
		icon: "/svgs/metamask.svg",
		connectorName: "injected"
	},
	{
		label: "Portis",
		icon: "/svgs/portis.svg",
		connectorName: "Injected"
	},
	{
		label: "Torus",
		icon: "/svgs/torus.svg",
		connectorName: "Injected"
	},
	{
		label: "Coinbase Wallet",
		icon: "/svgs/walletlink.svg",
		connectorName: "coinbaseWalletSDK"
	},
];
