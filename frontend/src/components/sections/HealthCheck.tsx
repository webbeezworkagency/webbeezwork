"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function HealthCheck() {
	const [url, setUrl] = useState("");
	const [isAnalyzing, setIsAnalyzing] = useState(false);
	const [showResults, setShowResults] = useState(false);

	const handleAnalyze = (e: React.FormEvent) => {
		e.preventDefault();
		if (!url) return;
		setIsAnalyzing(true);
		setShowResults(false);
		// Simulate analysis
		setTimeout(() => {
			setIsAnalyzing(false);
			setShowResults(true);
		}, 2000);
	};

	return (
		<section className="py-24 bg-brand-gray relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#FACC15 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center mb-12">
					<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
						How Visible Is Your Business?
					</h2>
					<p className="text-foreground/60 text-lg mb-8">
						Get an instant AI-powered analysis of your SEO, Ads, and Local presence.
					</p>

					<form onSubmit={handleAnalyze} className="relative max-w-lg mx-auto">
						<input
							type="text"
							placeholder="Enter your website URL..."
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							className="w-full px-6 py-4 rounded-full bg-background border border-foreground/10 text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
						/>
						<button
							type="submit"
							disabled={isAnalyzing}
							className="absolute right-2 top-2 bottom-2 px-6 bg-brand-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
						>
							{isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Analyze"}
						</button>
					</form>
				</div>

				<AnimatePresence>
					{showResults && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
						>
							<ScoreCard label="SEO Health" score={72} />
							<ScoreCard label="Ads Readiness" score={45} />
							<ScoreCard label="Local Visibility" score={88} />
							<ScoreCard label="Content Strength" score={60} />
						</motion.div>
					)}
				</AnimatePresence>

				{showResults && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
						className="mt-12 text-center"
					>
						<button className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 mx-auto">
							Get Full Audit PDF
							<ArrowRight className="w-4 h-4" />
						</button>
					</motion.div>
				)}

			</div>
		</section>
	);
}

function ScoreCard({ label, score }: { label: string, score: number }) {
	return (
		<div className="p-6 rounded-2xl bg-background border border-foreground/10">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-foreground/60 font-medium">{label}</h3>
				<CheckCircle2 className="w-5 h-5 text-brand-yellow opacity-50" />
			</div>
			<div className="relative h-2 bg-foreground/10 rounded-full mb-4 overflow-hidden">
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: `${score}%` }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute top-0 left-0 h-full bg-brand-yellow"
				/>
			</div>
			<div className="flex items-end gap-2">
				<span className="text-4xl font-bold text-foreground">{score}</span>
				<span className="text-sm text-foreground/40 mb-1">/ 100</span>
			</div>
		</div>
	);
}
