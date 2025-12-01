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
		name: "Nextlane",
		logo: "/images/partners/partner-1.webp",
		description: "A leading innovator in the tech space, collaborating with us to deliver cutting-edge solutions.",
		website: "https://example.com"
	},
	{
		id: "2",
		name: "Partner Two",
		logo: "/images/partners/partner-2.webp",
		description: "Strategic alliance for global outreach and community engagement.",
		website: "https://example.com"
	}
];
