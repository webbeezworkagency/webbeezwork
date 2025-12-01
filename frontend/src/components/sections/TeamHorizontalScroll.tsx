"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
	name: string;
	role: string;
	bio: string;
	image: any; // Using any to handle both StaticImageData and string
	height?: string;
}

export function TeamHorizontalScroll({ members }: { members: TeamMember[] }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const track = trackRef.current;

		if (!container || !track) return;

		// Only run on mobile/tablet (below 768px)
		const mm = gsap.matchMedia();

		mm.add("(max-width: 767px)", () => {
			// Calculate the total scroll distance needed
			// We want to scroll the width of the track minus the viewport width
			const totalWidth = track.scrollWidth;
			const viewportWidth = window.innerWidth;
			const scrollDistance = totalWidth - viewportWidth + 48; // +48 for padding

			// Create the timeline
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "center center", // Start when container center hits viewport center
					end: `+=${scrollDistance}`, // Scroll distance determines how "long" the scroll feels
					pin: true, // Pin the container
					scrub: 1, // Smooth scrubbing
					anticipatePin: 1,
					invalidateOnRefresh: true,
				},
			});

			// Animate the track to the left
			tl.to(track, {
				x: -scrollDistance,
				ease: "none",
			});
		});

		return () => {
			mm.revert(); // Clean up GSAP context
		};
	}, [members]);

	return (
		<>
			{/* Mobile: Horizontal Scroll Trigger Container */}
			<div
				ref={containerRef}
				className="md:hidden w-full h-screen flex items-center overflow-hidden relative"
			>
				<div
					ref={trackRef}
					className="flex gap-6 px-6 w-max"
				>
					{members.map((member, index) => (
						<div
							key={index}
							className={`relative w-[85vw] h-[60vh] shrink-0 rounded-2xl overflow-hidden bg-brand-gray shadow-lg`}
						>
							<Image
								src={member.image}
								alt={member.name}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

							<div className="absolute bottom-0 left-0 w-full p-6 bg-black/60 backdrop-blur-md border-t border-white/10">
								<h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
								<div className="text-brand-yellow text-sm uppercase tracking-wider mb-2">{member.role}</div>
								<p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
								<div className="flex gap-2">
									<ArrowUpRight className="w-5 h-5 text-brand-yellow" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Desktop: Standard Wave Layout (Hidden on Mobile) */}
			<div className="hidden md:flex flex-row items-end justify-center gap-6 h-[500px]">
				{members.map((member, index) => (
					<div
						key={index}
						className={`relative w-1/5 group ${member.height} rounded-2xl overflow-hidden bg-brand-gray shadow-lg hover:shadow-brand-yellow/20 transition-all duration-500 hover:-translate-y-2`}
					>
						<Image
							src={member.image}
							alt={member.name}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

						<div className="absolute bottom-0 left-0 w-full p-6 bg-black/60 backdrop-blur-md border-t border-white/10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
							<h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">{member.name}</h3>
							<div className="text-gray-400 text-xs uppercase tracking-wider mb-2">{member.role}</div>

							<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
								<p className="text-gray-300 text-xs leading-relaxed mb-4">{member.bio}</p>
								<div className="flex gap-2">
									<ArrowUpRight className="w-4 h-4 text-brand-yellow" />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
