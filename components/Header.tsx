import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-zinc-800 bg-zinc-950 text-zinc-100">
      <div className="text-xl font-bold tracking-tighter">
        <Link href="/" className="hover:text-blue-400 transition">Data/Data</Link>
      </div>
      <nav className="flex gap-6 text-sm font-medium uppercase tracking-wide">
        <Link href="/" className="hover:text-blue-400 transition text-zinc-400 hover:text-zinc-100">Portfolio</Link>
        <Link href="/sap-tm" className="hover:text-blue-400 transition text-zinc-400 hover:text-zinc-100">SAP TM</Link>
        <Link href="/about" className="hover:text-blue-400 transition text-zinc-400 hover:text-zinc-100">About</Link>
      </nav>
    </header>
  );
}