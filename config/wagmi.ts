import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";
import { APP_NAME } from ".";

export const wagmiConfig = createConfig({
	chains: [sepolia],
	connectors: [
		injected(),
		coinbaseWallet({
			appName: APP_NAME,
		}),
	],
	transports: {
		[sepolia.id]: http(),
	},
	storage: null
});
