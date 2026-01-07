import Link from 'next/link';

export default function SapTmPage() {
  const modules = [
    {
      title: "Foundation & Master Data",
      description: "Explore the core building blocks: Organizational units, Business Partners, and Network setup.",
      link: "/sap-tm/foundation",
      count: "12 Posts"
    },
    {
      title: "Order Management",
      description: "Deep dive into OTR, DTR, Freight Units, and the lifecycle of a transportation requirement.",
      link: "/sap-tm/order-management",
      count: "8 Posts"
    },
    {
      title: "Course Blog",
      description: "Personal insights, tutorial series, and updates on my latest SAP TM learning journey.",
      link: "/sap-tm/course-blog",
      count: "5 Posts"
    }
  ];

  return (
    <div className="space-y-10 max-w-5xl">
      {/* Header Section */}
      <section>
        <h1 className="text-4xl font-black text-zinc-100 mb-4 tracking-tighter">SAP TM TECHNICAL HUB</h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          Detailed technical documentation and consulting insights for SAP Transportation Management. 
          Select a module below to start exploring technical deep-dives.
        </p>
      </section>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Link 
            key={module.title} 
            href={module.link}
            className="group block p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{module.count}</span>
              <svg className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
              {module.title}
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {module.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}