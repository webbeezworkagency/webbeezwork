import { Button } from "@/components/ui/button";
import footerpic from "@/assets/footerpic.png"
const Footer = () => (
  <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ghanaian Digital Marketing{" "}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Agency
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed diam nonumy eirmod tempor Lorem ipsum dolor sit 
          amet consectetur adipiscing elit
        </p>
        
        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button className="bg-primary hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-200">
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
              <span className="font-medium text-lg">+0 123 456-789</span>
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
          
          {/* Main person image - you'll replace this */}
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
  </footer>
);

export default Footer;