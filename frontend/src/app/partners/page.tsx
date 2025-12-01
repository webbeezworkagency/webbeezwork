"use client";

import { Header } from "@/components/layout/Header";
import { partners } from "@/lib/data/partners";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PartnersPage() {
	return (
		<main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
			<Header />

			{/* Hero Section */}
			<section className="pt-40 pb-20 px-6">
				<div className="container mx-auto text-center">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-5xl md:text-7xl font-bold mb-8"
					>
						Our Trusted <span className="text-brand-yellow">Partners.</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-xl text-foreground/60 max-w-2xl mx-auto"
					>
						Collaborating with industry leaders to deliver exceptional value and innovation.
					</motion.p>
				</div>
			</section>

			{/* Partners Grid */}
			<section className="pb-32 px-6">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{partners.map((partner, index) => (
							<motion.div
								key={partner.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative bg-brand-gray rounded-3xl p-8 hover:bg-brand-gray-light transition-colors duration-300 border border-transparent hover:border-brand-yellow/20"
							>
								<div className="h-32 relative mb-8 flex items-center justify-center p-4 bg-white rounded-2xl">
									<Image
										src={partner.logo}
										alt={partner.name}
										fill
										className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
									/>
								</div>

								<h3 className="text-2xl font-bold mb-3 group-hover:text-brand-yellow transition-colors">
									{partner.name}
								</h3>

								<p className="text-foreground/60 mb-8 leading-relaxed">
									{partner.description}
								</p>

								{partner.website && (
									<Link
										href={partner.website}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-brand-yellow transition-colors"
									>
										Visit Website
										<ArrowUpRight className="w-4 h-4" />
									</Link>
								)}
							</motion.div>
						))}
					</div>

					{/* Empty State / Call to Action if needed */}
					{partners.length === 0 && (
						<div className="text-center py-20 bg-brand-gray/50 rounded-3xl border border-dashed border-foreground/20">
							<p className="text-xl text-foreground/40">Partner list is being updated.</p>
						</div>
					)}
				</div>
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
