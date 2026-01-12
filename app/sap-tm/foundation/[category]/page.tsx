// app/sap-tm/foundation/[category]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
// Update this import path to match where your menu file actually is
import { FOUNDATION_MENU } from '@/config/menu'; 

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  // Find the group in your menu
  const groupData = FOUNDATION_MENU.find((g) => g.category === category);

  if (!groupData) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      {/* Header - Made more compact */}
      <div className="mb-8 border-b border-border/50 pb-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="text-brand-start">/</span>
          {groupData.group}
        </h1>
      </div>

      {/* GRID LAYOUT CHANGE:
        - grid-cols-1 (mobile) -> grid-cols-2 (tablet) -> grid-cols-3 (desktop)
        - gap-3 (tighter spacing)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {groupData.items.map((item) => (
          <Link
            key={item.slug}
            href={item.url}
            className="
              group flex items-center justify-between
              p-3 rounded-md
              bg-card border border-border
              hover:border-brand-start hover:bg-secondary/50
              transition-all duration-200
            "
          >
            {/* Left side: Text */}
            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-sm font-medium text-foreground truncate group-hover:text-brand-start transition-colors">
                {item.name}
              </span>
              {/* Optional: Very small slug text for technical context */}
              <span className="text-[10px] text-muted-foreground font-mono truncate opacity-60">
                {item.slug}
              </span>
            </div>

            {/* Right side: Subtle chevron icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4 text-muted-foreground/50 group-hover:text-brand-start group-hover:translate-x-1 transition-all"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}