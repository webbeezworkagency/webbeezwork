import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { GraduationCap, Users, Clock, Award } from "lucide-react";

const TrainingSession = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Learn.{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Grow. Succeed.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empower your team with Webbeezwork's comprehensive digital marketing training sessions. From social media management to Google Ads optimization, we provide hands-on training that delivers real results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Book Training Session
            </Button>
          </Link>
        </div>
      </section>

      {/* Training Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Comprehensive Training Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <GraduationCap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Digital Marketing Fundamentals</h3>
              <p className="text-gray-300">Master the basics of digital marketing strategy and implementation.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Social Media Marketing</h3>
              <p className="text-gray-300">Learn to create engaging content and grow your social media presence.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Google Ads Training</h3>
              <p className="text-gray-300">Create and optimize high-performing Google Ads campaigns.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">SEO Mastery</h3>
              <p className="text-gray-300">Improve your website's search engine rankings and visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Our Training Sessions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Hands-On Learning</h3>
                <p className="text-gray-300">Practical exercises and real-world examples to reinforce learning.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Expert Instructors</h3>
                <p className="text-gray-300">Learn from certified professionals with years of industry experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Customized Content</h3>
                <p className="text-gray-300">Training sessions tailored to your business needs and goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Small Group Sessions</h3>
                <p className="text-gray-300">Intimate class sizes for personalized attention and better learning.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Interactive Workshops</h3>
                <p className="text-gray-300">Engage in discussions and collaborative learning experiences.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Ongoing Support</h3>
                <p className="text-gray-300">Post-training support to help you implement what you've learned.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Certification</h3>
                <p className="text-gray-300">Receive certificates upon successful completion of training programs.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Flexible Scheduling</h3>
                <p className="text-gray-300">Choose from various time slots that fit your busy schedule.</p>
              </div>
            </div>
          </div>

          {/* Training Formats */}
          <div className="bg-gray-900 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Training Formats Available</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2 text-primary">In-Person</h4>
                <p className="text-gray-300">Face-to-face training sessions at your location or our offices.</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2 text-primary">Virtual</h4>
                <p className="text-gray-300">Online training sessions via video conferencing platforms.</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2 text-primary">Hybrid</h4>
                <p className="text-gray-300">Combination of in-person and virtual training sessions.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
                Schedule Your Training
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingSession;