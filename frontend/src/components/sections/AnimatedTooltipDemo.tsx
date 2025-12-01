"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { teamMembers } from "@/lib/data/team";

const people = teamMembers.map((member) => ({
	id: member.id,
	name: member.name,
	designation: member.designation,
	image: member.image,
}));

export default function AnimatedTooltipPreview() {
	return (
		<div className="flex flex-row items-center justify-center mb-10 w-full">
			<AnimatedTooltip items={people} />
		</div>
	);
}
