import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, TrendingUp, Target, BarChart3, Globe, Users } from "lucide-react";

const SEO = () => {
  const services = [
    {
      title: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical foundation.",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "URL Structure", "Schema Markup"]
    },
    {
      title: "Content Optimization",
      description: "Strategic content optimization for better search rankings.",
      features: ["Keyword Research", "On-page SEO", "Meta Tags", "Content Strategy"]
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers.",
      features: ["Google My Business", "Local Citations", "Review Management", "Location Pages"]
    }
  ];

  const achievements = [
    {
      title: "Achieve online exposure at every level",
      description: "Strategic SEO implementation that increases your online visibility across all platforms and search engines.",
      features: [
        "Search engines that we use to promote your brand",
        "Optimize all your business channels",
        "Track and measure all your marketing efforts",
        "Develop strategies to reach new audiences"
      ]
    }
  ];

  const stats = [
    { number: "40%", label: "Average Traffic Increase", icon: TrendingUp },
    { number: "12M", label: "Keywords Tracked", icon: Search },
    { number: "3%", label: "Average CTR Improvement", icon: Target }
  ];

  const insights = [
    { metric: "16B", label: "Search Queries", value: "16B" },
    { metric: "200", label: "SEO Experts", value: "200" },
    { metric: "505M", label: "Pages Optimized", value: "505M" },
    { metric: "53T", label: "Ranking Improvements", value: "53T" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                BOOST YOUR WEBSITE'S
                <br />
                <span className="text-primary">VISIBILITY & RANK HIGHER ON</span>
                <br />
                SEARCH ENGINES
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Increase organic traffic and improve search rankings with our proven SEO strategies.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get SEO Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-card rounded-lg p-8 border border-border">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="SEO Analytics Dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Achieve online exposure at every level
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive SEO strategies ensure your business gets maximum visibility across all digital channels.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Search engines that we use to promote your brand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Optimize all your business channels for maximum reach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Track and measure all your marketing efforts effectively</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Develop strategies to reach new target audiences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="SEO Strategy Visualization"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-lg p-8 text-center border border-border">
            <blockquote className="text-2xl font-medium text-foreground mb-6">
              "Webbeezwork unifies keyword research, trends, SEO, social media, and competitive insights into one powerful, easy-to-navigate platform."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img 
                src="/api/placeholder/60/60" 
                alt="Client testimonial"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Marketing Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Globally trusted, award-winning tools used by top companies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

      {/* Insights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Unlock More Insights with Bigger SEO Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get access to comprehensive SEO data and insights that drive better decision-making for your digital strategy.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-secondary text-center border-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{insight.value}</div>
                  <div className="text-muted-foreground">{insight.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-8">
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Start exploring Webbeezwork today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with our comprehensive SEO tools and take your website to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Free SEO Audit
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;