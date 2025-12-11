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
		logo: "/images/partners/logos/met14-logo.png",
		description: "Specialists in interim management and executive search, connecting top talent with leading organizations.",
		website: "https://www.met14.nl/"
	},
	{
		id: "2",
		name: "Improved Corporate Finance",
		logo: "/images/partners/logos/improved-logo.svg",
		description: "Leading corporate finance advisor for mid-market transactions, providing expert financial guidance.",
		website: "https://improvedcf.com/"
	},
	{
		id: "3",
		name: "Empactify",
		logo: "/images/partners/logos/empactify-favicon.ico",
		description: "Empowering organizations to create sustainable impact through innovative strategies.",
		website: "https://empactify.io/"
	},
	{
		id: "4",
		name: "Lingeman",
		logo: "/images/partners/logos/lingeman-logo.png",
		description: "Strategic design and branding agency helping businesses define their unique identity.",
		website: "https://lingeman.com/"
	},
	{
		id: "5",
		name: "Dolores Leeuwin",
		logo: "/images/partners/logos/dolores-lion-logo.png",
		description: "Professional presentation and communication coaching for leaders and public figures.",
		website: "https://doloresleeuwin.nl"
	},
	{
		id: "6",
		name: "The Whitelist",
		logo: "/images/partners/logos/whitelist-logo.png",
		description: "Creative talent agency connecting brands with exceptional artistic talent.",
		website: "https://www.thewhitelist.nl/"
	}
];
