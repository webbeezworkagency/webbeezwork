"use client";

import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const slugs = [
	"google",
	"googleads",
	"googleanalytics",
	"googlesearchconsole",
	"googlemybusiness",
	"facebook",
	"instagram",
	"linkedin",
	"tiktok",
	"x",
	"youtube",
	"wordpress",
	"elementor",
	"mailchimp",
	"hubspot",
	"salesforce",
	"semrush",
	"ahrefs",
	"moz",
	"canva",
	"adobephotoshop",
	"adobeillustrator",
	"slack",
	"trello",
	"asana",
	"zoom",
	"zapier",
	"whatsapp",
	"messenger",
	"openai",
];

export function TechStack() {
	return (
		<section className="py-20 bg-background overflow-hidden border-t border-foreground/5">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="md:w-1/2">
						<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
							Our <span className="text-brand-yellow">Growth Stack.</span>
						</h2>
						<p className="text-foreground/60 text-lg leading-relaxed mb-8">
							We utilize industry-leading platforms and tools to drive traffic, analyze data, and convert leads. From advanced SEO analytics to creative design suites, we have everything needed to scale your brand.
						</p>
					</div>
					<div className="md:w-1/2 flex items-center justify-center">
						<div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-foreground/10 bg-background px-20 pb-20 pt-8 shadow-2xl">
							<IconCloud iconSlugs={slugs} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
