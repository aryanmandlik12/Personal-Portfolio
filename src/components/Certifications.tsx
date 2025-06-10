import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      provider: "Udemy",
      description: "Gained hands-on experience in Python for data analysis, visualization, and machine learning using essential libraries and real-world projects.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization"],
      color: "from-orange-500 to-orange-600",
      certificateLink: "https://www.udemy.com/"
    },
    {
      title: "ChatGPT & Artificial Intelligence for Microsoft Excel",
      provider: "Udemy",
      description: "Acquired proficiency in leveraging AI for data analysis and automation. This certification complements my analytical skills and enhances my ability to streamline data-related tasks, significantly improving my efficiency in data manipulation and interpretation.",
      skills: ["AI Integration", "Excel Automation", "Data Analysis", "Process Optimization"],
      color: "from-slate-500 to-slate-600",
      certificateLink: "https://www.udemy.com/"
    },
    {
      title: "Python Essentials",
      provider: "VITyarthi",
      description: "Bolstered my programming skills with comprehensive Python training. This certification demonstrates my ability to develop efficient and reliable code, essential for various software development tasks.",
      skills: ["Python Programming", "Software Development", "Code Optimization", "Problem Solving"],
      color: "from-orange-600 to-slate-600",
      certificateLink: "https://www.udemy.com/"
    },
    {
      title: "Microsoft PowerPoint From Beginner to Advanced",
      provider: "Udemy",
      description: "Honed my presentation design and visual communication skills. This training directly enhances my ability to create compelling presentations, a valuable asset in both educational and professional endeavors.",
      skills: ["Presentation Design", "Visual Communication", "Content Creation", "Professional Presentations"],
      color: "from-slate-600 to-orange-500",
      certificateLink: "https://www.udemy.com/"
    },
    {
      title: "HTML5, CSS3, & JavaScript Course",
      provider: "Udemy",
      description: "Enhanced my front-end development skills with comprehensive web development training. This certification solidifies my ability to create interactive and responsive web applications.",
      skills: ["HTML5", "CSS3", "JavaScript", "Web Development", "Responsive Design"],
      color: "from-orange-500 to-slate-500",
      certificateLink: "https://www.udemy.com/"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning through professional certifications and specialized courses
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-ivory`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                      Certified
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{cert.provider}</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-800 mb-3 uppercase tracking-wide">
                      Skills Acquired:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-r from-slate-700 to-orange-600 rounded-2xl p-8 text-ivory text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Commitment to Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies and industry trends. 
              These certifications represent my dedication to professional growth and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;