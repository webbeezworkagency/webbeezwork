"use client";

import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedTestimonialsDemo from "@/components/sections/AnimatedTestimonialsDemo";

import { caseStudies } from "@/lib/data/case-studies";

export default function CaseStudiesPage() {
	return (
		<main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
			<Header />

			<section className="pt-40 pb-20 px-6">
				<div className="container mx-auto">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-5xl md:text-7xl font-bold mb-8"
					>
						Proven <span className="text-brand-yellow">Impact.</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-xl text-foreground/60 max-w-2xl"
					>
						Real results for real businesses. We let the data do the talking.
					</motion.p>
				</div>
			</section>

			<section className="pb-32 px-6">
				<div className="container mx-auto grid grid-cols-1 gap-16">
					{caseStudies.map((study, index) => (
						<motion.div
							key={study.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-foreground/10 pb-16 last:border-0"
						>
							<div className="order-2 lg:order-1">
								<div className="text-brand-yellow font-bold mb-4 uppercase tracking-wider text-sm">{study.category}</div>
								<h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-foreground/80 transition-colors">{study.client}</h2>
								<p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-xl">
									{study.description}
								</p>

								<div className="grid grid-cols-2 gap-8 mb-10">
									{study.stats.map((stat, i) => (
										<div key={i}>
											<div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
											<div className="text-foreground/60 text-sm uppercase tracking-widest">{stat.label}</div>
										</div>
									))}
								</div>

								<button className="flex items-center gap-2 text-foreground font-bold hover:text-brand-yellow transition-colors group/btn">
									View Case Study
									<ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
								</button>
							</div>

							<div className="order-1 lg:order-2 relative h-[400px] rounded-3xl overflow-hidden bg-brand-gray border border-foreground/10">
								<img
									src={study.image}
									alt={study.client}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			<section className="py-24 bg-background border-t border-foreground/10">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
						What Our <span className="text-brand-yellow">Clients</span> Say.
					</h2>
					<AnimatedTestimonialsDemo />
				</div>
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
