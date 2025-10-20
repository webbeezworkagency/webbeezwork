import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null); // Changed to HTMLElement

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const serviceItems = [
    { name: "Web Development", path: "/web-development" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "SEO", path: "/seo" },
    { name: "Google Ads Management", path: "/google-ads-management" },
    { name: "Social Media Management", path: "/social-media-management" },
    { name: "Google My Business", path: "/google-my-business" },
    { name: "Content Creation", path: "/content-creation" },
    { name: "Online Visibility Check", path: "/online-visibility-check" },
    { name: "Training Session", path: "/training-session" },
    { name: "Partnerships", path: "/partnerships" },
  ];

  useEffect(() => {
    if (!isOpen) return;
    
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav 
      ref={navRef} // Attached to entire navbar
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/webbeezwork-logo.webp"
              alt="Webbeezwork Logo"
              className="h-10 w-auto rounded shadow-lg ring-2 ring-white"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-md shadow-lg z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="py-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-gray-800 ${
                          location.pathname === item.path
                            ? "text-primary bg-gray-50"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                Get Started
              </Button>
            </Link>
            <a
              href="https://wa.me/233557428199"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white text-sm">
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Toggle and WhatsApp Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="https://wa.me/233557428199"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Added stopPropagation
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1">
                WhatsApp
              </Button>
            </a>
            {isOpen ? (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close Menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                  setServicesOpen(false);
                }}
              >
                <X className="h-6 w-6" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open Menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              >
                <Menu className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 bg-background border-b border-border space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-colors px-3 py-2 rounded hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Services */}
          <div>
            <button
              className="flex items-center justify-between w-full text-base font-medium transition-colors px-3 py-2 rounded hover:text-primary text-muted-foreground"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-6 space-y-1">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setServicesOpen(false);
                    }}
                    className={`block text-sm transition-colors px-3 py-2 rounded hover:text-primary ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="pt-2 flex flex-col gap-2">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;