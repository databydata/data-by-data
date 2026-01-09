import SideNav from "@/components/SideNav";

export default function SapTmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row bg-zinc-950 min-h-screen">
      <SideNav />
      <main className="flex-1 w-full">
        <div className="max-w-5xl mx-auto px-6 py-8 md:px-12">
        {children}
        </div>
      </main>
    </div>
  );
}