import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, DollarSign, Users, BarChart3, Zap } from "lucide-react";
import sea from "@/assets/seo.png"
import Footer from "@/components/Footer";



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

  function handleViewPortfolioClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.location.href = "/portfolio";
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image - Replace src with your code image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${sea})`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ignite Your Growth,
              <br />
              Dominate 
                          <span className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 bg-clip-text text-transparent ml-1">

               Search
            </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              We craft data-driven SEA campaigns that deliver measurable results and maximize your ROI.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
                Get Free SEO Audit
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

      {/* Achievement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Achieve Online Visibility & ROI with Targeted Ads              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Boost your brand’s presence on search engine instantly. Reach your ideal customers precisely when they’re ready to buy, ensuring rapid growth and measurable returns.              </p>

              <button className="bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                Discover More
              </button>
            </div>

            <div className="relative">
              <div className="border border-primary rounded-2xl p-8 bg-black">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary text-lg leading-relaxed">
                      Implement and optimize ad campaigns across all platforms.
                      Focus: Google Ads, Microsoft Advertising, Social Media Ads.                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary text-lg leading-relaxed">
                      Generate qualified leads and immediate sales.
                      Focus: Track conversions, optimize bids for maximum ROI.                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary text-lg leading-relaxed">
                      Dominate competitive ad spaces and increase market share.
                      Focus: Ad copy testing, competitive analysis, budget allocation.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl lg:text-4xl font-medium text-white mb-12 leading-relaxed">
            "Webbeezwork unifies keyword research, trends, SEO, social media, and competitor insights into one powerful platform."
          </blockquote>

          <div className="flex flex-col items-center gap-4">
            <img
              src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJuNGg2c2ZocjJ1TTJSclNEYVJKazBXYmZ5cSJ9?height=200&width=200&quality=100&fit=crop"
              alt="Results-Driven Online Marketing Expert"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="text-center">
              <div className="text-white text-lg">
                Emile van de Klok Marketing Expert at Webbeezwork
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Proven Results That Drive Business Growth
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our data-driven approach delivers measurable results across all advertising platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-4">
                  {stat.number}
                </div>
                <div className="text-white text-lg leading-relaxed max-w-xs mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Search Engine Advertising Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive paid advertising solutions that drive qualified traffic and maximize your return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEA;