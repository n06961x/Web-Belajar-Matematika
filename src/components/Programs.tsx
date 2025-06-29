
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, FlaskConical, Languages, Palette, Dumbbell } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Islamic Studies",
      description: "Comprehensive Quranic studies, Hadith, Fiqh, and Islamic history",
      subjects: ["Quran & Tajweed", "Hadith Studies", "Islamic Jurisprudence", "Sirah"]
    },
    {
      icon: Calculator,
      title: "Mathematics & Sciences",
      description: "Advanced STEM curriculum preparing students for higher education",
      subjects: ["Advanced Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
      icon: Languages,
      title: "Languages",
      description: "Multilingual education including Arabic, English, and local languages",
      subjects: ["Arabic Language", "English Literature", "Islamic Classical Texts", "Public Speaking"]
    },
    {
      icon: Palette,
      title: "Arts & Culture",
      description: "Creative expression through Islamic art, calligraphy, and cultural studies",
      subjects: ["Islamic Calligraphy", "Islamic Art History", "Creative Writing", "Cultural Studies"]
    },
    {
      icon: FlaskConical,
      title: "Technology & Innovation",
      description: "Modern technology skills for the digital age",
      subjects: ["Computer Science", "Digital Literacy", "Research Methods", "Innovation Labs"]
    },
    {
      icon: Dumbbell,
      title: "Physical Education",
      description: "Healthy lifestyle and sports within Islamic guidelines",
      subjects: ["Physical Fitness", "Team Sports", "Health Education", "Outdoor Activities"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum balances Islamic education with modern academic subjects, 
            ensuring students receive a well-rounded education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                    <program.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-center text-gray-800">{program.title}</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {program.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
