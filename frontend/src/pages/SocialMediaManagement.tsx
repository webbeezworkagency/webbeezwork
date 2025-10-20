import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Share2, Users, TrendingUp, Calendar } from "lucide-react";

const SocialMediaManagement = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Connect.{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Engage. Grow.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your social media presence with Webbeezwork's comprehensive social media management services. We create engaging content, build communities, and drive meaningful connections that convert followers into customers.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Grow Your Following
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Complete Social Media Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <Share2 className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Content Creation</h3>
              <p className="text-gray-300">Eye-catching posts, stories, and videos that resonate with your audience.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Community Management</h3>
              <p className="text-gray-300">Active engagement with your followers to build loyal communities.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Growth Strategy</h3>
              <p className="text-gray-300">Data-driven strategies to increase followers and engagement rates.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Calendar className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Content Scheduling</h3>
              <p className="text-gray-300">Strategic posting schedules for maximum reach and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            We Manage All Major Platforms
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            From Facebook and Instagram to LinkedIn and TikTok, we help your business thrive across all social media platforms.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Facebook & Instagram</h3>
                <p className="text-gray-300">Build brand awareness and drive sales through targeted content and advertising.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">LinkedIn</h3>
                <p className="text-gray-300">Establish thought leadership and connect with industry professionals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">TikTok</h3>
                <p className="text-gray-300">Reach younger audiences with creative, viral-worthy content.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Twitter/X</h3>
                <p className="text-gray-300">Join conversations and build real-time engagement with your audience.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">YouTube</h3>
                <p className="text-gray-300">Create compelling video content that educates and entertains.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Pinterest</h3>
                <p className="text-gray-300">Drive traffic and sales through visually appealing pins and boards.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
                Start Your Social Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaManagement;