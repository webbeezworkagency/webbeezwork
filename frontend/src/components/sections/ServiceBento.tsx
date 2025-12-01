"use client";

import { motion } from "framer-motion";
import { TrendingUp, Megaphone, MapPinned, Activity, Pencil, Users, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
	{
		id: "seo",
		title: "SEO Mastery",
		desc: "Technical, Local, On-Page & Content SEO to dominate rankings.",
		icon: TrendingUp,
		colSpan: "md:col-span-2",
		bg: "bg-brand-gray"
	},
	{
		id: "ads",
		title: "Google Ads (SEA)",
		desc: "High-ROAS campaigns that convert clicks into revenue.",
		icon: Megaphone,
		colSpan: "md:col-span-1",
		bg: "bg-brand-gray-light"
	},
	{
		id: "gmb",
		title: "GMB Optimization",
		desc: "A boost for your local market. Display your info on Google search & Maps.",
		icon: MapPinned,
		colSpan: "md:col-span-1",
		bg: "bg-brand-gray-light"
	},
	{
		id: "health",
		title: "Online Visibility Check",
		desc: "Comprehensive online health-check of your digital footprint with actionable insights.",
		icon: Activity,
		colSpan: "md:col-span-2",
		bg: "bg-brand-yellow text-black",
		isHighlight: true
	},
	{
		id: "content",
		title: "Content Creation",
		desc: "Storytelling that builds authority and trust.",
		icon: Pencil,
		colSpan: "md:col-span-1",
		bg: "bg-brand-gray"
	},
	{
		id: "social",
		title: "Social Media",
		desc: "Community growth and engagement strategies.",
		icon: Users,
		colSpan: "md:col-span-1",
		bg: "bg-brand-gray"
	},
	{
		id: "web",
		title: "Web Design & Dev",
		desc: "High-performance websites built for conversion.",
		icon: Laptop,
		colSpan: "md:col-span-2",
		bg: "bg-brand-gray-light"
	}
];

export function ServiceBento() {
	return (
		<section id="services" className="py-24 bg-background">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
						Digital Dominance <span className="text-brand-yellow">Decoded.</span>
					</h2>
					<p className="text-foreground/60 max-w-2xl text-lg">
						Our comprehensive suite of services designed to cover every angle of your digital presence.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 100, scale: 0.8 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								type: "spring",
								stiffness: 100,
								damping: 20,
								delay: index * 0.1
							}}
							className={cn(
								"group relative p-8 rounded-3xl overflow-hidden transition-all hover:scale-[1.02] duration-300",
								service.colSpan,
								service.bg
							)}
						>
							<div className="relative z-10 h-full flex flex-col justify-between">
								<div className={cn(
									"p-3 rounded-xl w-fit mb-4",
									service.isHighlight ? "bg-black/10" : "bg-brand-yellow/10 text-brand-yellow"
								)}>
									<service.icon className="w-6 h-6" />
								</div>

								<div>
									<h3 className={cn(
										"text-2xl font-bold mb-2",
										service.isHighlight ? "text-black" : "text-foreground"
									)}>
										{service.title}
									</h3>
									<p className={cn(
										"text-sm leading-relaxed",
										service.isHighlight ? "text-black/70" : "text-foreground/60"
									)}>
										{service.desc}
									</p>
									{service.isHighlight && (
										<a
											href="https://uploads.strikinglycdn.com/files/a82c4a61-ae12-4b8b-b1e6-7eceaaec3ab5/Brochure%20Online%20Visibility%20Health.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-full hover:bg-black/80 transition-colors"
										>
											Download Brochure
										</a>
									)}
								</div>
							</div>

							{/* Hover Gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
