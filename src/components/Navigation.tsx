import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null); // Changed to HTMLElement

  const navItems = [
    { name: "Home", path: "/" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "Web Development", path: "/web-development" },
    { name: "SEO", path: "/seo" },
    { name: "SEA", path: "/sea" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  useEffect(() => {
    if (!isOpen) return;
    
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                Get Started
              </Button>
            </Link>
            <a
              href="https://wa.me/233501234567"
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
              href="https://wa.me/233501234567"
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

      {/* Mobile Navigation - Removed ref from here */}
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