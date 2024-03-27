"use client";
import { Trait } from "@/interfaces";
import React, { useState, useContext, createContext } from "react";

interface NftFormData {
	image?: File;
	title: string;
	description: string;
	traits?: Trait[];
}

type ContextProps = {
	nftFormData: NftFormData;
	setNftFormData: React.Dispatch<React.SetStateAction<NftFormData>>;
	getImageUrl: () => string | undefined;
	txHash: string;
	setTxHash: React.Dispatch<React.SetStateAction<string>>;
	resetState: () => void;
};

const NftFormContext = createContext<ContextProps | undefined>(undefined);

const initialState: NftFormData = {
	image: undefined,
	title: "",
	description: "",
	traits: [],
};

const NftFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [txHash, setTxHash] = useState("");
	const [nftFormData, setNftFormData] = useState<NftFormData>(initialState);

	const getImageUrl = () => {
		if (!nftFormData.image) return undefined;
		return URL.createObjectURL(nftFormData.image);
	};

	const resetState = () => {
		setNftFormData(initialState);
	};

	return (
		<NftFormContext.Provider
			value={{
				nftFormData,
				setNftFormData,
				getImageUrl,
				txHash,
				setTxHash,
				resetState,
			}}
		>
			{children}
		</NftFormContext.Provider>
	);
};

export const useNftFormContext = () => {
	const context = useContext(NftFormContext);
	if (!context) {
		throw new Error("useMyContext must be used within a MyContextProvider");
	}

	return context;
};

export { NftFormContext, NftFormProvider };
