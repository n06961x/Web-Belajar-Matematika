
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Education Street", "Islamic District", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nurislamichigh.edu", "admissions@nurislamichigh.edu"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 3:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join our school community? Contact us today to learn more about 
            admissions, programs, or to schedule a campus visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <info.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-lg text-gray-800">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location and Map Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our beautiful campus located in the heart of the Islamic District. 
              We're easily accessible by public transportation and have ample parking available.
            </p>
          </div>
          
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nur Islamic High School Location"
            ></iframe>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-emerald-100 rounded-full mb-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Easy Access</h4>
              <p className="text-sm text-gray-600">
                Located on main transportation routes with nearby bus and subway stations
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-emerald-100 rounded-full mb-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Parking Available</h4>
              <p className="text-sm text-gray-600">
                Free parking for visitors and families during school events
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-emerald-100 rounded-full mb-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Safe Neighborhood</h4>
              <p className="text-sm text-gray-600">
                Situated in a secure, family-friendly community environment
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Apply?</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Join our community of learners and embark on a journey of academic excellence 
                and spiritual growth. Our admissions team is here to guide you through every step.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold">
                  Start Application
                </Button>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 text-lg font-semibold">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80" 
                alt="School campus" 
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

export default Contact;
