import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Users, 
  Zap,
  ArrowRight,
  Globe,
  Award,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-24 right-20 w-4 h-4 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-6 h-6 bg-orange-500 rounded transform rotate-45"></div>
        <div className="absolute top-40 left-32 w-3 h-3 bg-primary rounded-full"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent ml-1">
              Create
            </span>
            <br />
            Something Amazing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We're here to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Ready to elevate your digital presence? Our team of experts is here to transform your vision into reality. Let's discuss how we can help your business grow through innovative web solutions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-400">webbeezworkagency@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-400">+233 24 123 4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Office</div>
                      <div className="text-gray-400">Digital Hub Accra<br />East Legon, Accra Ghana</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Hours</div>
                      <div className="text-gray-400">Mon - Fri: 9AM - 6PM</div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24h</div>
                      <div className="text-xs text-gray-500">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-xs text-gray-500">Projects Done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-white">Start Your Project</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're committed to delivering exceptional results and building long-term partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Delivery</h3>
              <p className="text-gray-400 leading-relaxed">
                We deliver high-quality projects on time, every time. Our streamlined process ensures rapid turnaround without compromising quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team of seasoned designers and developers brings years of experience across diverse industries and technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-400 leading-relaxed">
                With 98% client satisfaction and 50+ successful projects, we have a track record of delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How long does a typical project take?</h3>
              <p className="text-gray-400 leading-relaxed">
                Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while complex web applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes! We offer comprehensive maintenance packages including updates, security monitoring, performance optimization, and technical support to keep your digital presence running smoothly.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What's your design process like?</h3>
              <p className="text-gray-400 leading-relaxed">
                We follow a collaborative approach: Discovery & Research → Strategy & Planning → Design & Prototyping → Development & Testing → Launch & Optimization. You're involved every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-orange-400/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 50+ satisfied clients who've transformed their digital presence with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Schedule a Call
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-8 rounded-lg transition-all duration-300">
              View Our Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;