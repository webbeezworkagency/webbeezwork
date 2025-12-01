"use client";

import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/lib/data/team";
import { TeamHorizontalScroll } from "@/components/sections/TeamHorizontalScroll";

const teamTop = teamMembers.slice(0, 2);
const teamBottom = teamMembers.slice(2);

export default function TeamPage() {
	return (
		<main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
			<Header />

			<section className="pt-40 pb-20 px-6 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-5xl md:text-7xl font-bold mb-8"
				>
					The <span className="text-brand-yellow">Collective.</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="text-xl text-foreground/60 max-w-2xl mx-auto"
				>
					We are a tight-knit team of obsessives. No account managers, just experts working directly on your growth.
				</motion.p>
			</section>

			<section className="pb-32 px-6">
				<div className="container mx-auto max-w-6xl">

					{/* Top Row: 2 Members */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
						{teamTop.map((member, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative"
							>
								<div className="h-[500px] rounded-3xl overflow-hidden bg-brand-gray mb-6 relative shadow-2xl shadow-black/50 group-hover:shadow-brand-yellow/10 transition-all duration-500">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

									{/* Content Overlay */}
									<div className="absolute bottom-0 left-0 w-full p-8 bg-black/60 backdrop-blur-md border-t border-white/10 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
										<h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
										<div className="text-brand-yellow font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</div>
										<p className="text-gray-300 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{member.bio}</p>

										<div className="flex gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
											<button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-brand-yellow hover:text-black transition-colors">
												<Linkedin className="w-5 h-5" />
											</button>
											<button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-brand-yellow hover:text-black transition-colors">
												<Twitter className="w-5 h-5" />
											</button>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Bottom Row: 5 Members with Height Curve */}
					<TeamHorizontalScroll members={teamBottom} />

				</div>
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
