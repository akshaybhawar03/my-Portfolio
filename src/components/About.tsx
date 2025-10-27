import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-400 mx-auto"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-amber-400/20 p-1 sm:h-80 sm:w-80">
              <div className="h-full w-full overflow-hidden rounded-full bg-slate-700">
                <Image
                src="/my pic/my img 2.png"
                alt="Akshay Bhawar"
                width={320}
                height={320}
                className="h-full w-full object-cover"
                priority
              />
              </div>
              <div className="absolute -right-2 -top-2 h-16 w-16 animate-ping rounded-full bg-amber-400/30"></div>
            </div>
            
            <div className="mt-8 flex justify-center space-x-4">
              <a 
                href="#" 
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a 
                href="https://github.com/akshaybhawar03" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/akshay-bhawar-5a7848291?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO7I2%2BsmZToaKOLnBz9l5Yg%3D%3D"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:py-8">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Full Stack Developer & UI/UX Enthusiast
            </h3>
            
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                Hello! I'm Akshay Bhawar, a passionate Full Stack Developer who loves crafting beautiful, functional, and user-focused digital experiences. With expertise across both front-end and back-end development, I transform ideas into interactive, high-performance applications through clean and efficient code.
              </p>
              <p>
                My journey into web development began with simple curiosity about how things work behind the scenes. Since then, I’ve developed a deep appreciation for writing elegant code and building seamless, accessible, and scalable web solutions using modern technologies and frameworks.
              </p>
              <p>
                Beyond coding, I enjoy exploring emerging technologies, contributing to open-source projects, and sharing knowledge with the developer community. I’m always eager to learn, grow, and create tools that make a meaningful impact.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'REST APIs', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-sm font-medium text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
