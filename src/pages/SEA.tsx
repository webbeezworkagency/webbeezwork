import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, DollarSign, Users, BarChart3, Zap } from "lucide-react";

const SEA = () => {
  const achievements = [
    {
      title: "Achieve online exposure at every level",
      description: "Strategic paid advertising campaigns that maximize your ROI and drive qualified traffic to your business.",
      features: [
        "Google Ads & Bing Ads management for maximum reach",
        "Facebook, Instagram & LinkedIn advertising campaigns", 
        "Targeted social media strategies and audience optimization",
        "Performance tracking and competitive analysis insights"
      ]
    }
  ];

  const stats = [
    { number: "40%", label: "Average ROAS Increase", icon: TrendingUp },
    { number: "12M", label: "Ad Impressions Monthly", icon: Target },
    { number: "3%", label: "Average CTR Improvement", icon: BarChart3 }
  ];

  const insights = [
    { metric: "505M", label: "SQUAT", value: "505M" },
    { metric: "53T", label: "SPLIT", value: "53T" }
  ];

  const services = [
    {
      title: "Google Ads Management",
      description: "Expert Google Ads campaigns that drive qualified traffic and maximize your advertising budget.",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Advertising"]
    },
    {
      title: "Social Media Advertising", 
      description: "Targeted social media ads that reach your ideal customers where they spend their time.",
      features: ["Facebook Ads", "Instagram Campaigns", "LinkedIn B2B Ads", "Twitter Promotion"]
    },
    {
      title: "PPC Strategy & Optimization",
      description: "Data-driven PPC strategies that continuously improve performance and reduce costs.",
      features: ["Keyword Research", "Ad Copy Testing", "Landing Page Optimization", "Conversion Tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              IGNITE YOUR GROWTH, DOMINATE
              <br />
              <span className="text-primary">SEARCH</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate your business growth with targeted search engine advertising campaigns that deliver results.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Campaign
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
                Our comprehensive paid advertising strategies ensure your business gets maximum visibility across all digital advertising platforms.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Google Ads & Bing Ads management for maximum reach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Facebook, Instagram & LinkedIn advertising campaigns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Targeted social media strategies and audience optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground">Performance tracking and competitive analysis insights</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="SEA Strategy Visualization"
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
              "Webbeezwork integrates paid search, keyword research, trends, SEO, social media, and competitive insights into one powerful, easy-to-navigate platform."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img 
                src="/api/placeholder/60/60" 
                alt="Client testimonial"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">Michael Rodriguez</div>
                <div className="text-sm text-muted-foreground">Performance Marketing Lead</div>
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
              Get access to comprehensive advertising data and insights that drive better decision-making for your paid campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="SEA Analytics Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {insights.map((insight, index) => (
                  <Card key={index} className="bg-secondary text-center border-border">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">{insight.value}</div>
                      <div className="text-muted-foreground">{insight.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Search Engine Advertising Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive paid advertising solutions that drive qualified traffic and maximize your return on investment.
            </p>
          </div>

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
            Get started with our comprehensive SEA tools and take your advertising campaigns to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Free Campaign Audit
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEA;