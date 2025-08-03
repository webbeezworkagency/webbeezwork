import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/homehero.png"


const Home = () => {
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex-1 md:pl-16">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Ghanaian Digital<br />Marketing <span className="text-primary">Agency</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-10 max-w-2xl">
                We ignite your business growth with creative digital marketing solutions.
              </p>
              {/* Wrap the Get Started button in a flex container and center it */}
              <div className="flex justify-start">
                <Button size="lg" className="px-10 py-5 text-lg font-bold rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-200">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-[500px] h-[500px] flex items-center justify-center mx-auto">
                <img src={heroImage} alt="Professional Digital Marketing Agency" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pt-0 pb-12 px-4 mt-[-24px]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-left">Partners</h3>
          <div className="flex flex-row gap-8 justify-start items-center">
            {/* Nextlane */}
            <div className="bg-black rounded w-[210px] h-[110px] flex items-center justify-center">
              <img src="/your-nextlane-logo.png" alt="nextlane" className="h-12 w-auto object-contain" />
            </div>
            {/* Elephant */}
            <div className="bg-[#232323] rounded w-[210px] h-[110px] flex items-center justify-center">
              <img src="/your-elephant-logo.png" alt="Elephant" className="h-12 w-auto object-contain" />
            </div>
            {/* ToBee */}
            <div className="bg-[#fff35c] rounded w-[210px] h-[110px] flex items-center justify-center">
              <img src="/your-tobee-logo.png" alt="ToBee" className="h-12 w-auto object-contain" />
            </div>
            {/* Arrow */}
            <div className="bg-transparent rounded w-[210px] h-[110px] flex items-center justify-center">
              <img src="/your-arrow-logo.png" alt="Arrow" className="h-12 w-auto object-contain" />
            </div>
            {/* LinkedIn */}
            <div className="bg-[#232323] rounded w-[210px] h-[110px] flex items-center justify-center">
              <img src="/your-linkedin-logo.png" alt="LinkedIn" className="h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 px-4 bg-card border-b border-border reveal-on-scroll">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Digital Marketing Expertise</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>SEO & SEM</li>
              <li>Content Marketing</li>
              <li>Social Media Strategy</li>
              <li>Branding & Design</li>
              <li>Campaign Management</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <div className="font-bold text-lg">SEO</div>
                <div className="text-sm text-muted-foreground">Boost your search rankings</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <div className="font-bold text-lg">Content</div>
                <div className="text-sm text-muted-foreground">Engage your audience</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <div className="font-bold text-lg">Social Media</div>
                <div className="text-sm text-muted-foreground">Grow your brand</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <div className="font-bold text-lg">Strategy</div>
                <div className="text-sm text-muted-foreground">Results-driven campaigns</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-background border-b border-border reveal-on-scroll">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex justify-center">
            <img src="/placeholder.svg" alt="Why Choose Us" className="w-48 h-48 rounded-lg object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Why should you choose Webbeezwork?</h3>
            <p className="text-muted-foreground mb-4">
              At Webbeezwork, we transform how Ghanaian businesses connect, engage, and grow. Our team delivers innovative marketing, SEO, and creative solutions tailored for your success.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-background font-bold rounded-full shadow-lg px-8 py-3 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 border-none"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-12 px-4 bg-card border-b border-border reveal-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Our latest work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <img src="/placeholder.svg" alt="Project 1" className="w-full h-32 object-cover rounded mb-2" />
                <div className="font-semibold">Saaapa - Digital Marketing</div>
                <div className="text-sm text-muted-foreground">SEO, SEM, Social Media</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <img src="/placeholder.svg" alt="Project 2" className="w-full h-32 object-cover rounded mb-2" />
                <div className="font-semibold">LSMA - Search Engine Optimization</div>
                <div className="text-sm text-muted-foreground">Content, SEO, Analytics</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <img src="/placeholder.svg" alt="Project 3" className="w-full h-32 object-cover rounded mb-2" />
                <div className="font-semibold">BNIC - Pay per click</div>
                <div className="text-sm text-muted-foreground">PPC, SEM, Campaigns</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-background border-b border-border reveal-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Testimonials</h3>
          <Carousel className="relative">
            <CarouselContent>
              <CarouselItem className="px-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-4">
                    <div className="font-semibold mb-2">John Doe</div>
                    <div className="text-sm mb-2">"Webbeezwork helped us grow our business online!"</div>
                    <div className="text-xs">CEO, Saaapa</div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="px-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-4">
                    <div className="font-semibold mb-2">Jane Smith</div>
                    <div className="text-sm mb-2">"Amazing results and great communication."</div>
                    <div className="text-xs">Marketing Lead, LSMA</div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="px-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-4">
                    <div className="font-semibold mb-2">Kwame Nkrumah</div>
                    <div className="text-sm mb-2">"Professional and creative team!"</div>
                    <div className="text-xs">Founder, BNIC</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home; 
