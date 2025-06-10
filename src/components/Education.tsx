import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in CSE with specialization in AI & ML",
      institution: "VIT Bhopal University",
      location: "VIT, Bhopal",
      period: "2022 - 2026",
      type: "Graduation",
      status: "Current",
      // percentage: "7.6 CGPA"
    },
    {
      degree: "Class XII",
      institution: "Kalidas Montessori Senior Secondary School (KMSSS)",
      location: "Ujjain",
      period: "2022",
      type: "Higher Secondary",
      percentage: "82.2%"
    },
    {
      degree: "Class X",
      institution: "Kalidas Montessori Senior Secondary School (KMSSS)",
      location: "Ujjain",
      period: "2020",
      type: "Secondary",
      percentage: "83.4%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">

            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-600 to-orange-600 hidden md:block"></div>

            {education.map((item, index) => (
              <div key={index} className="relative mb-12 md:ml-16">

                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-slate-600 to-orange-600 rounded-full hidden md:block"></div>
                
                <div className="bg-ivory rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <GraduationCap className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {item.degree}
                  </h3>
                  
                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-medium">{item.institution}</span>
                    {item.location && <span className="ml-2">• {item.location}</span>}
                  </div>

                  {item.percentage && (
                    <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 mr-2 rounded-full text-sm font-semibold">
                      {item.percentage}
                    </div>
                  )}

                  {item.status && (
                    <div className="inline-block bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.status}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;