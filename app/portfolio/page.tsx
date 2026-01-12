
import Link from 'next/link';
import { EXPERIENCE, EDUCATION } from '@/config/WorkExperience';

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-10">

      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 flex flex-col">

        {/* 1. Animated Badge */}
        <div className="mb-8 w-fit">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-start/10 border border-brand-start/20 text-brand-start text-xs font-mono font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-start opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-start"></span>
            </span>
            BUSINESS CONSULTANT <span className='text-foreground'>(Beta Version)</span>
          </div>
        </div>

        <div className="space-y-2">
          {/* 2. Main Headline */}
          <h1 className="text-5xl sm:text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[1.1]">
            Hey, I&apos;m <span className="text-brand-start">Vaibhav</span>.
            <br />
            <span className="text-muted-foreground block mt-1 md:mt-2">
              Trying to configure my life,
            </span>

            {/* 3. The "T-Code" Feature Line */}
            <span className="flex flex-wrap items-center gap-x-2 md:gap-x-3 mt-1">
              one
              <span className="inline-block font-mono text-2xl sm:text-3xl md:text-6xl bg-secondary/80 text-foreground px-2 md:px-4 py-1 rounded-lg border border-border border-b-2 md:border-b-4 translate-y-[-2px]">
                /T-code
              </span>
              at a time.
            </span>
          </h1>

          {/* 4. Subtext */}
          <p className="max-w-2xl text-lg md:text-lg text-muted-foreground leading-relaxed italic">
            <span className="text-foreground font-medium">Technical SAP TM Consultant</span> & maybe a Full Stack Developer.
            Bridging the gap between complex supply chain processes and modern web architecture.
          </p>
        </div>

        {/* 4. HERO CTAs (The Buttons) */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">

          {/* Primary Button: Resume */}
          <a
            href="/resume.pdf"
            className="px-8 py-3 md:py-4 bg-foreground text-background font-bold rounded-lg hover:bg-brand-start hover:text-white transition-all text-center text-sm md:text-base"
          >
            Download Resume
          </a>


          <a
            href="mailto:vaibhavsingh1008@gmail.com"
            className="px-8 py-3 md:py-4 bg-transparent border border-border text-foreground font-bold rounded-lg hover:border-brand-start transition-all text-center flex items-center justify-center gap-2 group text-sm md:text-base"
          >
            Say Hello
          </a>

          {/* Secondary Button: Links to SAP Notes */}
          <Link
            href="/sap-tm"
            className="px-8 py-3 md:py-4 bg-transparent border border-border text-foreground font-bold rounded-lg hover:border-brand-start transition-all text-center flex items-center justify-center gap-2 group text-sm md:text-base"
          >
            Read my Notes
            {/* Tiny Arrow Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>

      </section>

      {/* Work Experience */}
      <section className='max-w-4xl mx-auto py-16 px-5 md:px-6' id='experience'>
        <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-foreground">
            01. <span className="text-brand-start">Experience</span>
          </h2>
          <div className="h-px bg-border flex-1" /> {/* Horizontal Line */}
        </div>
        <div className="relative border-l-2 border-border/50 ml-2 md:ml-6 space-y-12 md:space-y-20">
          {
            EXPERIENCE.map((job, index: number) => {
              const isCurrent = index === 0;

              return (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-background bg-brand-start transition-transform group-hover:scale-110 duration-300 ${isCurrent ? 'bg-brand-start shadow-[0_0_10px_rgba(56,189,248,0.5)]' : 'bg-muted-foreground/30 group-hover:bg-brand-start'
                    }`} />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 md:mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold text-foreground leading-tight">
                        {job.company}
                        {/* The "Latest" Badge */}
                        {isCurrent && (
                          <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-start/10 text-brand-start border border-brand-start/20 uppercase tracking-widest">
                            Current
                          </span>
                        )}
                      </h3>
                      <div className="text-base md:text-xl font-medium text-brand-start mt-1">
                        {job.title}
                      </div>
                    </div>

                    <span className="font-mono text-[10px] md:text-sm text-muted-foreground/80 whitespace-nowrap bg-secondary/50 px-2 py-1 md:px-3 rounded self-start mt-1 sm:mt-0">
                      {job.date}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed max-w-2xl text-sm md:text-lg">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 md:space-y-3 mb-6">
                    {job.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-muted-foreground/90">
                        <span className="mt-1.5 md:mt-2 h-1.5 w-1.5 rounded-full bg-brand-start shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium text-brand-start bg-brand-start/10 border border-brand-start/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {job.projects && job.projects.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-border/50">
                      <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                        Key Projects
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {job.projects.map((project, pIndex) => (
                          <div
                            key={pIndex}
                            className="p-4 bg-secondary/20 rounded-lg border border-border hover:border-brand-start/50 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-bold text-foreground text-sm">
                                {project.name}
                              </span>
                              <span className="text-[10px] bg-brand-start/10 text-brand-start px-2 py-0.5 rounded border border-brand-start/20">
                                {project.role}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground pb-2 leading-relaxed">
                              {project.desc}
                            </p>
                            <p className="text-xs text-foreground leading-relaxed">
                              {project.date}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );

            })
          }
        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto py-20 px-6" id="education">

        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-foreground">
            02. <span className="text-brand-start">Education</span>
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-border/50 ml-3 md:ml-6 space-y-20">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">

              {/* Timeline Dot (Static Brand Color) */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-background bg-brand-start transition-transform group-hover:scale-110 duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div>
                  {/* Degree Name */}
                  <h3 className="text-xl md:text-3xl font-bold text-foreground leading-tight">
                    {edu.degree}
                  </h3>
                  {/* Institution Name */}
                  <div className="text-base md:text-xl font-medium text-brand-start mt-1">
                    {edu.institution}
                  </div>
                </div>

                {/* Date Badge */}
                <span className="font-mono text-[10px] md:text-sm text-muted-foreground/80 whitespace-nowrap bg-secondary/50 px-2 py-1 md:px-3 rounded self-start mt-1 sm:mt-0">
                  {edu.date}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed max-w-2xl text-sm md:text-lg">
                {edu.description}
              </p>

              {/* Coursework Tags (styled like your Tech Stack chips) */}
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((subject) => (
                  <span
                    key={subject}
                    className="px-3 py-1 text-[10px] md:text-xs font-medium text-muted-foreground bg-secondary/30 border border-border rounded-full"
                  >
                    {subject}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-4xl mx-auto py-24 px-6 mb-12" id="contact">

        {/* 2. Context Text: Why should they click? */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Get in Touch
          </h3>

          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            I am currently open to discussing new opportunities or SAP TM consulting projects.
            Whether you have a question or just want to say hi, my inbox is open!
          </p>

          {/* 3. The Buttons (Your existing code, just wrapped properly) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:vaibhavsingh1008@gmail.com"
              className="px-8 py-3 md:py-4 bg-foreground text-background font-bold rounded-lg hover:bg-brand-start hover:text-white transition-all text-center text-sm md:text-base"
            >
              Say Hello
            </a>

            <Link
              href="/sap-tm"
              className="px-8 py-4 bg-transparent border border-border text-foreground font-bold rounded-lg hover:border-brand-start transition-all text-center flex items-center justify-center gap-2 group"
            >
              Read my Notes
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

      </section>



    </div>
  );
}