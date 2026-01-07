import Link from 'next/link';

export default function SideNav() {
  const menuItems = [
    {
      group: "Foundation",
      items: [
        { name: "Master Data", slug: "master-data" },
        { name: "Org Units", slug: "org-units" },
        { name: "Network Setup", slug: "network" },
      ]
    },
    {
      group: "Order Management",
      items: [
        { name: "Freight Units", slug: "freight-units" },
        { name: "Planning basics", slug: "planning" },
      ]
    },
    {
      group: "Resources",
      items: [
        { name: "Course Blog", slug: "course-blog" },
      ]
    }
  ];

  return (
    <aside className="w-64 border-r border-zinc-800 h-screen sticky top-0 p-6 bg-zinc-950 hidden md:block overflow-y-auto">
      <div className="space-y-8">
        {menuItems.map((section) => (
          <div key={section.group}>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
              {section.group}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/sap-tm/${section.group.toLowerCase().replace(/ /g, '-')}/${item.slug}`}
                    className="text-sm text-zinc-400 hover:text-blue-400 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}