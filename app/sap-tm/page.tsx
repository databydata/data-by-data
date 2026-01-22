import Link from 'next/link';

const modules = [
  {
    title: 'Foundation',
    description: 'Master data, network setup, organizational hierarchy, and basic configuration settings.',
    href: '/sap-tm/foundation',
    // Using your 'secondary' color for the card background + subtle border
    className: 'hover:border-brand-start/50 hover:shadow-brand-start/10 hover:shadow-lg', 
  }
];

export default function SAPTMPage() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-foreground">
          SAP <span className="text-gradient">Transportation Management</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to the SAP TM documentation hub. Select a module below to explore configuration guides, technical details, and process flows.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((mod) => (
          <Link 
            key={mod.title} 
            href={mod.href}
            className={`
              group block p-8 rounded-xl border border-border bg-card 
              transition-all duration-300 relative overflow-hidden
              ${mod.className}
            `}
          >
            {/* Subtle Gradient Glow Effect on Hover (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-start/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors relative z-10">
              {mod.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              {mod.description}
            </p>
            
            <div className="mt-6 inline-flex items-center font-medium text-sm text-foreground group-hover:text-brand-start transition-colors relative z-10">
              Explore Module <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}