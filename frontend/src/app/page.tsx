import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceBento } from "@/components/sections/ServiceBento";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import GoogleGeminiEffectDemo from "@/components/sections/GoogleGeminiEffectDemo";
import { TechStack } from "@/components/sections/TechStack";

import { Logos3 } from "@/components/ui/logos3";
import { PrivacyPolicyModal } from "@/components/ui/privacy-policy-modal";
import { partners } from "@/lib/data/partners";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
      <Header />
      <Hero />
      <section className="bg-brand-gray/20">
        <Logos3
          heading="Our Trusted Partners"
          logos={partners.map((partner) => {
            // Default classes for most logos
            let className = "h-12 w-auto object-contain";

            // Custom overrides based on logo characteristics
            if (partner.name === "Improved Corporate Finance") {
              // SVG logo - invert for dark mode
              className = "h-10 w-auto object-contain dark:invert";
            } else if (partner.name === "MET14") {
              // MET14 badge logo
              className = "h-16 w-auto object-contain";
            } else if (partner.name === "Empactify") {
              // Favicon - small icon
              className = "h-10 w-10 object-contain";
            } else if (partner.name === "Dolores Leeuwin") {
              // Lion logo
              className = "h-14 w-auto object-contain";
            } else if (partner.name === "Lingeman") {
              // Lingeman logo
              className = "h-12 w-auto object-contain";
            } else if (partner.name === "The Whitelist") {
              // Whitelist logo
              className = "h-12 w-auto object-contain";
            }

            return {
              id: partner.id,
              description: partner.name,
              image: partner.logo,
              className: className,
            };
          })}
        />

        <div className="container mx-auto px-6 pb-20">
          <div className="flex justify-center -mt-10 relative z-10">
            <Link
              href="/partners"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-black rounded-full font-bold text-lg hover:bg-brand-yellow/90 transition-all hover:scale-105"
            >
              View All Partners
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <ServiceBento />
      <TechStack />
      <CaseStudyPreview />
      <TeamPreview />
      <GoogleGeminiEffectDemo />

      <footer className="py-12 border-t border-foreground/10 bg-background text-foreground/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Address */}
            <div className="text-center md:text-left">
              <h3 className="text-foreground font-bold mb-2">Visit Us</h3>
              <p>47 Mrs Cudjoe Cres</p>
              <p>Takoradi, Ghana</p>
            </div>

            {/* Column 2: Contact */}
            <div className="text-center">
              <h3 className="text-foreground font-bold mb-2">Contact</h3>
              <p>info@tobeworldwide.org</p>
              <p>020 196 5730</p>
            </div>

            {/* Column 3: Links */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <PrivacyPolicyModal />
              <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
              <a href="https://www.linkedin.com/company/webbeezwork/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-foreground/5">
            <p>&copy; 2025 Webbeezwork. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main >
  );
}
