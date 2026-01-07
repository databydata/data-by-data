import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* Visual Element */}
      <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>

      {/* Content */}
      <h1 className="text-3xl md:text-4xl font-black text-zinc-100 tracking-tighter mb-4">
        UNDER CONSTRUCTION
      </h1>
      <p className="text-zinc-400 max-w-md mx-auto leading-relaxed mb-8">
        I am currently documenting my technical insights for this section. 
        Deep dives into SAP TM and development are coming your way very soon.
      </p>

      {/* Action */}
      <Link 
        href="/" 
        className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm font-bold rounded-lg hover:border-zinc-600 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}