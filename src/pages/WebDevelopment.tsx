import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Globe, Shield, Zap, Users } from "lucide-react";

const WebDevelopment = () => {
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

  const stats = [
    { number: "16B", label: "Websites Created", icon: Globe },
    { number: "200", label: "SDLM Experts", icon: Users },
    { number: "505M", label: "SSL Certificates", icon: Shield },
    { number: "53T", label: "Data Transfer", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                TRUSTED WEB DEVELOPMENT
                <br />
                <span className="text-primary">SOLUTIONS FOR LEADING</span>
                <br />
                GLOBAL BRANDS
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Build powerful, scalable web applications that drive business growth and user engagement.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-card rounded-lg p-8 border border-border">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Web Development Illustration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              GET A READY-MADE WEB SOLUTION
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive web development services designed to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            WEB DEVELOPMENT SERVICES WE OFFER
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Take advantage of best-in-class development expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful web development projects that showcase our technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Development Process"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                OUR WEB DEVELOPMENT PROJECTS
              </h3>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Web Development Project?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;