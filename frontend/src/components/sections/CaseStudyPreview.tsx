"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { caseStudies } from "@/lib/data/case-studies";

export function CaseStudyPreview() {
	return (
		<section id="work" className="py-24 bg-background relative overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
							Proven <span className="text-brand-yellow">Results.</span>
						</h2>
						<p className="text-foreground/60 max-w-xl">
							We don't just promise growth. We engineer it. Here is the data to prove it.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<Link href="/case-studies" className="group flex items-center gap-2 text-foreground font-medium hover:text-brand-yellow transition-colors">
							View All Cases
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</Link>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{caseStudies.slice(0, 3).map((item, index) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 100, scale: 0.8 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								type: "spring",
								stiffness: 100,
								damping: 20,
								delay: index * 0.2
							}}
							className="group relative block"
						>
							<Link
								href={item.link || "/case-studies"}
								target={item.link ? "_blank" : undefined}
								rel={item.link ? "noopener noreferrer" : undefined}
							>
								<div className="relative h-[400px] rounded-2xl overflow-hidden mb-6 bg-brand-gray group-hover:scale-[1.02] transition-transform duration-500">
									<Image
										src={item.image}
										alt={item.client}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

									<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
										<div className="flex justify-between items-end">
											<div>
												<div className="text-brand-yellow text-sm font-bold mb-2">{item.service || item.category}</div>
												<h3 className="text-2xl font-bold text-white mb-1">{item.client}</h3>
												<div className="text-4xl font-bold text-white mt-4">{item.result || "Success"}</div>
											</div>
											<div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white group-hover:bg-brand-yellow group-hover:text-black transition-colors">
												<ArrowUpRight className="w-5 h-5" />
											</div>
										</div>
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
