import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, TrendingUp, Target, BarChart3, Globe, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import seo from "@/assets/seo.png"
const SEO = () => {
  const navigate = useNavigate();

  const handleViewPortfolioClick = () => {
    navigate('/portfolio');
  };
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
    {
      number: "40%",
      label: "Fortune 500 companies use Semrush as their go-to marketing tool",
      icon: (
        <svg width="48" height="48" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#b3d241"></path>
          </g>
        </svg>
      ),
      color: "text-green-400"
    },
    {
      number: "12M",
      label: "marketing professionals have already used Semrush",
      icon: (
        <svg width="48" height="48" fill="#9cd520" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xmlSpace="preserve" stroke="#9cd520">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M68.193,19.713L60.171,8.027c-1.539-2.262-4.937-3.967-7.903-3.967H19.721c-2.966,0-6.363,1.708-7.893,3.96L3.784,19.652 c-1.711,2.52-1.62,6.4,0.207,8.836l28.002,37.329c1.014,1.352,2.476,2.125,4.01,2.125c1.528,0,2.983-0.771,3.99-2.113l28.004-37.33 C69.842,26.035,69.93,22.262,68.193,19.713z M52.268,8.06c0.088,0,0.181,0.014,0.271,0.02l-0.782,0.715 c-0.408,0.372-0.436,1.005-0.064,1.412c0.197,0.217,0.469,0.326,0.74,0.326c0.239,0,0.48-0.086,0.674-0.262l1.718-1.569 c0.867,0.41,1.633,0.975,2.046,1.583l8.023,11.687c0.212,0.311,0.354,0.688,0.441,1.089h-26.24l8.34-7.612 c0.406-0.371,0.436-1.004,0.063-1.412c-0.371-0.407-1.005-0.438-1.413-0.064l-9.826,8.969c-0.038,0.035-0.056,0.081-0.087,0.119h-1 c-0.031-0.039-0.049-0.084-0.086-0.118L18.878,8.149c0.289-0.052,0.573-0.089,0.843-0.089H52.268z M15.127,10.282 c0.344-0.506,0.939-0.979,1.63-1.362L32.248,23.06H20.23c-0.001,0-0.001,0-0.002,0H6.743c-0.038,0-0.07,0.018-0.107,0.021 c0.083-0.435,0.226-0.842,0.447-1.167L15.127,10.282z M7.19,26.088c-0.217-0.289-0.375-0.647-0.481-1.035 c0.012,0,0.022,0.007,0.034,0.007h12.781l0.949,2.375c0.155,0.395,0.532,0.635,0.932,0.635c0.121,0,0.244-0.022,0.364-0.069 c0.513-0.201,0.767-0.781,0.566-1.295l-0.657-1.646h28.471l-14.16,36.531L25.008,33.534c-0.201-0.513-0.782-0.769-1.296-0.566 c-0.514,0.201-0.767,0.781-0.566,1.295l10.712,27.375L7.19,26.088z M38.093,61.697L52.294,25.06h12.988 c-0.106,0.386-0.266,0.744-0.485,1.038L38.093,61.697z"></path>
              <path d="M49.329,13.365c0.241,0,0.483-0.087,0.674-0.262l0.696-0.636c0.406-0.373,0.436-1.005,0.063-1.413 c-0.371-0.406-1.004-0.434-1.412-0.063l-0.695,0.636c-0.407,0.372-0.437,1.005-0.063,1.413 C48.788,13.256,49.059,13.365,49.329,13.365z"></path>
              <path d="M23.659,30.087l-0.351-0.895c-0.201-0.511-0.78-0.767-1.296-0.564c-0.513,0.201-0.767,0.781-0.566,1.295l0.351,0.895 c0.156,0.395,0.533,0.635,0.932,0.635c0.121,0,0.245-0.022,0.364-0.069C23.607,31.183,23.861,30.603,23.659,30.087z"></path>
            </g>
          </g>
        </svg>
      ),
      color: "text-green-400"
    },
    {
      number: "32",
      label: "international awards as best SEO software suite",
      icon: (
        <svg width="48" height="48" fill="#444883" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.004 32.004" xmlSpace="preserve" stroke="#444883">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M28.286,2.698c-0.06-1.838-0.47-2.353-1.115-2.582c-0.379-0.137-0.916-0.186-1.284,0.083 c-0.175,0.129-0.38,0.38-0.362,0.851c0.015,0.409,0.202,0.628,0.357,0.738c0.398,0.285,0.945,0.133,1.006,0.114l-0.101-0.337 l-0.099-0.338c-0.114,0.032-0.315,0.045-0.396-0.013c-0.048-0.035-0.061-0.123-0.063-0.191c-0.005-0.129,0.021-0.215,0.074-0.255 c0.11-0.08,0.388-0.074,0.629,0.012c0.169,0.061,0.427,0.159,0.562,0.978c-0.119,0.27-0.611,1.138-1.812,1.251 c-0.648-0.724-1.792-0.602-2.218-0.527V2.298h-7.456V2.293H8.537v0.183C8.111,2.401,6.968,2.279,6.32,3.003 c-1.2-0.113-1.692-0.982-1.811-1.251c0.136-0.818,0.393-0.917,0.562-0.978C5.313,0.688,5.591,0.683,5.7,0.763 c0.054,0.04,0.08,0.126,0.075,0.255C5.773,1.086,5.76,1.174,5.712,1.209C5.631,1.268,5.43,1.254,5.316,1.223L5.217,1.561 L5.115,1.896c0.061,0.019,0.608,0.171,1.006-0.114c0.155-0.11,0.343-0.329,0.358-0.738c0.018-0.471-0.187-0.722-0.362-0.851 C5.75-0.075,5.213-0.025,4.833,0.11C4.189,0.341,3.777,0.854,3.718,2.692c-0.111,3.166,6.33,5.977,8.011,6.655l-0.353,0.616 l0.611,0.352L12.4,9.599c1.188,0.475,2.279,0.306,2.279,0.306v0.97l-0.911,1.205c0,0,1.499,6.375,1.234,7.816h-0.735v1.498h0.449 l-1.867,2.88h-0.904v0.559h-1.292v0.939h0.529v3.702h-0.565L10.611,32h5.382v0.004h5.399l-0.006-2.525h-0.563v-3.702h0.528v-0.94 H20.06v-0.558h-0.902l-1.867-2.88h0.449V19.9h-0.734c-0.265-1.439,1.234-7.816,1.234-7.816l-0.911-1.205V9.91 c0,0,1.091,0.169,2.279-0.306l0.413,0.717l0.61-0.352l-0.354-0.615C21.957,8.674,28.398,5.863,28.286,2.698z M4.438,2.863 c0.356,0.362,0.854,0.689,1.527,0.815C5.824,4.261,6.017,4.939,6.293,5.537C5.235,4.688,4.486,3.766,4.438,2.863z M7.726,6.542 C7.312,6,6.358,4.5,6.688,3.726c0.373-0.878,1.819-0.539,1.85-0.532v0.73h0.886c0.027,1.903,0.451,3.212,1.05,4.105 C9.601,7.619,8.634,7.111,7.726,6.542z M20.118,25.775v3.702h-4.107v-0.005h-4.125v-3.702h4.107v0.005H20.118z M24.279,6.547 c-0.907,0.569-1.875,1.076-2.747,1.487c0.599-0.894,1.021-2.202,1.05-4.105h0.886V3.2c0.031-0.008,1.479-0.347,1.852,0.531 C25.647,4.504,24.694,6.005,24.279,6.547z M25.712,5.542c0.276-0.597,0.469-1.275,0.328-1.857c0.672-0.126,1.17-0.453,1.527-0.815 C27.519,3.771,26.771,4.692,25.712,5.542z"></path>
            </g>
          </g>
        </svg>
      ),
      color: "text-cyan-400"
    }
  ];

  const insights = [
    { value: "16B", label: "keywords" },
    { value: "200", label: "geo databases" },
    { value: "505M", label: "domain profiles" },
    { value: "53T", label: "backlinks" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image - Replace src with your code image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${seo})`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Professional Seo
              <br />
              Services For Leading
              <br />
              Global 
                          <span className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 bg-clip-text text-transparent ml-1">

              Brands
            </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Dominate search results with data-driven SEO strategies. From technical optimization to content strategy,
              we help you achieve higher rankings and drive organic traffic that converts.
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
                Achieve online exposure at every level.
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Boost your brand visibility across search engines, social media, and digital platforms — from local reach to global recognition.
              </p>

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
                      Streamline SEO and content operations at scale across thousands of pages.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary text-lg leading-relaxed">
                      Forecast traffic and revenue by market, brand, or audience segment.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-primary text-lg leading-relaxed">
                      Enhance your online presence across both traditional and AI-powered search engines.
                    </p>
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
              Globally trusted, award-winning tools used by top companies.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {stat.icon}
                </div>
                <div className={`text-5xl lg:text-6xl font-bold mb-4 ${stat.color}`}>
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

      {/* Insights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full opacity-20 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-700 rounded-full opacity-30 transform translate-x-32 translate-y-32"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Unlock More Insights with Bigger SEO Data
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With our expansive SEO databases and lightning-fast backlink crawler, you gain access to insights your competitors can't see — giving you the edge to grow faster, smarter, and ahead of the curve.
              </p>
              <button className="bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                Learn More
              </button>
            </div>

            {/* Right side - Data cards */}
            <div className="grid grid-cols-2 gap-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-black border-2 border-primary rounded-xl p-6 text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {insight.value}
                  </div>
                  <div className="text-primary text-lg">
                    {insight.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Start exploring Webbeezwork today
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Get started with our comprehensive SEO tools and take your website to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
              Get Free SEO Audit
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;