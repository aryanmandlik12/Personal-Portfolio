import { Code, Database, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "HTML", "CSS", "JavaScript", "ReactJS"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "ML Libraries",
      icon: <Database className="w-8 h-8" />,
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
      color: "from-slate-500 to-slate-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: ["Leadership", "Problem Solving", "Teamwork", "Team Management", "Public Relations"],
      color: "from-orange-600 to-slate-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-ivory rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-ivory mb-6 mx-auto`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-ivory rounded-lg p-3 shadow-sm border border-slate-100 text-center font-medium text-slate-700 hover:bg-orange-50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <div className="mt-16 bg-gradient-to-r from-slate-700 to-orange-600 rounded-2xl p-8 text-ivory text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Continuously expanding my knowledge in emerging technologies, staying updated with the latest 
              trends in AI/ML, and exploring new frameworks and tools to enhance my development capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;