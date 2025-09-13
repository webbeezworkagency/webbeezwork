import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "AgroTech Ghana Platform",
      category: "Web App",
      description: "A comprehensive agricultural management platform connecting farmers with modern technology and market insights across Ghana.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Node.js"],
      client: "AgriTech Ghana",
      year: "2024",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Money Dashboard",
      category: "Mobile App",
      description: "Financial management app for mobile money transactions with real-time analytics and budget tracking for Ghanaian users.",
      image: "/placeholder.svg",
      tags: ["React Native", "API Integration", "Firebase"],
      client: "FinTech Accra",
      year: "2024",
      link: "#"
    },
    {
      id: 3,
      title: "GhanaMed Telehealth",
      category: "Web App",
      description: "Telemedicine platform connecting patients across Ghana with certified healthcare providers through secure consultations.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "WebRTC", "Healthcare API"],
      client: "Ghana Health Service",
      year: "2023",
      link: "#"
    },
    {
      id: 4,
      title: "Kente Cultural Gallery",
      category: "Website",
      description: "Digital showcase of Ghanaian cultural heritage featuring traditional Kente patterns and artisan stories.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Sanity CMS", "Tailwind"],
      client: "Cultural Heritage Foundation",
      year: "2024",
      link: "#"
    },
    {
      id: 5,
      title: "GhanaExport Logistics",
      category: "Web App",
      description: "Supply chain management system for cocoa and gold exports with real-time tracking and compliance monitoring.",
      image: "/placeholder.svg",
      tags: ["React", "Express", "MongoDB"],
      client: "Export Development Board",
      year: "2023",
      link: "#"
    },
    {
      id: 6,
      title: "EduGhana Learning Hub",
      category: "Website",
      description: "Interactive e-learning platform supporting Ghanaian students with local language support and WAEC curriculum alignment.",
      image: "/placeholder.svg",
      tags: ["React", "Strapi", "AWS"],
      client: "Ministry of Education",
      year: "2024",
      link: "#"
    }
  ];

  const categories = ["All", "Web App", "Mobile App", "Website"];
  
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
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
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