"use client";

import { motion } from "framer-motion";

export function AboutHero() {
	return (
		<>
			{/* Hero */}
			<section className="pt-40 pb-20 px-6">
				<div className="container mx-auto">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl"
					>
						More Than Digital. <br />
						We Are <span className="text-brand-yellow">Ghana's First Social Enterprise</span> in Digital Marketing.
					</motion.h1>
				</div>
			</section>

			{/* Story / Mission */}
			<section className="py-20 px-6 border-t border-foreground/10">
				<div className="container mx-auto flex flex-col lg:flex-row gap-16">
					<div className="lg:w-1/2">
						<div className="sticky top-32">
							<h2 className="text-3xl font-bold mb-6">Our Story</h2>
							<p className="text-foreground/60 text-lg leading-relaxed mb-8">
								Webbeezwork isn't just an agency; it's a movement. Born from the <strong>To Be Worldwide</strong> educational center in Takoradi, we are a team of alumni who grew up together, learned together, and now build together.
							</p>
							<p className="text-foreground/60 text-lg leading-relaxed mb-8">
								We distinguish ourselves by reinvesting our profits back into educational facilities via our foundation, which has supported over <strong>20,000 children</strong> in the last two decades.
							</p>
							<p className="text-foreground/60 text-lg leading-relaxed">
								With training from European experts and a deep commitment to our community, we deliver world-class digital solutions that drive growth for your business while creating a better future for the next generation.
							</p>
						</div>
					</div>
					<div className="lg:w-1/2">
						<div className="h-[600px] rounded-3xl overflow-hidden relative border border-foreground/10">
							<img
								src="/images/about/original.jpg"
								alt="The Webbeezwork Team"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
