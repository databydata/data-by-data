import Link from 'next/link';
import { SAP_TM_MENU } from '@/config/menu';

export default function SAPTMHome() {
  return (
    <div className="space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <h1 className="text-4xl font-black tracking-tighter text-foreground">
          SAP TM <span className="text-brand-start">Technical Hub</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Deep dives into configuration, ABAP development, and system architecture. 
          Select a module to begin.
        </p>
      </div>

      {/* RESPONSIVE GRID SYSTEM 
         1. grid-cols-1 (Mobile)
         2. md:grid-cols-2 (Tablet)
         3. lg:grid-cols-3 (Desktop)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {SAP_TM_MENU.map((section) => (
          <div 
            key={section.group} 
            className="flex flex-col p-6 rounded-xl bg-card border border-border hover:border-brand-start/50 transition-all duration-300 group"
          >
            {/* Group Title */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground tracking-wide uppercase">
                {section.group}
              </h2>
              {/* Decorative dash that turns blue on hover */}
              <div className="w-8 h-1 bg-border group-hover:bg-brand-start transition-colors rounded-full" />
            </div>

            {/* List of Links */}
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={item.url}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all group/link"
                  >
                    {/* SVG ARROW ICON */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-3 h-3 text-brand-start opacity-0 group-hover/link:opacity-100 transition-opacity"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Footer of the Card */}
            <div className="mt-auto pt-6">
              <div className="text-xs font-mono text-muted-foreground/50">
                {section.items.length} TOPICS
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}