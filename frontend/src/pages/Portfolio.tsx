import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";
import { caseStudies, getCategories } from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = caseStudies;

  const categories = getCategories();
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full"></div>
        <div className="absolute bottom-40 left-16 w-6 h-6 bg-orange-500 rounded transform rotate-45"></div>
        <div className="absolute top-40 left-32 w-3 h-3 bg-primary rounded-full"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of innovative digital solutions that have transformed businesses and delighted users worldwide.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <CaseStudyCard
                key={p.id}
                title={p.title}
                category={p.category}
                description={p.description}
                image={p.image}
                client={p.client}
                year={p.year}
                tags={p.tags}
                href={p.link}
                imageHeightClassName="h-48"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to bring your vision to life with cutting-edge design and development.
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get In Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;