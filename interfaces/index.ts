export interface NavLink {
	label: string;
	href: string;
	id: number;
	isExternal: boolean;
}

export interface Wallet {
	label: string;
	icon: string;
	connectorName: string;
}

export interface Trait {
	id: number;
	type: string;
	value: string;
}
