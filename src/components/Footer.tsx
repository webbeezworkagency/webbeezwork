import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8 mt-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/webbeezwork-logo.webp" alt="Webbeezwork Logo" className="h-12 w-auto mb-4 rounded shadow-lg ring-2 ring-white" />
          <p className="text-muted-foreground">
            Creating digital experiences that drive results and inspire growth.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Connect</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 
