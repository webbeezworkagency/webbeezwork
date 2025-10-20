import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { MousePointer, TrendingUp, Target, BarChart } from "lucide-react";

const GoogleAdsManagement = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Lets Grow With{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Google Ads
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Webbeezwork is your trusted partner for Google Ads management. Our team of experts will help you create, optimize, and manage high-performing Google Ads campaigns that drive targeted traffic and increase conversions. Let us maximize your advertising ROI while you focus on growing your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Start Growing
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Comprehensive Google Ads Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <MousePointer className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Campaign Setup</h3>
              <p className="text-gray-300">Strategic campaign creation with keyword research and audience targeting.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-300">Continuous campaign optimization for maximum performance and ROI.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Target className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Ad Creation</h3>
              <p className="text-gray-300">Compelling ad copy and creative that drives clicks and conversions.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <BarChart className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
              <p className="text-gray-300">Detailed performance reports and insights for data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Our Google Ads Management?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Expert Campaign Management</h3>
                <p className="text-gray-300">Our certified Google Ads specialists manage your campaigns with proven strategies that deliver results.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Data-Driven Optimization</h3>
                <p className="text-gray-300">We continuously analyze performance data to optimize your campaigns for better results and lower costs.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Transparent Reporting</h3>
                <p className="text-gray-300">Get detailed monthly reports showing your campaign performance, metrics, and recommendations.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Budget Optimization</h3>
                <p className="text-gray-300">We maximize your ad spend efficiency to get the most clicks and conversions within your budget.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Keyword Research</h3>
                <p className="text-gray-300">Comprehensive keyword research to target the right audience at the right time.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Landing Page Optimization</h3>
                <p className="text-gray-300">Recommendations for landing page improvements to increase conversion rates.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleAdsManagement;