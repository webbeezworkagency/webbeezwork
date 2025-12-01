"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";

export default function ServicesPage() {
	return (
		<main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
			<Header />

			{/* Hero */}
			<section className="pt-40 pb-20 px-6 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 blur-[150px] pointer-events-none" />

				<div className="container mx-auto relative z-10">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-5xl md:text-7xl font-bold mb-8"
					>
						Our <span className="text-brand-yellow">Expertise.</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-xl text-foreground/60 max-w-2xl"
					>
						A comprehensive suite of digital growth services designed to scale your business from every angle.
					</motion.p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="pb-32 px-6">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					{servicesData.map((service, index) => (
						<Link href={`/services/${service.slug}`} key={service.id}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative p-10 rounded-3xl bg-brand-gray border border-foreground/5 hover:border-brand-yellow/50 transition-all hover:-translate-y-2 duration-300 h-full flex flex-col justify-between"
							>
								<div>
									<div className="p-4 rounded-xl bg-brand-yellow/10 text-brand-yellow w-fit mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
										<service.icon className="w-8 h-8" />
									</div>
									<h2 className="text-3xl font-bold mb-4 group-hover:text-brand-yellow transition-colors">{service.title}</h2>
									<p className="text-foreground/60 mb-8 leading-relaxed">{service.shortDesc}</p>
								</div>

								<div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand-yellow transition-colors">
									Explore Service
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</div>
							</motion.div>
						</Link>
					))}
				</div>
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
