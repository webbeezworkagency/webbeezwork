import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import footerpic from "@/assets/footerpic.png"

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
  <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Webbeezwork{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Digital Marketing Agency
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-xl">
            Webbeezwork is a digital marketing agency and social enterprise in Takoradi, Ghana. 
            Our team of experts is dedicated to delivering exceptional results and providing 
            outstanding customer service throughout Africa.
          </p>
          
          <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xl">
            In partnership with <span className="text-primary font-semibold">Nextlane</span>, 
            we deliver comprehensive digital solutions combining local expertise with international standards.
          </p>
          
          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-200"
            >
              Contact us
            </Button>
            
            <div className="flex items-center gap-3 text-white">
              <span className="text-lg">Or</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium text-lg">+233557428199</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Person Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-600 rounded-full opacity-80"></div>
            <div className="absolute top-16 -left-4 w-6 h-6 bg-orange-500 rounded-sm transform rotate-45"></div>
            <div className="absolute -bottom-4 right-8 w-16 h-16 bg-gray-700 rounded-lg"></div>
            
            {/* Main person image */}
            <img 
              src={footerpic}
              alt="Team member" 
              className="w-80 h-80 object-cover rounded-2xl relative z-10"
            />
            
            {/* Dark gradient background circle */}
            <div className="absolute -z-10 -right-8 top-4 w-72 h-72 bg-gradient-to-br from-purple-900 to-gray-900 rounded-full"></div>
          </div>
        </div>
        
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@tobeworldwide.org</p>
              <p>WhatsApp: +233557428199</p>
              <p>Location: Takoradi, Ghana</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-primary transition-colors">About Us</Link>
              <Link to="/portfolio" className="block text-gray-300 hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-colors">Contact</Link>
              <Link to="/online-visibility-check" className="block text-gray-300 hover:text-primary transition-colors">Online Visibility Check</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Services</h3>
            <div className="space-y-2">
              <Link to="/web-development" className="block text-gray-300 hover:text-primary transition-colors">Web Development</Link>
              <Link to="/ui-ux-design" className="block text-gray-300 hover:text-primary transition-colors">UI/UX Design</Link>
              <Link to="/seo" className="block text-gray-300 hover:text-primary transition-colors">SEO</Link>
              <Link to="/google-ads-management" className="block text-gray-300 hover:text-primary transition-colors">Google Ads</Link>
              <Link to="/social-media-management" className="block text-gray-300 hover:text-primary transition-colors">Social Media</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Webbeezwork. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;