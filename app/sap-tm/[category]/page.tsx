import { redirect, notFound } from 'next/navigation';
import { SAP_TM_MENU } from '@/config/menu';

// Helper to match "Foundation" with "foundation"
const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  // 1. Find the matching group (e.g., Foundation)
  const currentGroup = SAP_TM_MENU.find(
    (section) => normalize(section.group) === normalize(category)
  );

  // 2. Safety Check: If category doesn't exist, show 404
  if (!currentGroup) {
    return notFound();
  }

  // 3. Check if the group has any items
  if (currentGroup.items.length > 0) {
    // 4. GRAB THE FIRST ITEM AND REDIRECT
    const firstItem = currentGroup.items[0];
    
    // Redirects immediately to e.g., "/sap-tm/foundation/enterprise-structure"
    redirect(firstItem.url); 
  }

  // 5. Fallback if the group exists but is empty (no items yet)
  return (
    <div className="p-12 text-center">
      <p className="text-muted-foreground">This section is under construction.</p>
    </div>
  );
}