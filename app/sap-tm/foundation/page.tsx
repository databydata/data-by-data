import Link from 'next/link';

const levels = [
  {
    title: 'Basic Setup',
    id: 'basic',
    description: 'Core master data including Locations, Business Partners, Products, and essential organizational hierarchy definitions.',
    href: '/sap-tm/foundation/basic',
    // Gradient hint: Cyan (brand-start)
    borderColor: 'hover:border-brand-start',
    gradientColor: 'from-brand-start/10',
  },
  {
    title: 'Moderate Configuration',
    id: 'moderate',
    description: 'Network connectivity features such as Transportation Lanes, Zones, Schedules, and Means of Transport hierarchies.',
    href: '/sap-tm/foundation/moderate',
    // Gradient hint: A blend or mid-tone
    borderColor: 'hover:border-blue-500', 
    gradientColor: 'from-blue-500/10',
  },
  {
    title: 'Advanced Scenarios',
    id: 'advanced',
    description: 'Complex modeling including Optimizer settings, GIS integration, Dangerous Goods, and incompatible coupling logic.',
    href: '/sap-tm/foundation/advance',
    // Gradient hint: Blue (brand-end)
    borderColor: 'hover:border-brand-end',
    gradientColor: 'from-brand-end/10',
  }
];

export default function FoundationPage() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
          Foundation <span className="text-gradient">Master Data</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The backbone of SAP Transportation Management. Configure your network elements, master data objects, and core logic parameters here.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Link 
            key={level.id} 
            href={level.href}
            className={`
              group flex flex-col p-8 rounded-xl border border-border bg-card 
              transition-all duration-300 relative overflow-hidden
              ${level.borderColor} hover:shadow-lg hover:-translate-y-1
            `}
          >
            {/* Subtle Gradient Glow from Top */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${level.gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                  {level.id} Level
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {level.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {level.description}
              </p>
              
              <div className="mt-8 pt-4 border-t border-border group-hover:border-muted flex items-center justify-between">
                <span className="text-sm font-medium text-foreground group-hover:text-brand-start transition-colors">
                  View Topics
                </span>
                <span className="text-lg text-muted-foreground group-hover:text-brand-start group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}