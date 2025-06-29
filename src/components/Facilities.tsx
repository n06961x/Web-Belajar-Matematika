
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Library, Users, Utensils, Car, Wifi, Shield } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Library,
      title: "Modern Library",
      description: "Extensive collection of Islamic and academic resources with digital access"
    },
    {
      icon: Users,
      title: "Prayer Hall",
      description: "Beautiful mosque facility for daily prayers and Islamic gatherings"
    },
    {
      icon: Utensils,
      title: "Halal Cafeteria",
      description: "Nutritious halal meals prepared with care and dietary considerations"
    },
    {
      icon: Car,
      title: "Safe Transportation",
      description: "Secure bus service covering major areas of the city"
    },
    {
      icon: Wifi,
      title: "Technology Labs",
      description: "State-of-the-art computer labs and high-speed internet connectivity"
    },
    {
      icon: Shield,
      title: "Secure Campus",
      description: "Safe and monitored environment with 24/7 security measures"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our modern campus provides students with excellent facilities that support 
            both academic learning and spiritual development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 border-emerald-100">
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                    <facility.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-800">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Experience Our Campus</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a visit to see our beautiful facilities and meet our dedicated faculty members.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-emerald-100">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
