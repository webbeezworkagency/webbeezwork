import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Target, Award, Star, Play } from "lucide-react";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect } from "react";
import uspa from "@/assets/U-SPA.png"
import payperclick from "@/assets/PayperClick.png"
import sapana from "@/assets/sapana.png"
import ui from "@/assets/ui.png";
import uihero from "@/assets/uihero.png";
import uiclients from "@/assets/uiclients.png";


const UIDesign = () => {
  const stats = [
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "300%", label: "Avg ROI Increase", icon: TrendingUp },
    { number: "200+", label: "Projects Delivered", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Award },
  ];

  const services = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity packages including logo design, color schemes, and brand guidelines that reflect your unique story.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Website & App UI/UX", 
      description: "User-centered design for websites and mobile apps with focus on Ghanaian user behaviors and preferences.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Print & Digital Graphics",
      description: "Professional graphics for both traditional print media and modern digital platforms, culturally relevant and impactful.",
      image: "/api/placeholder/300/200"
    }
  ];

  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "CEO, AgroFresh Ghana",
      content: "Webbeezwork transformed our brand identity and created a digital presence that truly represents our Ghanaian agricultural heritage.",
      rating: 5
    },
    {
      name: "Kwame Asante",
      role: "Founder, Accra Tech Hub", 
      content: "The UI/UX design they created for our platform perfectly balances modern aesthetics with local user preferences. Outstanding work!",
      rating: 5
    },
    {
      name: "Ama Osei",
      role: "Director, Ghana Tourism Board",
      content: "Their creative vision helped us showcase Ghana's beauty through exceptional design. Professional, culturally aware, and innovative.",
      rating: 5
    }
  ];

  // Add scroll reveal effect
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

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
     <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={ui}
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                UI/UX ,
                <br />
            <span className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 bg-clip-text text-transparent">
                  Designing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                Great Design is Visible
              </p>
              <div className="flex justify-start">
                <Link to="/contact">
                  <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
                    Challenge Us
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Image Placeholder */}
            <div className="relative">
              <div className="w-full max-w-[500px] aspect-square flex items-center justify-center mx-auto relative">
                <img
                  src={uihero}
                  alt="UI/UX Design Illustration"
                  className="object-cover w-full h-full relative z-10 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
 <section className="py-16 px-4 sm:px-6 lg:px-8 reveal-on-scroll bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Centered Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Why Our Clients Trust Us
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We create user-centered designs that drive engagement and conversions. From wireframes to final prototypes, our UI/UX expertise transforms complex ideas into intuitive digital experiences that users love and businesses profit from.
            </p>
          </div>

          {/* Left Image, Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img 
                src={uiclients} 
                alt="Design Portfolio Showcase"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Right Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-8">Our Design Expertise</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    User research and competitive analysis to understand your target audience and market positioning.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Wireframing and prototyping to validate concepts before development begins.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Visual design and branding that creates memorable and cohesive brand experiences.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Usability testing and optimization to ensure maximum conversion rates and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 reveal-on-scroll bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Business Strategy Has Helped Many
              <br />
              Businesses Across The Globe
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our design solutions have helped businesses achieve measurable results: increased user engagement, higher conversion rates, and stronger brand recognition across Ghana and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clients */}
            <div className="text-center">
              <div className="text-lg text-gray-300 mb-2">Clients</div>
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">12K</div>
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>

            {/* Annual growth */}
            <div className="text-center">
              <div className="text-lg text-gray-300 mb-2">Annual growth</div>
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">55%</div>
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
            </div>

            {/* No of projects */}
            <div className="text-center">
              <div className="text-lg text-gray-300 mb-2">No of projects</div>
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">5k</div>
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
            </div>

            {/* Positive ratings */}
            <div className="text-center">
              <div className="text-lg text-gray-300 mb-2">Positive ratings</div>
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">80%</div>
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Ignite Your Growth!
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's create something amazing together.
          </p>
          <Link to="/contact">
            <button className="bg-primary hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      {/* Our latest work */}
      <section className="py-16 px-4 bg-black text-white reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Our Latest Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sapana - Campaign */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={sapana}
                  alt="Sapana Campaign Design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-white">
                Sapana — Campaign Identity & Creative
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Developed a cohesive visual system and high-performing ad creatives that boosted engagement across channels.
              </p>
            </div>

            {/* U-SPA - UX/SEO Redesign */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={uspa}
                  alt="U-SPA Website Redesign"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-white">
                U-SPA — Website UX & Conversion Lift
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Redesigned core pages, streamlined flows, and improved content hierarchy to increase conversions and organic reach.
              </p>
            </div>

            {/* PPC - Landing Pages */}
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={payperclick}
                  alt="PPC Landing Page Design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-white">
                PPC — Creative Kit & Landing Pages
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Launched modular landing pages and on-brand ad assets optimized for speed, clarity, and conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UIDesign;
