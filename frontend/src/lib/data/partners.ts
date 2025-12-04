export interface Partner {
	id: string;
	name: string;
	logo: string;
	description: string;
	website?: string;
}

export const partners: Partner[] = [
	{
		id: "1",
		name: "MET14",
		logo: "https://www.met14.nl/content/uploads/2023/07/logo.png",
		description: "Specialists in interim management and executive search, connecting top talent with leading organizations.",
		website: "https://www.met14.nl/"
	},
	{
		id: "2",
		name: "Improved Corporate Finance",
		logo: "https://improvedcf.com/wp-content/uploads/2021/09/improved-logo.svg",
		description: "Leading corporate finance advisor for mid-market transactions, providing expert financial guidance.",
		website: "https://improvedcf.com/"
	},
	{
		id: "3",
		name: "Empactify",
		// Transparent SVG with black text "Empactify"
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9ImJsYWNrIj5FbXBhY3RpZnk8L3RleHQ+PC9zdmc+",
		description: "Empowering organizations to create sustainable impact through innovative strategies.",
		website: "https://empactify.io/"
	},
	{
		id: "4",
		name: "Lingeman",
		logo: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/296980/821530_774628.png",
		description: "Strategic design and branding agency helping businesses define their unique identity.",
		website: "https://lingeman.com/"
	},
	{
		id: "5",
		name: "Dolores Leeuwin",
		// Transparent SVG with black text "Dolores Leeuwin"
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9ImJsYWNrIj5Eb2xvcmVzIExlZXV3aW48L3RleHQ+PC9zdmc+",
		description: "Professional presentation and communication coaching for leaders and public figures.",
		website: "https://doloresleeuwin.nl"
	},
	{
		id: "6",
		name: "The Whitelist",
		logo: "https://www.thewhitelist.nl/wp-content/uploads/2024/10/MY-logo-2.png",
		description: "Creative talent agency connecting brands with exceptional artistic talent.",
		website: "https://www.thewhitelist.nl/"
	}
];
