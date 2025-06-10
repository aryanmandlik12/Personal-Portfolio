import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-ivory py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
     
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mb-4">
              Aryan Mandlik
            </h3>
            <p className="text-slate-400 leading-relaxed">
              AI & Machine Learning Engineer passionate about creating innovative solutions 
              and contributing to the future of technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#education', label: 'Education' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-ivory transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:mandlikaryan1@gmail.com"
                className="flex items-center text-slate-400 hover:text-ivory transition-colors duration-200"
              >
                <Mail size={16} className="mr-3" />
                mandlikaryan1@gmail.com
              </a>
              <p className="flex items-center text-slate-400">
                <span className="w-4 h-4 mr-3"></span>
                VIT Bhopal, India
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/aryanmandlik12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-ivory hover:bg-slate-700 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aryan-mandlik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-ivory hover:bg-slate-700 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mandlikaryan1@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-ivory hover:bg-slate-700 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © {currentYear} Aryan Mandlik. Made with 
            <Heart size={16} className="text-orange-500" /> 
            and lots of coffee.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;