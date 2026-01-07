import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-8 max-w-5xl mx-auto">
      
      {/* Introduction */}
      <section className="space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
          SAP TM Consultant & Developer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-zinc-100 tracking-tighter leading-none">
          VAIBHAV <span className="text-zinc-500">SINGH</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
          I simplify complex logistics data into actionable technical insights. 
          Expert in <span className="text-zinc-100">SAP Transportation Management</span> and Full Stack Web Systems.
        </p>

        {/* Primary Actions */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link 
            href="/sap-tm" 
            className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-lg hover:bg-blue-400 transition-colors"
          >
            Read Technical Blog
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-4 bg-zinc-900 text-zinc-100 border border-zinc-800 font-bold rounded-lg hover:border-zinc-600 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Areas (Quick Links) */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-900 pt-12">
        <div>
          <h3 className="text-zinc-100 font-bold mb-2">Foundation</h3>
          <p className="text-zinc-500 text-sm">Master Data, Org Units, and Network setup guides.</p>
        </div>
        <div>
          <h3 className="text-zinc-100 font-bold mb-2">Order Mgmt</h3>
          <p className="text-zinc-500 text-sm">Deep dives into Freight Units and Order lifecycles.</p>
        </div>
        <div>
          <h3 className="text-zinc-100 font-bold mb-2">Development</h3>
          <p className="text-zinc-500 text-sm">React, Next.js, and Full Stack integration tips.</p>
        </div>
      </section>
      
    </div>
  );
}