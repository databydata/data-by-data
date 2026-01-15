import SideNav from '@/components/SideNav'; // Ensure this path matches where you saved your file

export default function FoundationLayout({ children }: { children: React.ReactNode }) {
  return (
    // CHANGE 1: Use 'flex-col' on mobile, 'flex-row' on desktop
    <div className="flex flex-col lg:flex-row w-full min-h-screen"> 
      
      <div className="w-full lg:w-64 shrink-0 lg:border-r border-border/50">

        <div className="relative lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:overflow-y-auto lg:overflow-x-hidden">
           <SideNav />
        </div>

      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-6 py-10 md:px-8">
          {children}
        </div>
      </main>

    </div>
  );
}