import {  Github, TrendingUp, Eye } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  color: string;
  featured: boolean;
  link: string; // Added project link prop
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Crypto Currency Price Predictor",
      description: "Built a machine learning model to predict Bitcoin prices by processing historical price data and relevant market indicators. This project helps understand cryptocurrency price movements and supports data-driven investment decisions through accurate predictions. The model was trained and validated to optimize accuracy and minimize prediction errors.",
      icon: <TrendingUp className="w-8 h-8" />,
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-Learn"],
      color: "from-orange-500 to-orange-600",
      featured: true,
      link: "https://github.com/aryanmandlik12/" 
    },
    {
      title: "Face Detection Tool",
      description: "Created a face detection tool using machine learning that identifies and locates faces in images or videos. This project can be applied in security systems, photo organization, and user authentication for enhanced convenience and safety. This project demonstrates practical use of ML in computer vision for enhancing safety and user experience.",
      icon: <Eye className="w-8 h-8" />,
      technologies: ["Python", "Computer Vision", "OpenCV", "Machine Learning", "Image Processing"],
      color: "from-slate-500 to-slate-600",
      featured: true,
      link: "https://github.com/aryanmandlik12/" 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore my latest projects showcasing practical applications of machine learning and AI technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6 text-ivory`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      {project.icon}
                    </div>
                    {project.featured && (
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/aryanmandlik12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-orange-600 text-ivory px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;