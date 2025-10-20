import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Handshake, Users, TrendingUp, Target } from "lucide-react";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Partner.{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Collaborate. Succeed.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join forces with Webbeezwork to expand your business reach and unlock new opportunities. We believe in the power of strategic partnerships to drive mutual growth and deliver exceptional value to our clients.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Explore Partnership
            </Button>
          </Link>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Partnership Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <Handshake className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Referral Partners</h3>
              <p className="text-gray-300">Earn commissions by referring clients to our digital marketing services.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Agency Partners</h3>
              <p className="text-gray-300">White-label our services to expand your agency's service offerings.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Technology Partners</h3>
              <p className="text-gray-300">Integrate your technology solutions with our marketing services.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Target className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Strategic Alliances</h3>
              <p className="text-gray-300">Long-term partnerships for mutual business growth and success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Partnership Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Revenue Growth</h3>
                <p className="text-gray-300">Increase your revenue streams through our competitive commission structure and profit-sharing models.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Expanded Service Portfolio</h3>
                <p className="text-gray-300">Offer comprehensive digital marketing services without additional overhead or training costs.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Expert Support</h3>
                <p className="text-gray-300">Access our team of digital marketing experts and industry best practices.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Marketing Resources</h3>
                <p className="text-gray-300">Leverage our marketing materials, case studies, and sales collateral.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Training & Certification</h3>
                <p className="text-gray-300">Receive comprehensive training on our services and methodologies.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Dedicated Account Management</h3>
                <p className="text-gray-300">Work with dedicated partner managers for seamless collaboration.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Co-Marketing Opportunities</h3>
                <p className="text-gray-300">Joint marketing initiatives to expand reach and generate more leads.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Flexible Terms</h3>
                <p className="text-gray-300">Partnership agreements tailored to your business model and goals.</p>
              </div>
            </div>
          </div>

          {/* Partnership Process */}
          <div className="bg-gray-900 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Partnership Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="text-lg font-bold mb-2">Application</h4>
                <p className="text-gray-300 text-sm">Submit your partnership application and business information.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="text-lg font-bold mb-2">Evaluation</h4>
                <p className="text-gray-300 text-sm">We review your application and assess partnership fit.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="text-lg font-bold mb-2">Onboarding</h4>
                <p className="text-gray-300 text-sm">Complete training and setup partnership framework.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="text-lg font-bold mb-2">Launch</h4>
                <p className="text-gray-300 text-sm">Begin collaborating and driving mutual success.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;