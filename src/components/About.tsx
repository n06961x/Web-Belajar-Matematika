
import { Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Islamic Values",
      description: "Rooted in authentic Islamic teachings and character building"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "High-quality education preparing students for university and beyond"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building strong bonds within our diverse Muslim community"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students to be positive contributors worldwide"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nur Islamic High School combines traditional Islamic education with modern academic excellence, 
            creating an environment where students thrive academically, spiritually, and socially.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To provide a comprehensive Islamic education that nurtures the intellectual, spiritual, 
                and moral development of our students, preparing them to be confident, compassionate, 
                and contributing members of society.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Quranic Studies & Islamic Sciences</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Modern Academic Curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Character Development Programs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                alt="School building" 
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-emerald-600 opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
