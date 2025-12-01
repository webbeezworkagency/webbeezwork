"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function TeamPreview() {
	return (
		<section className="py-24 bg-background border-t border-foreground/5">
			<div className="container mx-auto px-6">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="lg:w-1/2"
					>
						<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
							Meet the <span className="text-brand-yellow">Architects</span> of Your Growth.
						</h2>
						<p className="text-foreground/60 text-lg mb-8 leading-relaxed">
							We are a team of data scientists, creative directors, and technical SEOs obsessed with one thing: performance. No juniors, no outsourcing—just experts.
						</p>

						<Link href="/team" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-all">
							Meet the Team
							<ArrowRight className="w-4 h-4" />
						</Link>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
					>
							<motion.div
							initial={{ opacity: 0, scale: 0.8, y: 50 }}
							whileInView={{ opacity: 1, scale: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ type: "spring", stiffness: 100, damping: 20 }}
							className="h-64 rounded-2xl overflow-hidden border border-foreground/5 hover:border-brand-yellow/50 transition-colors relative"
						>
							<Image
								src="/images/Abekah.jpg"
								alt="Isaac Abekah - Team Member"
								fill
								className="object-cover"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: 50 }}
							whileInView={{ opacity: 1, scale: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
							className="h-64 rounded-2xl overflow-hidden border border-foreground/5 hover:border-brand-yellow/50 transition-colors mt-12 relative"
						>
							<Image
								src="/images/Munira.jpg"
								alt="Munira - Team Member"
								fill
								className="object-cover"
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
