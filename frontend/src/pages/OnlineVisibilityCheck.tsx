import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { CheckCircle, Search, BarChart3, Users } from "lucide-react";

const OnlineVisibilityCheck = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Are you{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              good looking
            </span>
            <br />
            on the web?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our agency offers a comprehensive online health-check to check your digital presence. Our assessment will evaluate the health and effectiveness of your digital footprint, providing you with actionable insights and recommendations to improve your online performance and visibility.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Get Your Health Check
            </Button>
          </Link>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What can you expect from our health-check
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg">
              <Search className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Google My Business Analysis</h3>
              <p className="text-gray-300">Analyzing online listings to ensure your business is properly represented on Google Maps and search results.</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Website Performance</h3>
              <p className="text-gray-300">Assessing your website's performance, speed, and mobile responsiveness across all devices.</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">SEO Strategy Review</h3>
              <p className="text-gray-300">Checking your SEO strategy to improve search engine rankings and organic visibility.</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Social Media Presence</h3>
              <p className="text-gray-300">Evaluating your social media presence and engagement across all platforms.</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Online Reputation</h3>
              <p className="text-gray-300">Monitoring your online reputation and customer reviews across various platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why choose our online visibility health-check?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            It is essential to ensure that a business's contact details, location, and opening hours are easily found on Google Maps and in search engines to avoid losing online visitors. To establish trust with customers, businesses should have a website that performs well and displays properly on all devices, coupled with rich content and positive reviews about their products and services on social media and the website.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineVisibilityCheck;