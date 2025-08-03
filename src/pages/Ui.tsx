import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Target, Award, Star, Play } from "lucide-react";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect } from "react";
import heroImage from "@/assets/homehero.png"

const UIDesign = () => {
  const stats = [
    { number: "12K", label: "Happy Clients", icon: Users },
    { number: "65%", label: "Increase", icon: TrendingUp },
    { number: "5K", label: "Projects", icon: Target },
    { number: "80%", label: "Retention", icon: Award },
  ];

  const services = [
    {
      title: "Logo Design",
      description: "Professional logo design that represents your brand identity.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Social Media Design", 
      description: "Eye-catching social media graphics and templates.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Print Design",
      description: "High-quality print materials for your business needs.",
      image: "/api/placeholder/300/200"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content: "Webbeezwork transformed our online presence with their exceptional design skills.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner", 
      content: "The team delivered beyond our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Startup Founder",
      content: "Professional, creative, and reliable. Perfect partner for our growth.",
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                UI/UX
                <br />
                <span className="text-primary">Designing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in-up delay-150">
                Great choice to Validate your design and make your customers happy
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Quote
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-lg p-8 border border-border w-64 h-64 flex items-center justify-center mx-auto">
                <img 
                  src={heroImage} 
                  alt="UI/UX Design Illustration"
                  className="w-52 h-52 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Our Clients Trust Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional results that help businesses grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Our Design Process"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Our Design Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">User-Centered Design</h4>
                    <p className="text-muted-foreground">Creating intuitive interfaces that users love</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Brand Consistency</h4>
                    <p className="text-muted-foreground">Maintaining brand identity across all touchpoints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Performance Optimization</h4>
                    <p className="text-muted-foreground">Fast, efficient, and scalable solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 reveal-on-scroll bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our business strategy has helped many
              <br />
              businesses across the globe
            </h2>
          </div>
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

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Clear, Visible and
              <br />
              Eye Catching Designs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create stunning visuals that capture attention and drive engagement for your brand.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our latest work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 reveal-on-scroll bg-card">
        <div className="max-w-7xl mx-auto">
          <Carousel className="relative">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="px-4">
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="mb-4">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm opacity-90">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Ignite Your Growth!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your digital presence? Let's create something amazing together.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UIDesign;
