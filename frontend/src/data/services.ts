import { Search, MousePointer2, MapPin, Activity, PenTool, Share2, Monitor } from "lucide-react";

export const servicesData = [
	{
		id: "seo",
		title: "SEO Mastery",
		slug: "seo",
		icon: Search,
		image: "/images/services/seo.png",
		shortDesc: "Technical, Local, On-Page & Content SEO to dominate rankings.",
		fullDesc: "We don't just chase rankings; we chase revenue. Our SEO strategy is a blend of technical precision, content authority, and user experience optimization.",
		kpis: [
			{ label: "Avg. Traffic Increase", value: "+145%" },
			{ label: "Keyword Rankings", value: "Top 3" },
			{ label: "Conversion Uplift", value: "+35%" }
		],
		features: [
			"Technical SEO Audits",
			"Keyword Strategy & Mapping",
			"On-Page Optimization",
			"Link Building & PR",
			"Local SEO Domination"
		]
	},
	{
		id: "ads",
		title: "Google Ads (SEA)",
		slug: "google-ads",
		icon: MousePointer2,
		image: "/images/services/google-ads.png",
		shortDesc: "High-ROAS campaigns that convert clicks into revenue.",
		fullDesc: "Stop wasting budget on clicks that don't convert. We build hyper-targeted campaigns designed to capture high-intent leads at the lowest possible CPA.",
		kpis: [
			{ label: "Avg. ROAS", value: "4.5x" },
			{ label: "CPA Reduction", value: "-40%" },
			{ label: "Click-Through Rate", value: "8%+" }
		],
		features: [
			"Campaign Strategy & Setup",
			"Keyword Research & Negative Lists",
			"Ad Copywriting & A/B Testing",
			"Landing Page Optimization",
			"Remarketing Campaigns"
		]
	},
	{
		id: "gmb",
		title: "GMB Optimization",
		slug: "gmb-optimization",
		icon: MapPin,
		image: "/images/services/gmb.png",
		shortDesc: "Own your local map pack and drive foot traffic.",
		fullDesc: "Your Google Business Profile is your new homepage. We optimize every inch of it to ensure you show up when local customers are searching.",
		kpis: [
			{ label: "Local Views", value: "+200%" },
			{ label: "Call Volume", value: "+85%" },
			{ label: "Direction Requests", value: "+120%" }
		],
		features: [
			"Profile Verification & Setup",
			"Review Management Strategy",
			"Post Creation & Updates",
			"Q&A Management",
			"Spam Fighting"
		]
	},
	{
		id: "content",
		title: "Content Creation",
		slug: "content-creation",
		icon: PenTool,
		image: "/images/services/content.png",
		shortDesc: "Storytelling that builds authority and trust.",
		fullDesc: "Content is the fuel for your digital growth engine. We create data-backed, SEO-optimized content that educates, engages, and converts.",
		kpis: [
			{ label: "Engagement Rate", value: "+60%" },
			{ label: "Time on Page", value: "3m+" },
			{ label: "Lead Gen", value: "+45%" }
		],
		features: [
			"Blog Post Writing",
			"Whitepapers & Ebooks",
			"Video Scripting",
			"Email Newsletters",
			"Social Media Copy"
		]
	},
	{
		id: "social",
		title: "Social Media",
		slug: "social-media",
		icon: Share2,
		image: "/images/services/social.png",
		shortDesc: "Community growth and engagement strategies.",
		fullDesc: "Build a loyal community around your brand. We manage your social presence with a mix of creative content, community management, and paid amplification.",
		kpis: [
			{ label: "Follower Growth", value: "+25%" },
			{ label: "Engagement Rate", value: "5%+" },
			{ label: "Brand Reach", value: "100k+" }
		],
		features: [
			"Platform Strategy (IG, LI, TT)",
			"Content Calendar Management",
			"Community Engagement",
			"Influencer Partnerships",
			"Paid Social Ads"
		]
	},
	{
		id: "web",
		title: "Web Design & Dev",
		slug: "web-design",
		icon: Monitor,
		image: "/images/services/web-design.png",
		shortDesc: "High-performance websites built for conversion.",
		fullDesc: "Your website should be your best salesperson. We build lightning-fast, visually stunning websites that guide visitors toward conversion.",
		kpis: [
			{ label: "Page Speed Score", value: "95+" },
			{ label: "Conversion Rate", value: "4%+" },
			{ label: "Bounce Rate", value: "<30%" }
		],
		features: [
			"Custom UI/UX Design",
			"Next.js / React Development",
			"Mobile Responsiveness",
			"CMS Integration",
			"Speed Optimization"
		]
	}
];
