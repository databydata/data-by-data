import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand */}
        <div className="space-y-1">
          <h3 className="font-bold text-foreground tracking-tighter">DATA/DATA</h3>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Data-by-Data. All rights reserved.
          </p>
        </div>

        {/* Center: Navigation */}
        <nav className="flex gap-8 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <Link href="/sap-tm" className="hover:text-foreground transition-colors">SAP TM</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>

        {/* Right Side: Socials */}
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-secondary border border-border rounded text-xs hover:bg-muted transition-colors">
            LinkedIn
          </a>
          <a href="#" className="px-4 py-2 bg-secondary border border-border rounded text-xs hover:bg-muted transition-colors">
            YouTube
          </a>
        </div>

      </div>
    </footer>
  );
}