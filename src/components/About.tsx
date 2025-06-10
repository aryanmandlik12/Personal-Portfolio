import { Brain, Code, Database, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Expertise",
      description: "Specialized in machine learning algorithms and artificial intelligence applications"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in Python, JavaScript, React, and modern web technologies"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Experienced with NumPy, Pandas, Matplotlib, Seaborn, and Scikit-Learn"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Strong analytical thinking and innovative approach to complex challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-slate-50 rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              As a B.Tech student specializing in Artificial Intelligence and Machine Learning at VIT Bhopal 
              (graduating in 2026), I am passionate about solving real-world problems through data-driven solutions. 
              I have hands-on experience building ML models for tasks like cryptocurrency price prediction and face detection.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm actively seeking opportunities in ML and data science where I can apply my technical skills, 
              learn from industry leaders, and contribute to impactful, scalable solutions. My goal is to bridge 
              the gap between theoretical knowledge and practical applications in the field of artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-ivory rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="text-orange-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;