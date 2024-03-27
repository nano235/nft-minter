"use client";

import { IPFS_NODE } from "@/config";
import { useState } from "react";

export const useUploadFileToIpfs = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleUpload = async (file: File) => {
		setIsLoading(true);
		try {
			const data = new FormData();
			data.set("file", file);
			const res = await fetch("/api/pinata/pinFile", {
				method: "POST",
				body: data,
			});
            const resData = await res.json();
            if(res.status === 200){
                const url = `${IPFS_NODE}/${resData.IpfsHash}`;
                console.log(url);
                return url;
            }

            throw new Error(resData?.error)
		} catch (error: any) {
			throw new Error(error.message || "An error occured uploading to IPFS");
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		handleUpload,
	};
};

export const useUploadJsonToIpfs = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleUpload = async (data: any) => {
		setIsLoading(true);
        if(typeof data !== 'object') throw new Error("Invalid JSON data for NFT metadata")
		try {
			const res = await fetch("/api/pinata/pinJson", {
				method: "POST",
				body: JSON.stringify(data),
			});
			const resData = await res.json();
			if(res.status === 200){
                const url = `${IPFS_NODE}/${resData.IpfsHash}`;
                console.log(url);
                return resData.IpfsHash;
            }

            throw new Error(resData?.error)
		} catch (error: any) {
			throw new Error(error.message || "An error occured uploading to IPFS");
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		handleUpload,
	};
};
