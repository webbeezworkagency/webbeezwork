"use client";
import React from "react";
import {
	DraggableCardBody,
	DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

export default function DraggableCardDemo({ images = [] }: { images?: string[] }) {
	const positions = [
		"absolute top-10 left-[20%] rotate-[-5deg]",
		"absolute top-40 left-[25%] rotate-[-7deg]",
		"absolute top-5 left-[40%] rotate-[8deg]",
		"absolute top-32 left-[55%] rotate-[10deg]",
		"absolute top-20 right-[35%] rotate-[2deg]",
		"absolute top-24 left-[45%] rotate-[-7deg]",
		"absolute top-8 left-[30%] rotate-[4deg]",
		"absolute top-16 right-[20%] rotate-[-3deg]",
		"absolute top-36 right-[45%] rotate-[6deg]",
	];

	// If no images provided, use defaults (or empty)
	const displayImages = images.length > 0 ? images : [
		"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2664&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
	];

	const items = displayImages.map((img, index) => ({
		title: "Webbeezwork", // Generic title or could be derived from filename
		image: img,
		className: positions[index % positions.length],
	}));

	return (
		<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip bg-background">
			<p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-foreground/40 md:text-4xl z-0">
				Drag to explore our <span className="text-brand-yellow">Activity Cards</span>.
			</p>
			{items.map((item, index) => (
				<DraggableCardBody key={index} className={`${item.className} bg-card border border-foreground/10`}>
					<div className="relative h-80 w-full">
						<Image
							src={item.image}
							alt={item.title}
							fill
							className="pointer-events-none relative z-10 object-cover rounded-md"
						/>
					</div>
				</DraggableCardBody>
			))}
		</DraggableCardContainer>
	);
}
