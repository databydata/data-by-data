import Link from 'next/link';

export default function FoundationListingPage() {
  // These represent the posts you'll be writing
  const posts = [
    {
      title: "Master Data Overview",
      slug: "master-data",
      description: "Understanding the difference between General and TM-specific Master Data.",
      date: "Jan 2026"
    },
    {
      title: "Organizational Units",
      slug: "org-units",
      description: "Setting up Purchase Orgs, Sales Orgs, and Planning Groups in TM.",
      date: "Jan 2026"
    },
    {
      title: "Network Setup",
      slug: "network",
      description: "Configuring Locations, Zones, and Lanes for transportation routing.",
      date: "Feb 2026"
    }
  ];

  return (
    <div className="max-w-4xl space-y-10">
      {/* Breadcrumb / Category Header */}
      <header className="space-y-2">
        <Link href="/sap-tm" className="text-blue-400 text-sm font-medium hover:underline flex items-center gap-2">
          ← Back to SAP TM Hub
        </Link>
        <h1 className="text-4xl font-black text-zinc-100 tracking-tighter">Foundation & Master Data</h1>
        <p className="text-zinc-400 text-lg">The architectural core of any SAP TM implementation.</p>
      </header>

      {/* Post List */}
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/sap-tm/foundation/${post.slug}`}
            className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 hover:border-blue-500/50 transition-all"
          >
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-sm">{post.description}</p>
              </div>
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest px-3 py-1 bg-zinc-800 rounded-full">
                {post.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}