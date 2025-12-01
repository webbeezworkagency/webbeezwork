import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceBento } from "@/components/sections/ServiceBento";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import GoogleGeminiEffectDemo from "@/components/sections/GoogleGeminiEffectDemo";
import { TechStack } from "@/components/sections/TechStack";

import { Logos3 } from "@/components/ui/logos3";
import { PrivacyPolicyModal } from "@/components/ui/privacy-policy-modal";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-brand-yellow selection:text-brand-black">
      <Header />
      <Hero />
      {/* <Logos3
        heading="Trusted by Innovative Companies"
        logos={[
          {
            id: "logo-1",
            description: "Astro",
            image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-2",
            description: "Figma",
            image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-3",
            description: "Next.js",
            image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-4",
            description: "React",
            image: "https://www.shadcnblocks.com/images/block/logos/react.png",
            className: "h-7 w-auto",
          },
          {
            id: "logo-5",
            description: "shadcn/ui",
            image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-6",
            description: "Supabase",
            image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-7",
            description: "Tailwind CSS",
            image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
            className: "h-4 w-auto",
          },
          {
            id: "logo-8",
            description: "Vercel",
            image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
            className: "h-7 w-auto",
          },
        ]}
      /> */}
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
    </main>
  );
}
