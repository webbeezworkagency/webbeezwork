import Footer from "@/components/Footer";
import { Users, Award, Heart, Globe, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Ann from "@/assets/Ann.jpg";
import Isaac from "@/assets/Isaac.png";
import nextlaneLogo from "@/assets/nextlane.png";

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-24 right-20 w-4 h-4 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-6 h-6 bg-orange-500 rounded transform rotate-45"></div>
        <div className="absolute top-40 left-32 w-3 h-3 bg-primary rounded-full"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Webbeezwork
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ghana's first social enterprise in digital marketing, born from the To Be Worldwide educational foundation in Takoradi.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Webbeezwork is an agency based in Ghana that specializes in delivering digital 
                  marketing services throughout Africa. Our primary objective is to help our clients 
                  improve their online visibility and attain their business goals through a diverse 
                  range of services.
                </p>
                <p>
                  Our agency was established from the To Be Worldwide educational center situated 
                  in Takoradi, Ghana. This foundation, established in 2002, focuses on assisting 
                  children in Ghana to realise their full potential and build a better future for 
                  their communities.
                </p>
                <p>
                  As the first social enterprise in Ghana's digital marketing industry, our profits 
                  are reinvested into our educational facilities through our foundation, which has 
                  already facilitated the education of more than 20,000 children during our 20+ years 
                  of existence.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for story image - you can replace with actual image */}
              <div className="bg-gradient-to-br from-primary/20 to-orange-400/20 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">20+ Years Impact</h3>
                  <p className="text-gray-300">Educating 20,000+ children in Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Leadership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings together expertise from various fields to provide 
              comprehensive and personalized digital marketing solutions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-16">
            {/* Leadership Member 1 - Emile */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 flex-shrink-0 lg:w-96 border border-gray-800 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-40 h-40 bg-gradient-to-br from-primary via-yellow-400 to-orange-400 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl group-hover:shadow-primary/40 transition-shadow duration-300 ring-4 ring-primary/20 group-hover:ring-primary/40">
                  <span className="text-black font-bold text-5xl">E</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">Emile</h3>
                <div className="mb-6">
                  <p className="text-primary font-bold mb-2 text-xl">Executive Director</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  Emile leads our strategic vision and oversees all operations at Webbeezwork. With strong 
                  connections to European digital marketing experts, he ensures we maintain international 
                  standards while staying true to our social enterprise mission.
                </p>
              </div>
            </div>

            {/* Leadership Member 2 - Nellie */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 text-center hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-500 hover:scale-105 flex-shrink-0 lg:w-96 border border-gray-800 hover:border-purple-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-400 via-pink-400 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl group-hover:shadow-purple-400/40 transition-shadow duration-300 ring-4 ring-purple-400/20 group-hover:ring-purple-400/40">
                  <span className="text-white font-bold text-5xl">N</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Nellie</h3>
                <div className="mb-6">
                  <p className="text-purple-400 font-bold mb-2 text-xl">Operations Director</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  Nellie oversees daily operations and ensures seamless project delivery. Her focus on 
                  community impact and client satisfaction drives our commitment to excellence while 
                  maintaining our values of respect, care, and giving back to our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Webbeezwork boasts a talented, inclusive, and cohesive team, consisting of To Be Worldwide 
              alumni who have grown up together, played together, and worked together.
            </p>
          </div>

          {/* Team Grid - 5 members with Parker larger in center */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 lg:gap-4">
            {/* Team Member 1 - Isaac */}
            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105 flex-shrink-0 lg:w-64">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={Isaac} 
                  alt="Isaac - Digital Marketer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Isaac</h3>
              <p className="text-primary font-semibold mb-2">Digital Marketer</p>
              <p className="text-gray-400 text-sm">
                Experienced digital marketer specializing in online campaigns and digital strategy. 
                Isaac helps businesses grow their online presence through targeted marketing efforts.
              </p>
            </div>

            {/* Team Member 2 - Munira */}
            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105 flex-shrink-0 lg:w-64">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Munira</h3>
              <p className="text-primary font-semibold mb-2">Digital Marketer</p>
              <p className="text-gray-400 text-sm">
                Creative digital marketer specializing in content marketing and social media campaigns. 
                Munira develops engaging digital strategies that drive brand awareness and customer engagement.
              </p>
            </div>

            {/* Team Member 3 - Parker (Project Manager - Larger) */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 lg:w-80 lg:-mt-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-4xl">P</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Parker</h3>
              <p className="text-primary font-semibold mb-3 text-lg">Project Manager</p>
              <p className="text-gray-400 text-base">
                Experienced project manager coordinating all aspects of client projects from conception 
                to delivery. Parker ensures seamless execution and exceptional results for every campaign.
              </p>
            </div>

            {/* Team Member 4 - Ann */}
            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105 flex-shrink-0 lg:w-64">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={Ann} 
                  alt="Ann - Digital Marketer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ann</h3>
              <p className="text-primary font-semibold mb-2">Digital Marketer</p>
              <p className="text-gray-400 text-sm">
                Skilled digital marketer with expertise in SEO, social media marketing, and online advertising. 
                Ann helps businesses maximize their digital reach and achieve measurable results.
              </p>
            </div>

            {/* Team Member 5 - Austin (You) */}
            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105 flex-shrink-0 lg:w-64">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Austin</h3>
              <p className="text-primary font-semibold mb-2">Digital Marketer</p>
              <p className="text-gray-400 text-sm">
                Passionate digital marketer focused on innovative marketing strategies and client success. 
                Austin brings creative solutions to help businesses thrive in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Strategic Partnership</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            In partnership with <span className="text-primary font-semibold">Nextlane</span>, we deliver 
            comprehensive digital solutions that combine our local expertise with international standards.
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            <img
              src="/webbeezwork-logo.webp"
              alt="Webbeezwork Logo"
              className="h-16 sm:h-20 w-auto rounded shadow-lg ring-2 ring-primary/50"
            />
            <div className="text-primary font-bold text-3xl sm:text-4xl">×</div>
            <img
              src={nextlaneLogo}
              alt="Nextlane Logo"
              className="h-14 sm:h-16 w-auto rounded bg-white/10 p-2 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-gray-300">
              Creativity, innovation and collaboration drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Impact</h3>
              <p className="text-gray-400">
                Reinvesting profits into education and community development through 
                the To Be Worldwide foundation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                Access to advanced knowledge, expertise, and resources through our 
                European connections and expert training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">
                As one of the first digital agencies in Ghana and the foremost agency 
                in Takoradi, we pride ourselves on innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to work with{" "}
            <span className="text-primary">Ghana's first social enterprise</span>{" "}
            in digital marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our services and how we can assist 
            you in achieving your business goals.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-primary hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
