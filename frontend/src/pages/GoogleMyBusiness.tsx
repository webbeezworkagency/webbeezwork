import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { MapPin, Star, Phone, Clock } from "lucide-react";

const GoogleMyBusiness = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Can your business be easily{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              found on Google Maps?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Google My Business enables you to display your company information, such as your address and contact details, on the first page of Google search results and Google Maps. As an increasing number of people use the internet to search for businesses, it is crucial to have a strong online presence, and Google My Business is an essential starting point.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Your business on Google Maps and in search
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            At Webbeezwork we can help you create a Google My Business account and setting up a complete business profile with all the necessary information, including your address, phone number, hours of operation, website link, photos and videos. Additionally, we can optimize your profile with relevant keywords, categories, and descriptions to ensure that your business appears in relevant search results and in Google Maps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Location Visibility</h3>
              <p className="text-gray-300">Show up on Google Maps with accurate location information.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Star className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Review Management</h3>
              <p className="text-gray-300">Manage and respond to customer reviews effectively.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Phone className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Contact Information</h3>
              <p className="text-gray-300">Display accurate contact details for easy customer reach.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <p className="text-gray-300">Keep customers informed about your operating hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get ahead of your competition
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            With Google My Business, your business can appear on the first page of Google search results and Google Maps, boosting your online visibility to potential customers. Plus, you can engage with your customers by responding to reviews, sharing updates, and posting photos and videos. Keep your listing up-to-date with accurate business information to ensure that customers can easily find and contact you.
          </p>
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleMyBusiness;