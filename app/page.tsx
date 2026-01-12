import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-10">

      {/* 1. HERO SECTION */}
      <section className="space-y-6">
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
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">
            Welcome to DATA / DATA.
            <br />
            <span className="text-muted-foreground">SAP TM </span>
            <span className="text-gradient">Knowledge Base.</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground italic">
            I meant to <span className='text-brand-start'>git commit</span> to a private repo, but my coffee had other plans. Welcome to my public brain dump.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/sap-tm"
            className="px-8 py-3 md:py-4 bg-foreground text-background font-bold rounded-lg hover:bg-brand-start hover:text-white transition-all text-center text-sm md:text-base"
          >
            Explore SAP TM
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3 md:py-4 bg-transparent border border-border text-foreground font-bold rounded-lg hover:border-brand-start transition-all text-center flex items-center justify-center gap-2 group text-sm md:text-base"
          >
            My Portfolio
            {/* Tiny Arrow Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <hr className="border-border" />

      {/* Cards Section 1 */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Sections</h2>
          <span className="text-xs text-muted-foreground font-mono">INDEX</span>
        </div>

        {/* Cards Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Foundation */}
          <Link href="/sap-tm/foundation" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Foundation</h3>
              <p className="text-sm text-muted-foreground mt-2">Master Data and Org Units</p>
            </div>
          </Link>

          {/* Card 2: Order Management */}
          <Link href="/sap-tm/order-management" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Order Management</h3>
              <p className="text-sm text-muted-foreground mt-2">Deep dives into Freight Units, FOs, and life-cycle management.</p>
            </div>
          </Link>

          {/* Card 3: Planning & Optimization */}
          <Link href="/sap-tm/planning" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-10.5v.115m-6 .115V3m6 1.5V18m-6-5.25v.115m6-1.115V21m-6-4.5v.115" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h.115c.621 0 1.125.504 1.125 1.125v.115c0 .621-.504 1.125-1.125 1.125h-.115C3.504 14.25 3 13.746 3 13.125Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Planning & Optimization</h3>
              <p className="text-sm text-muted-foreground mt-2">Automating route scheduling and load consolidation strategies.</p>
            </div>
          </Link>
        </div>

        {/* Cards Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Freight Execution */}
          <Link href="/sap-tm/foundation" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Freight Execution</h3>
              <p className="text-sm text-muted-foreground mt-2">Managing Freight Order lifecycle, events, and carrier outputs.</p>
            </div>
          </Link>

          {/* Card 2: Charge Management & Settlement */}
          <Link href="/sap-tm/order-management" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75m0 3v.75m0 3v.75m0 3v.75m0 3V15h16.5V4.5h-16.5ZM12 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 18.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Charge & Settlement</h3>
              <p className="text-sm text-muted-foreground mt-2">Configuring agreements, rate tables, and cost distribution.</p>
            </div>
          </Link>

          {/* Card 3: Development */}
          <Link href="/sap-tm/development" className="group block space-y-4 p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all">
            <div className="h-10 w-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Integration</h3>
              <p className="text-sm text-muted-foreground mt-2">Seamless data exchange between TM, ERP, and EWM ecosystems.</p>
            </div>
          </Link>
        </div>
      </section>


      {/* Recent Notes */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Recent Notes</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">View all →</Link>
        </div>

        {/* <div className="grid gap-4">
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
        </div> */}
      </section>

    </div>
  );
}