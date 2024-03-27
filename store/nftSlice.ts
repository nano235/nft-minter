import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NFT = {
	tokenId: string;
	tokenURI: string;
	metadata: any;
};

type InitialState = {
	nfts: NFT[];
    refetch: boolean
};

const initialState: InitialState = {
	nfts: [],
    refetch: true
};

const nftSlice = createSlice({
	name: "nft",
	initialState,
	reducers: {
		setNFTs(state, action: PayloadAction<NFT[]>) {
			state.nfts = action.payload;
		},
        setRefetch(state, action: PayloadAction<boolean>) {
            state.refetch = action.payload
        },
		reset(state) {
			state.nfts = [];
		},
	},
});

export const { setNFTs, setRefetch, reset } = nftSlice.actions;
export default nftSlice.reducer;
