import { Briefcase, Calendar, MapPin, Users, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Operational Manager",
      organization: "Metaversity Club, VIT Bhopal University",
      period: "Current",
      type: "Leadership Role",
      description: "As the Operational Manager at Metaversity Club, VIT Bhopal University, I focused on the effective execution of club operations. My responsibilities included strategic planning, team leadership, and event coordination. I utilized organizational and communication skills to enhance club activities and ensure a positive experience for all members.",
      skills: ["Strategic Planning", "Team Leadership", "Event Coordination", "Communication"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Event Team Lead",
      organization: "AI Club, VIT Bhopal University",
      period: "2023-2024",
      type: "Leadership Role",
      description: "As Event Team Lead at the AI Club, VIT Bhopal University, I directed event planning and execution, facilitating workshops and seminars. I honed my leadership and organizational skills by coordinating team efforts and managing event logistics, ensuring seamless operations and impactful outcomes.",
      skills: ["Event Planning", "Team Coordination", "Workshop Facilitation", "Logistics Management"],
      color: "from-slate-500 to-slate-600"
    },
    {
      title: "Event Team Member",
      organization: "AI Club, VIT Bhopal University",
      period: "2022-2023",
      type: "Team Member",
      description: "As an Event Team Member at the AI Club, VIT Bhopal University, I contributed to the planning and execution of diverse events. My responsibilities included coordinating logistics, managing participant engagement, and supporting event operations. Through these activities, I developed teamwork and communication skills while assisting in the successful delivery of club events.",
      skills: ["Event Support", "Logistics Coordination", "Participant Engagement", "Teamwork"],
      color: "from-orange-600 to-slate-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My journey in leadership and team collaboration through various roles in university clubs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-600 to-orange-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                
                <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-slate-600 to-orange-600 rounded-full hidden md:block"></div>
                
                <div className="bg-gradient-to-br from-slate-50 to-ivory rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center text-ivory mr-4`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                        <div className="flex items-center text-slate-600 mt-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.organization}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <span className={`bg-gradient-to-r ${exp.color} text-ivory px-3 py-1 rounded-full text-sm font-semibold`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Key Skills Developed:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-ivory border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:border-orange-300 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-700 to-orange-600 rounded-2xl p-8 text-ivory text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Leadership Journey</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Through my roles in university clubs, I've developed strong leadership, organizational, 
              and communication skills while contributing to the AI and technology community at VIT Bhopal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;