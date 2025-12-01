"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
	const testimonials = [
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
