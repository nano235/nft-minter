"use client";

import { Loader } from "@/components/shared";
import store, { persistor } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import WagmiProvider from "./wagmiProvider";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={<Loader />} persistor={persistor}>
                    <WagmiProvider>
                        {children}
                    </WagmiProvider>
                </PersistGate>
			</Provider>
		</>
	);
}
