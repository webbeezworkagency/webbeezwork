import { Header } from "@/components/layout/Header";
import DraggableCardDemo from "@/components/sections/DraggableCardDemo";
import { AboutHero } from "@/components/sections/AboutHero";
import fs from "fs";
import path from "path";

export default function AboutPage() {
	// Server-side logic to read images
	const imagesDirectory = path.join(process.cwd(), "public/images/about");
	let images: string[] = [];

	try {
		const filenames = fs.readdirSync(imagesDirectory);
		images = filenames
			.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
			.map((file) => `/images/about/${file}`);
	} catch (error) {
		console.error("Error reading about images directory:", error);
		// Fallback or empty array
	}

	return (
		<main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
			<Header />

			<AboutHero />

			{/* Draggable Process Section - Hidden on mobile */}
			<section className="hidden md:block py-0 bg-background border-t border-foreground/10 overflow-hidden">
				<DraggableCardDemo images={images} />
			</section>

			<footer className="py-12 border-t border-foreground/10 bg-background text-center text-foreground/60">
				<p>&copy; 2025 Webbeezwork. All rights reserved.</p>
			</footer>
		</main>
	);
}
