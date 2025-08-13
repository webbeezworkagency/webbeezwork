import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/homehero.png"
import nextlane from "@/assets/nextlane.png"
import sapana from "@/assets/sapana.png"
import tobe from "@/assets/tobo.png"
import slimfile from "@/assets/slimfile.png"
import linkedin from "@/assets/linkedin.png"
import webIcon from "@/assets/webIcon.svg"
import videoicon from "@/assets/videoIcon.svg"
import contenticon from "@/assets/contentIcon.svg"
import socialicon from "@/assets/socialIcon.svg"
import clickicon from "@/assets/clickicon.svg"
import searchicon from "@/assets/searchicon.svg"
import whychoose from "@/assets/whychoose.png"
import growth from "@/assets/growth.svg"
import uspa from "@/assets/U-SPA.png"
import payperclick from "@/assets/PayperClick.png"





const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChallengeUsClick = () => {
    navigate('/contact');
  };

  const logos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  // Remove useRef and useEffect for marquee

  return (
    <div className="min-h-screen bg-black text-foreground">
      {/* Header / Hero Section */}
<section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-16 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
  <div className="absolute bottom-20 left-8 w-8 h-8 bg-red-500 rounded transform rotate-45"></div>
  <div className="absolute bottom-32 right-12 w-6 h-6 bg-yellow-400 rounded transform rotate-45"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex-1 md:pl-16">
        {/* Updated typography to match development page style */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Ghanaian Digital
          <br />

            Marketing 
                                      <span className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 bg-clip-text text-transparent ml-1">

            Agency
          </span>
        
        </h1>
        
        {/* Updated paragraph styling */}
        <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Tailored strategies. Measurable results. Your success, amplified through 
          data-driven digital marketing solutions.
        </p>
        
        {/* Updated button styling to match development page */}
        <div className="flex gap-4">
          <button className="bg-primary hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
            Challenge Us
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
            View Our Work
          </button>
        </div>
      </div>
      
      <div className="relative">
        {/* Decorative elements around the image */}
        <div className="absolute -top-8 -left-8 w-20 h-20 bg-yellow-500 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-8 flex space-x-1">
          <div className="w-2 h-8 bg-yellow-400 rounded"></div>
          <div className="w-2 h-6 bg-orange-400 rounded"></div>
          <div className="w-2 h-4 bg-orange-400 rounded"></div>
        </div>

        <div className="w-[500px] h-[500px] flex items-center justify-center mx-auto relative">
          <img 
            src={heroImage} 
            alt="Professional Digital Marketing Agency" 
            className="object-cover w-full h-full relative z-10 rounded-2xl" 
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Partners Section */}
      <section className="pt-0 pb-12 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-12">Partners</h3>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-8 items-center">
              {/* First set of partners */}
              <div className="bg-black rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={nextlane} alt="nextlane" className="h-full w-auto object-contain" />
              </div>
              <div className="bg-[#232323] rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={sapana} alt="Elephant" className="h-full w-auto object-contain" />
              </div>
              <div className="bg-[#fff35c] rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={tobe} alt="ToBee" className="w-auto object-contain" />
              </div>
              <div className="bg-transparent rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={slimfile} alt="Arrow" className="w-auto object-contain" />
              </div>
              <div className="bg-[#232323] rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={linkedin} alt="LinkedIn" className=" w-auto object-contain" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="bg-black rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={nextlane} alt="nextlane" className="h-full w-auto object-contain" />
              </div>
              <div className="bg-[#232323] rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={sapana} alt="Elephant" className="h-full w-auto object-contain" />
              </div>
              <div className="bg-[#fff35c] rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={tobe} alt="ToBee" className="w-auto object-contain" />
              </div>
              <div className="bg-transparent rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={slimfile} alt="Arrow" className="w-auto object-contain" />
              </div>
              <div className="bg-[#232323] rounded w-[180px] md:w-[210px] h-[100px] md:h-[110px] flex items-center justify-center flex-shrink-0">
                <img src={linkedin} alt="LinkedIn" className=" w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 px-4 border-b border-border reveal-on-scroll bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Top row - Title and description first on mobile, then 2 service cards below on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Right side - Title and description - on top for mobile, right for lg */}
            <div className="lg:col-span-1 order-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-yellow-300 font-rubik">Our Digital Marketing Expertise</h2>
              <p className="text-gray-400 text-base lg:text-lg font-rubik">
                Our team of certified digital marketing specialists delivers comprehensive solutions that drive measurable growth across all digital channels for businesses throughout Ghana and West Africa.
              </p>
            </div>
            {/* Left side - First 2 service cards - below on mobile, left for lg */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-none">
              {/* Search Engine Optimization */}
              <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors h-full flex flex-col min-h-[160px]">
                <div className="w-12 h-12 mb-4 text-yellow-400 flex-shrink-0">
                  <img src={searchicon} alt="Search" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-white text-lg font-semibold flex-grow">Search Engine Optimization</h3>
              </div>

              {/* Website design & Development */}
              <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors h-full flex flex-col min-h-[160px]">
                <div className="w-12 h-12 mb-4 text-yellow-400 flex-shrink-0">
                  <img src={webIcon} alt="Web" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-white text-lg font-semibold flex-grow">Website design & Development</h3>
              </div>
            </div>
          </div>

          {/* Bottom row - Remaining 4 service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Video editing & Production */}
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors h-full flex flex-col min-h-[160px]">
              <div className="w-12 mb-4 text-yellow-400 flex-shrink-0">
                <img src={videoicon} alt="Video" className="w-full" />
              </div>
              <h3 className="text-white py-12 text-lg font-semibold flex-grow">Video editing & Production</h3>
            </div>

            {/* Content Writing */}
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors h-full flex flex-col min-h-[160px]">
              <div className="w-12 mb-4 text-yellow-400 flex-shrink-0">
                <img src={contenticon} alt="Content" className="w-full" />
              </div>
              <h3 className="text-white text-lg py-9 font-semibold flex-grow">Content Writing</h3>
            </div>

            {/* Social media Marketing */}
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors h-full flex flex-col min-h-[160px]">
              <div className="w-12 mb-4 text-yellow-400 flex-shrink-0">
                <img src={socialicon} alt="Social" className="w-full" />
              </div>
              <h3 className="text-white text-lg py-9 font-semibold flex-grow">Social media Marketing</h3>
            </div>

            {/* Pay per click (PPC) */}
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors h-full flex flex-col min-h-[160px]">
              <div className="w-12 mb-4 text-yellow-400 flex-shrink-0">
                <img src={clickicon} alt="Click" className="w-full" />
              </div>
              <h3 className="text-white text-lg py-5 font-semibold flex-grow">Pay per click (PPC)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-black border-b border-border reveal-on-scroll">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex justify-center relative">
            {/* Main person image - you'll replace this */}
            <div className="relative">
              <img
                src={whychoose}
                alt="Team member pointing to success metrics"
                className=" rounded-2xl object-cover"
              />



              {/* Customer avatars overlay */}
              <div className="absolute -top-4 -right-8 bg-white rounded-full shadow-lg p-2 flex items-center gap-1">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-yellow-600 font-bold text-sm ml-2">+25K</span>
              </div>

              {/* Yellow black shape */}
              <div className="absolute -z-10 -right-4 top-8 w-64 h-72 bg-yellow-400 rounded-[2rem] transform rotate-12"></div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              At Webbeezwork, we transform businesses through strategic digital solutions
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              We combine cutting-edge technology with deep market insights to create digital experiences that drive growth. From comprehensive SEO strategies to high-converting web applications, we're your partner in digital transformation across Ghana and beyond.
            </p>
            <button className="bg-primary hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact us
            </button>
          </div>
        </div>
      </section>

      {/* Growth Section */}

      <section className="py-12 px-4 bg-black reveal-on-scroll">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-0 text-white flex items-center">
            Let’s Ignite
            <span className="text-yellow-400 ml-2">Your Growth</span>
            <img src={growth} alt="Growth" className="w-12 h-12 ml-2" />
          </h2>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-16 px-4 bg-black text-white reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our latest work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Sapana - Digital Marketing Campaign */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={sapana}
                  alt="Sapana Digital Marketing Campaign"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                Sapana - Digital Marketing campaign
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Comprehensive digital marketing campaign that increased brand awareness by 340% and generated over 2,500 qualified leads through targeted social media advertising and SEO optimization.
              </p>
            </div>

            {/* U-SPA - Search engine Optimization */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={uspa}
                  alt="U-SPA Search Engine Optimization"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                U-SPA - Search engine Optimization
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Complete SEO overhaul that improved organic search rankings from page 3 to top 5 positions for 15+ high-value keywords, resulting in 280% increase in organic traffic.
              </p>
            </div>

            {/* Basic - Pay per click (PPC) */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={payperclick}
                  alt="Basic Pay per click PPC"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                Basic - Pay per click (PPC)
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Strategic Google Ads campaign that achieved 4.2x ROAS and reduced cost-per-acquisition by 45% while scaling monthly ad spend from $5K to $25K profitably.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black text-white reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Testimonial 1 - Zoe Mantis */}
            <div className="bg-primary text-black p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">Sarah Johnson</h4>
                  <p className="text-sm font-medium">CEO, TechStart Ghana</p>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                "Webbeezwork transformed our digital presence completely. Their SEO strategy increased our organic traffic by 300% in just 6 months. Exceptional team with outstanding results!"
              </p>
            </div>

            {/* Testimonial 2 - Don Joe */}
            <div className="bg-primary text-black p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Michael Osei"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">Michael Osei</h4>
                  <p className="text-sm font-medium">Marketing Director, FreshPay</p>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                "Their PPC campaigns delivered incredible ROI. We went from spending $10K monthly with poor results to achieving 4.5x ROAS. Game-changing partnership!"
              </p>
            </div>

            {/* Testimonial 3 - Zoe Mantis */}
            <div className="bg-primary text-black p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Akosua Mensah"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">Akosua Mensah</h4>
                  <p className="text-sm font-medium">Founder, EcoMart Ghana</p>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                "Outstanding web development and branding work! They created a stunning e-commerce platform that increased our online sales by 250%. Highly recommend their services."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home; 
