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

			<section className="pt-24 pb-0 md:pt-32 md:pb-6 px-0 text-center">
			</section>

			<section className="pb-20 md:pb-32 px-0 md:px-6">
				<div className="container mx-auto max-w-6xl">

					{/* Team Group Photo Section */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mb-12 md:mb-24 relative"
					>
						{/* Mobile Text (Visible only on mobile) */}
						<div className="md:hidden mb-6 px-6">
							<h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">The Force Behind the Vision</h2>
							<p className="text-foreground/80 text-lg leading-relaxed">
								United by creativity, driven by impact. We are the ones who make it happen.
							</p>
						</div>

						{/* Image Container */}
						<div className="relative rounded-none md:rounded-[2.5rem] overflow-hidden border-y md:border border-border/10 shadow-2xl shadow-brand-yellow/5 group w-full">
							<div className="absolute inset-0 bg-brand-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay hidden md:block" />

							<div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
								<Image
									src="/images/team-group.jpg"
									alt="Webbeezwork Team Group"
									fill
									priority
									quality={100}
									unoptimized
									className="object-cover transition-transform duration-1000 group-hover:scale-105"
								/>
							</div>

							{/* Desktop Cinematic Overlay (Hidden on mobile) */}
							<div className="hidden md:absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />

							{/* Desktop Caption (Hidden on mobile) */}
							<div className="hidden md:flex absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 flex-col md:flex-row items-end justify-between gap-6 pointer-events-none">
								<div>
									<h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">The Force Behind the Vision</h2>
									<p className="text-white/80 text-lg md:text-xl max-w-xl">
										United by creativity, driven by impact. We are the ones who make it happen.
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* All Members in a Uniform Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 max-w-7xl mx-auto px-6 md:px-0">
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative"
							>
								<div className="h-[450px] rounded-3xl overflow-hidden bg-brand-gray mb-6 relative shadow-xl hover:shadow-2xl hover:shadow-brand-yellow/10 transition-all duration-500">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

									{/* Content Overlay */}
									<div className="absolute bottom-0 left-0 w-full p-6 bg-black/60 backdrop-blur-md border-t border-white/10 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
										<h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
										<div className="text-brand-yellow font-medium text-xs mb-3 uppercase tracking-wider">{member.role}</div>
										<p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">{member.bio}</p>

										<div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
											{member.linkedin ? (
												<a
													href={member.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-brand-yellow hover:text-black transition-colors"
												>
													<Linkedin className="w-4 h-4" />
												</a>
											) : (
												<button className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-brand-yellow hover:text-black transition-colors">
													<Linkedin className="w-4 h-4" />
												</button>
											)}
											<button className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-brand-yellow hover:text-black transition-colors">
												<Twitter className="w-4 h-4" />
											</button>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>

				</div>
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
