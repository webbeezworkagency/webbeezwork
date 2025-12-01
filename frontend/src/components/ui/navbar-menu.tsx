"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
	type: "spring",
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
} as const;

export const MenuItem = ({
	setActive,
	active,
	item,
	href,
	children,
}: {
	setActive: (item: string) => void;
	active: string | null;
	item: string;
	href?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div onMouseEnter={() => setActive(item)} className="relative ">
			{href ? (
				<Link href={href} className="cursor-pointer text-foreground/80 hover:text-brand-yellow transition-colors font-medium text-sm">
					{item}
				</Link>
			) : (
				<motion.p
					transition={{ duration: 0.3 }}
					className="cursor-pointer text-foreground/80 hover:text-brand-yellow transition-colors font-medium text-sm"
				>
					{item}
				</motion.p>
			)}
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === item && (
						<div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4">
							<motion.div
								transition={transition}
								layoutId="active" // layoutId ensures smooth animation
								className="bg-background backdrop-blur-md rounded-2xl overflow-hidden border border-foreground/10 shadow-xl"
							>
								<motion.div
									layout // layout ensures smooth animation
									className="w-max h-full p-4"
								>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	);
};

export const Menu = ({
	setActive,
	children,
}: {
	setActive: (item: string | null) => void;
	children: React.ReactNode;
}) => {
	return (
		<nav
			onMouseLeave={() => setActive(null)} // resets the state
			className="relative rounded-full border border-transparent bg-transparent flex justify-center space-x-8 px-4 py-2"
		>
			{children}
		</nav>
	);
};

export const ProductItem = ({
	title,
	description,
	href,
	src,
}: {
	title: string;
	description: string;
	href: string;
	src: string;
}) => {
	return (
		<Link href={href} className="flex space-x-2">
			<Image
				src={src}
				width={140}
				height={70}
				alt={title}
				className="shrink-0 rounded-md shadow-2xl object-cover"
			/>
			<div>
				<h4 className="text-xl font-bold mb-1 text-foreground">
					{title}
				</h4>
				<p className="text-foreground/60 text-sm max-w-[10rem]">
					{description}
				</p>
			</div>
		</Link>
	);
};

export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className="text-foreground/60 hover:text-brand-yellow transition-colors"
		>
			{children}
		</Link>
	);
};
