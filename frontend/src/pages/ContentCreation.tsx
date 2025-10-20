import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Camera, FileText, Video, Palette } from "lucide-react";

const ContentCreation = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Can we help to{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              create your story?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            At Webbeezwork, we're passionate about helping businesses create an impactful online presence. Our team of skilled professionals specializes in crafting high-quality visual and written content that is tailored to resonate with your target audience. Let us help your brand stand out and leave a lasting impression on your customers.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4 text-base font-bold rounded-full shadow-lg bg-primary hover:bg-yellow-500 text-black transition-all duration-200">
              Start Your Story
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Compelling content to promote your business
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            Webbeezwork specializes in creating quality photos, videos, and written content for websites, social media, and Google My Business listings. As part of our comprehensive advertising services, we also offer expert ad copywriting and display banner design. Let us help your business stand out with compelling visual and written content that resonates with your target audience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <Camera className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Photography</h3>
              <p className="text-gray-300">Professional photos that showcase your business and products.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Video className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Video Content</h3>
              <p className="text-gray-300">Engaging videos for social media and marketing campaigns.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <FileText className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Written Content</h3>
              <p className="text-gray-300">Compelling copy for websites, blogs, and social media.</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Palette className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Ad Creative</h3>
              <p className="text-gray-300">Eye-catching ad copy and display banners that convert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The value of our content service
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Our services at Webbeezwork are designed to bring your brand to life and connect with your audience. With our expertly crafted content, your website and social media channels will stand out, showcasing your brand's unique personality and value proposition. Our custom ad copy and display banners will grab your customers' attention and drive conversions. Allow us to assist you in making a lasting impression on your customers.
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

export default ContentCreation;