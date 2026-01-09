// Correct Import
import Image from 'next/image'; 
import Link from 'next/link';
import { MAIN_NAV_LINKS } from '@/config/menu';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-border bg-background">
      
      {/* THE IMAGE LOGO */}
      <div className="flex items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png"  
            alt="Data by Data Logo"
            width={40}              
            height={40}             
            className="w-auto h-10" 
            priority                
          />
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="flex gap-6 text-sm font-medium uppercase tracking-wide">
        {MAIN_NAV_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-muted-foreground hover:text-brand-start transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}