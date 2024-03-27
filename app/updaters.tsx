"use client";

import useFetchNft from "@/hook/useFetchNft";

export default function Updater({ children }) {
	useFetchNft();

	return children
}
