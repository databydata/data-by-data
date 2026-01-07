import SideNav from "@/components/SideNav";

export default function SapTmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-zinc-950 min-h-screen">
      <SideNav />
      <main className="flex-1 p-8 md:p-12 text-zinc-100">
        {children}
      </main>
    </div>
  );
}