import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400 py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding/Copyright */}
        <div className="text-center md:text-left">
          <p className="font-bold text-zinc-100 text-lg uppercase tracking-tight">
            Data/Data
          </p>
          <p className="text-sm mt-1">
            © {currentYear} Data-by-Data. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex gap-6 text-sm font-medium uppercase tracking-wide">
          <Link href="/sap-tm" className="hover:text-blue-400 transition">SAP TM</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="mailto:vaibhavsingh1008@gmail.com" className="hover:text-blue-400 transition">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a 
            href="https://linkedin.com/in/vaibhav-pratap-singh-a015b61aa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-sm hover:border-blue-500 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-sm hover:border-red-500 hover:text-red-400 transition"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}