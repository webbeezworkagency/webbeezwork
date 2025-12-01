"use client";

import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
	return (
		<main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
			<Header />

			<section className="pt-40 pb-20 px-6">
				<div className="container mx-auto flex flex-col lg:flex-row gap-16">

					{/* Contact Info */}
					<div className="lg:w-1/2">
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-5xl md:text-7xl font-bold mb-8"
						>
							Let's Talk <span className="text-brand-yellow">Growth.</span>
						</motion.h1>
						<p className="text-xl text-foreground/60 mb-12 max-w-lg">
							Ready to dominate your market? Fill out the form or reach out directly. We usually respond within 2 hours.
						</p>

						<div className="space-y-8">
							<div className="flex items-start gap-6">
								<div className="p-4 rounded-full bg-brand-gray text-brand-yellow">
									<Mail className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold mb-1">Email Us</h3>
									<p className="text-foreground/60">info@tobeworldwide.org</p>
								</div>
							</div>
							<div className="flex items-start gap-6">
								<div className="p-4 rounded-full bg-brand-gray text-brand-yellow">
									<Phone className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold mb-1">Call Us</h3>
									<p className="text-foreground/60">020 196 5730</p>
								</div>
							</div>
							<div className="flex items-start gap-6">
								<div className="p-4 rounded-full bg-brand-gray text-brand-yellow">
									<MapPin className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold mb-1">Visit Us</h3>
									<p className="text-foreground/60">47 Mrs Cudjoe Cres, Takoradi, Ghana</p>
								</div>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className="lg:w-1/2">
						<motion.form
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="p-8 md:p-12 rounded-3xl bg-brand-gray border border-foreground/5"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div className="space-y-2">
									<label className="text-sm font-bold text-foreground/60">Name</label>
									<input type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="John Doe" />
								</div>
								<div className="space-y-2">
									<label className="text-sm font-bold text-foreground/60">Email</label>
									<input type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="john@company.com" />
								</div>
							</div>

							<div className="space-y-2 mb-6">
								<label className="text-sm font-bold text-foreground/60">Service Interest</label>
								<select className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-brand-yellow focus:outline-none transition-colors text-foreground/60">
									<option>SEO Audit</option>
									<option>Google Ads</option>
									<option>Web Design</option>
									<option>Other</option>
								</select>
							</div>

							<div className="space-y-2 mb-8">
								<label className="text-sm font-bold text-foreground/60">Message</label>
								<textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
							</div>

							<button className="w-full py-4 bg-brand-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-[1.02]">
								Send Message
							</button>
						</motion.form>
					</div>

				</div>
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
