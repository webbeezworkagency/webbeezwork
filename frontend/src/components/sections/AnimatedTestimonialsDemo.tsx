"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
	const testimonials = [
		{
			quote:
				"Webbeezwork completely transformed our website while keeping our original brand identity intact. The new site is faster, smoother, and so easy for us to update. We’ve also seen a big jump in our Google visibility and organic traffic thanks to their SEO work. It feels like U-Spa finally has the website it deserves.",
			name: "U-Spa Management Team",
			designation: "U-Spa",
			src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop",
		},
		{
			quote:
				"Working with Webbeezwork has given us consistent, high-quality traffic and a real lift in direct bookings. Their Google Ads and SEO strategy helped us reach more eco-travelers, and we saw a 20% increase in bookings within just a few months.",
			name: "Sapana Lodge Team",
			designation: "Sapana Lodge",
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
		},
		{
			quote:
				"Webbeezwork transformed our online presence. Their strategic approach to SEO and design doubled our traffic in just 3 months.",
			name: "Sarah Chen",
			designation: "Product Manager at TechFlow",
			src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote:
				"The team's dedication is unmatched. They didn't just build a website; they built a growth engine for our business.",
			name: "Michael Rodriguez",
			designation: "CTO at InnovateSphere",
			src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote:
				"Professional, creative, and data-driven. Webbeezwork delivered exactly what we needed to scale our operations.",
			name: "Emily Watson",
			designation: "Operations Director at CloudScale",
			src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote:
				"Their Google Ads strategy is pure gold. We saw an immediate ROI and continue to see growth month over month.",
			name: "James Kim",
			designation: "Engineering Lead at DataPro",
			src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote:
				"Finally, an agency that understands both design and performance. The new site is blazing fast and looks incredible.",
			name: "Lisa Thompson",
			designation: "VP of Technology at FutureNet",
			src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
