"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MenuItem, HoveredLink, ProductItem } from "@/components/ui/navbar-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { caseStudies } from "@/lib/data/case-studies";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState<string | null>(null);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-[#ffed00] border-b border-black/10">
			<div className="container mx-auto px-6 h-20 flex items-center justify-between">
				<Link href="/" className="block relative w-32 md:w-40 h-10 md:h-12 z-50">
					<Image
						src="/webbeezwork-logo.webp"
						alt="Webbeezwork"
						fill
						className="object-contain object-left"
						priority
					/>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center justify-center">
					<Menu setActive={setActive}>
						<MenuItem setActive={setActive} active={active} item="Services" href="/services" className="text-black/80 hover:text-white">
							<div className="flex flex-col space-y-4 text-sm">
								<HoveredLink href="/services/seo">SEO Optimization</HoveredLink>
								<HoveredLink href="/services/google-ads">Google Ads (SEA)</HoveredLink>
								<HoveredLink href="/services/web-design">Web Design & Dev</HoveredLink>
								<HoveredLink href="/services/gmb-optimization">GMB Optimization</HoveredLink>
							</div>
						</MenuItem>
						<MenuItem setActive={setActive} active={active} item="Work" href="/case-studies" className="text-black/80 hover:text-white">
							<div className="text-sm grid grid-cols-2 gap-10 p-4">
								{caseStudies.map((study) => (
									<ProductItem
										key={study.id}
										title={study.client}
										href="/case-studies"
										src={study.image}
										description={study.result || study.category}
									/>
								))}
							</div>
						</MenuItem>
						<Link href="/team" className="text-black/80 hover:text-white transition-colors font-medium text-sm pt-0.5">Team</Link>
						<Link href="/about" className="text-black/80 hover:text-white transition-colors font-medium text-sm pt-0.5">About</Link>
					</Menu>
				</div>



				<div className="flex items-center gap-3 md:gap-4">
					<div className="hidden md:block text-black hover:text-black/70 transition-colors">
						<ThemeToggle />
					</div>
					<a
						href="https://wa.me/233551234567"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden md:inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-[#25D366] text-white font-bold text-xs md:text-sm rounded-full hover:bg-[#20bd5a] transition-all transform hover:scale-105"
					>
						<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
						</svg>
						Contact Us
					</a>

					{/* Mobile Menu Toggle */}
					<div className="flex items-center gap-2 md:hidden">
						<div className="text-black hover:text-black/70 transition-colors">
							<ThemeToggle />
						</div>
						<button
							onClick={toggleMenu}
							className="p-2 text-black z-[70] relative hover:text-black/70 transition-colors"
						>
							{isOpen ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={toggleMenu}
						className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-[60] flex flex-col items-center justify-center md:hidden h-screen w-screen"
					>
						<nav
							onClick={(e) => e.stopPropagation()}
							className="flex flex-col items-center gap-8"
						>
							<Link href="/services" onClick={toggleMenu} className="text-3xl font-bold text-foreground hover:text-brand-yellow transition-colors">Services</Link>
							<Link href="/case-studies" onClick={toggleMenu} className="text-3xl font-bold text-foreground hover:text-brand-yellow transition-colors">Work</Link>
							<Link href="/team" onClick={toggleMenu} className="text-3xl font-bold text-foreground hover:text-brand-yellow transition-colors">Team</Link>
							<Link href="/about" onClick={toggleMenu} className="text-3xl font-bold text-foreground hover:text-brand-yellow transition-colors">About</Link>

							<div className="w-16 h-[1px] bg-foreground/10 my-4" />

							<a
								href="https://wa.me/233551234567"
								target="_blank"
								rel="noopener noreferrer"
								onClick={toggleMenu}
								className="flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white text-xl font-bold rounded-full hover:bg-[#20bd5a] transition-all"
							>
								<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
								</svg>
								Contact Us
							</a>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
