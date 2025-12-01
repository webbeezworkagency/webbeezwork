import { servicesData } from "@/data/services";
import { Header } from "@/components/layout/Header";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Correctly type the props for Next.js 15+ dynamic routes
type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return servicesData.map((service) => ({
		slug: service.slug,
	}));
}

export default async function ServiceDetail({ params }: Props) {
	const { slug } = await params;
	const service = servicesData.find((s) => s.slug === slug);

	if (!service) {
		notFound();
	}

	return (
		<main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
			<Header />

			{/* Hero */}
			<section className="pt-40 pb-20 px-6 relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-gray/50 to-background z-0" />
				<div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
					<div className="lg:w-1/2">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow mb-8">
							<service.icon className="w-4 h-4" />
							<span className="text-sm font-bold uppercase tracking-wider">{service.title}</span>
						</div>

						<h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
							{service.shortDesc}
						</h1>
						<p className="text-xl text-foreground/60 max-w-2xl mb-12 leading-relaxed">
							{service.fullDesc}
						</p>

						<Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105">
							Get Started
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
					<div className="lg:w-1/2 flex justify-center">
						<div className="relative w-full max-w-[600px] bg-white rounded-3xl p-6 shadow-2xl animate-float dark:shadow-brand-yellow/5">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={service.image}
								alt={service.title}
								className="object-contain w-full h-auto rounded-xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* KPIs */}
			<section className="py-20 border-y border-foreground/5 bg-brand-gray/20">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{service.kpis.map((kpi, index) => (
							<div key={index} className="text-center">
								<div className="text-5xl md:text-6xl font-bold text-foreground mb-2">{kpi.value}</div>
								<div className="text-foreground/60 uppercase tracking-widest text-sm">{kpi.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-24 px-6">
				<div className="container mx-auto flex flex-col md:flex-row gap-16">
					<div className="md:w-1/2">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">What We Deliver</h2>
						<p className="text-foreground/60 text-lg leading-relaxed">
							Our process is transparent, data-driven, and designed for maximum impact. We don't hide behind jargon; we deliver results you can see.
						</p>
					</div>
					<div className="md:w-1/2">
						<ul className="space-y-6">
							{service.features.map((feature, index) => (
								<li key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-brand-gray border border-foreground/5 hover:border-brand-yellow/30 transition-colors">
									<CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" />
									<span className="text-lg font-medium">{feature}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
