"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart2, Search } from "lucide-react";
import AnimatedTooltipPreview from "@/components/sections/AnimatedTooltipDemo";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
			{/* Background Glows */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[128px] pointer-events-none" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10 text-center">

				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8"
				>
					<span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
					<span className="text-sm text-foreground/80 font-medium">Accepting New Clients for Q{Math.floor(new Date().getMonth() / 3) + 1}</span>
				</motion.div>

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-[1.1] mb-8"
				>
					We Make Your Business <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">Findable.</span>{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">Clickable.</span>{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">Profitable.</span>
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8 leading-relaxed"
				>
					Webbeezwork is a digital marketing agency and social enterprise in Takoradi, Ghana. We are alumni of the To Be Worldwide educational facilities who have grown up, played, and worked together to help your business succeed online.
				</motion.p>

				{/* Animated Tooltip Preview */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }} // Slightly delayed after subheadline
					className="mb-12 flex justify-center" // Added flex justify-center for centering
				>
					<AnimatedTooltipPreview />
				</motion.div>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Link href="/contact">
						<button className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
							Challenge Us
							<ArrowRight className="w-4 h-4" />
						</button>
					</Link>

					<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-foreground/20 text-foreground font-bold rounded-full hover:bg-foreground/5 transition-all flex items-center justify-center gap-2">
						View Case Studies
					</button>
				</motion.div>

			</div>

			{/* Floating Metrics (Decorative) - Moved to screen edges */}
			<div className="absolute top-1/2 -translate-y-1/2 left-8 hidden 2xl:block">
				<FloatingCard icon={Search} label="SEO Growth" value="+145%" delay={1} />
			</div>
			<div className="absolute top-1/2 -translate-y-1/2 right-8 hidden 2xl:block">
				<FloatingCard icon={BarChart2} label="ROAS" value="4.2x" delay={1.2} />
			</div>
		</section>
	);
}

function FloatingCard({ icon: Icon, label, value, delay }: { icon: any, label: string, value: string, delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay }}
			className="p-4 rounded-2xl bg-brand-gray border border-foreground/10 backdrop-blur-md w-48"
		>
			<div className="flex items-center gap-3 mb-2">
				<div className="p-2 rounded-lg bg-brand-yellow/10 text-brand-yellow">
					<Icon className="w-5 h-5" />
				</div>
				<span className="text-sm text-foreground/60">{label}</span>
			</div>
			<div className="text-2xl font-bold text-foreground">{value}</div>
		</motion.div>
	)
}
