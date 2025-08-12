import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Globe, Shield, Zap, Users } from "lucide-react";
import { useState } from "react";
import development from "@/assets/development.png"
import feautures from "@/assets/features.png"
import Footer from "@/components/Footer";

const WebDevelopment = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleViewPortfolioClick = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectShowcase.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectShowcase.length) % projectShowcase.length);
  };

  const services = [
    {
      title: "Full-Stack Development",
      description: "Complete web solutions from frontend to backend with modern technologies.",
      icon: Code,
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"]
    },
    {
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect experience across all devices.",
      icon: Smartphone,
      features: ["Mobile Optimization", "Cross-browser Support", "Performance Focused", "Accessibility"]
    },
    {
      title: "Custom CMS Solutions",
      description: "Tailored content management systems for easy website maintenance.",
      icon: Globe,
      features: ["Easy Content Updates", "User-friendly Interface", "SEO Optimized", "Scalable Architecture"]
    }
  ];

  const features = [
    {
      title: "Complete Website Development",
      description: "End-to-end web development services from concept to deployment.",
      icon: Globe
    },
    {
      title: "Built-in Security Features",
      description: "Advanced security measures to protect your website and user data.",
      icon: Shield
    },
    {
      title: "High-Performance Development",
      description: "Optimized code and architecture for fast loading and smooth performance.",
      icon: Zap
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration and inventory management.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search and filtering capabilities.",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and reporting.",
      image: "/api/placeholder/400/250",
      tags: ["Vue.js", "Laravel", "MySQL"]
    }
  ];

  const projectShowcase = [
    {
      title: "Web App for a Brain Science",
      highlight: "Startup",
      image: "/api/placeholder/600/400",
      challenge: "The client, an award-winning health-tech company specializing in neuroscience, aimed to streamline onboarding, improve 3D model report generation, and efficiently manage operations.",
      solution: "We developed a web portal with a custom UI optimized for mobile devices, enabling users to view results through 3D models. It also improves the management of customer requests and streamlines user interactions, transactions, and processes."
    },
    {
      title: "E-commerce Platform for Global",
      highlight: "Retail Chain",
      image: "/api/placeholder/600/400",
      challenge: "A leading retail company needed a scalable e-commerce solution to handle millions of transactions daily while providing personalized shopping experiences across multiple markets.",
      solution: "We built a microservices-based e-commerce platform with advanced AI-driven recommendations, real-time inventory management, and multi-currency support, resulting in 40% increased conversion rates."
    },
    {
      title: "FinTech Dashboard for Investment",
      highlight: "Management",
      image: "/api/placeholder/600/400",
      challenge: "An investment firm required a comprehensive dashboard to visualize complex financial data, manage portfolios, and provide real-time market insights for their clients.",
      solution: "We created a sophisticated web application with interactive charts, real-time data feeds, automated reporting, and secure client portals, enhancing decision-making and client satisfaction by 60%."
    }
  ];



  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image - Replace src with your code image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${development})`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Trusted Web Development
              <br />
              Solutions For Leading
              <br />
              Global 
                          <span className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 bg-clip-text text-transparent ml-1">

              Brands
            </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Master the art of web development with hands-on projects, real-world tools, and
              expert-led guidance. From front-end design to back-end logic, start creating
              responsive, high-performance websites today.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
                Talk to Us
              </button>
              <button
                onClick={handleViewPortfolioClick}
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-lg transition-colors"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-0" />
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get A Ready-Made Web Solution
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive web development solutions. From custom websites to enterprise applications, we deliver scalable, secure, and user-friendly digital experiences that drive growth and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Consistent Updates & Support:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We ensure your solution stays up-to-date and performs reliably with continuous care and technical assistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Built for Growth & Protection:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our solutions are designed to scale effortlessly and include robust, industry-standard security from day one.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Device-Friendly Experience:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your website will adapt flawlessly to all screen sizes, offering a smooth and consistent user experience on any device.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative flex justify-center">
              <img
                src={feautures}
                alt="Web Solution Mockup"
                className="w-full h-auto max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Web Development Services We Offer
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our expert development team specializes in cutting-edge technologies and modern frameworks to create robust, performant web applications. We focus on clean code, optimal user experience, and seamless functionality across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border-2 border-gray-600 rounded-2xl p-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-6">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 max-w-5xl mx-auto leading-tight">
            Take Advantage Of Best-In-Class Development Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Learn how Intellectsoft will deliver an app that meets your exact business specifications
          </p>
          <button className="bg-primary hover:bg-yellow-500 text-black font-semibold px-12 py-4 text-lg rounded-lg transition-colors">
            Speak to an Exert
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with title and button */}
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Our Web Development Projects
            </h2>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold px-8 py-3 text-lg rounded-lg transition-colors">
              View All Cases
            </button>
          </div>

          {/* Project showcase with navigation arrows */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div>
                <img
                  src={projectShowcase[currentProjectIndex].image}
                  alt={`${projectShowcase[currentProjectIndex].title} ${projectShowcase[currentProjectIndex].highlight}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Project details */}
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  {projectShowcase[currentProjectIndex].title} <span className="text-primary">{projectShowcase[currentProjectIndex].highlight}</span>
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3">Challenge:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {projectShowcase[currentProjectIndex].challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3">Solution:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {projectShowcase[currentProjectIndex].solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projectShowcase.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentProjectIndex ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;