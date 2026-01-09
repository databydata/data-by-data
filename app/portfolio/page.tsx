import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-10">
      
      {/* 1. HERO SECTION (Left Aligned like the "Jackson" template) */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          TECHNO FUNCTIONAL CONSULTANT
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">
            Hey, I'm Vaibhav.
            <br />
            <span className="text-muted-foreground">I engineer </span>
            <span className="text-gradient">logistics data.</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Technical SAP TM Consultant & Full Stack Developer. I bridge the gap 
            between complex supply chain processes and modern web architecture.
          </p>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/sap-tm" 
            className="px-6 py-3 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Explore Technical Hub
          </Link>
          <Link 
            href="/about" 
            className="px-6 py-3 bg-secondary border border-border text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      <hr className="border-border" />

      {/* 2. DASHBOARD GRID (Replacing the small links with big Cards) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Technical Modules</h2>
          <span className="text-xs text-muted-foreground font-mono">INDEX: 01</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Foundation */}
          <Link href="/sap-tm/foundation" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Foundation</h3>
              <p className="text-sm text-muted-foreground mt-2">Master Data, Org Units, and Network setup guides.</p>
            </div>
          </Link>

          {/* Card 2: Order Management */}
          <Link href="/sap-tm/order-management" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Order Mgmt</h3>
              <p className="text-sm text-muted-foreground mt-2">Deep dives into Freight Units, FOs, and life-cycle management.</p>
            </div>
          </Link>

          {/* Card 3: Development */}
          <Link href="/sap-tm/development" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Development</h3>
              <p className="text-sm text-muted-foreground mt-2">BOPF, ABAP integration, and React frontend connections.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. LATEST THOUGHTS (The List View from the image) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Recent Notes</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">View all →</Link>
        </div>
        
        <div className="grid gap-4">
          {[
            { title: "Understanding the BOPF Architecture", cat: "Technical", date: "Jan 12" },
            { title: "Debugging FUs that won't plan", cat: "Troubleshooting", date: "Jan 08" },
            { title: "Setting up your first Freight Order Type", cat: "Config", date: "Jan 05" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-xs font-mono text-muted-foreground group-hover:text-foreground">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-brand-start transition-colors">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.cat}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}