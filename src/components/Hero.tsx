
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-slate-50 to-orange-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">

          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-orange-200">
              <img 
                src="./PROFILEPIC.jpg" 
                alt="AM" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-700 via-orange-600 to-slate-800 bg-clip-text text-transparent">
              Aryan Mandlik
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
            AI & Machine Learning Engineer
          </p>
          
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            B.Tech Student at VIT Bhopal specializing in Artificial Intelligence and Machine Learning. 
            Passionate about solving real-world problems through data-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-ivory rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/FinalResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:border-orange-600 hover:text-orange-600 transition-all duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block p-2 text-slate-400 hover:text-orange-600 transition-colors duration-200">
              <ChevronDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;