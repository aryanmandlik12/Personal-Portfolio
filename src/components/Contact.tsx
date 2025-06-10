import  { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mandlikaryan1@gmail.com",
      link: "mailto:mandlikaryan1@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7400888060",
      link: "tel:+917400888060"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "VIT Bhopal, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/aryanmandlik12",
      color: "hover:text-slate-800"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/aryan-mandlik",
      color: "hover:text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-orange-600 rounded-lg flex items-center justify-center text-ivory mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-600 hover:text-orange-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 ${social.color} transition-all duration-200 hover:shadow-lg transform hover:scale-105`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Ready to collaborate?</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
                  I'd love to hear from you!
                </p>
                <a
                  href="mailto:mandlikaryan1@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-orange-600 text-ivory px-4 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Mail size={16} />
                  Send Email
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-100 to-slate-200 flex items-center justify-center mb-8 shadow-lg">
                <Mail className="w-24 h-24 text-orange-500" />
              </div>
              <blockquote className="italic text-slate-600 text-center text-lg max-w-xs">
                "Turning data into decisions, and algorithms into action."
                <br />
                <span className="block mt-2 text-slate-400 text-sm">– Aryan Mandlik</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;