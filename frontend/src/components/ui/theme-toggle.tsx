"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Avoid hydration mismatch
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<button className="p-2 rounded-full bg-brand-gray/10 text-foreground opacity-50 cursor-not-allowed">
				<Sun className="h-5 w-5" />
			</button>
		);
	}

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="relative p-2 rounded-full hover:bg-brand-gray/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow"
			aria-label="Toggle theme"
		>
			<div className="relative h-5 w-5">
				<Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</div>
		</button>
	);
}
