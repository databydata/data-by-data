"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FOUNDATION_MENU, ORDER_MANAGEMENT_MENU } from '@/config/menu';
import { usePathname } from 'next/navigation';


export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const activeMenu = useMemo(() => {
    if (pathname.startsWith('/sap-tm/order-management')) {
      return ORDER_MANAGEMENT_MENU;
    }
    if (pathname.startsWith('/sap-tm/foundation')) {
      return FOUNDATION_MENU;
    }
    // Default fallback (optional: return empty array or a default menu)
    return FOUNDATION_MENU;
  }, [pathname]);

  return (
    <>
      {/* 1. MOBILE TOP BAR - Now pinned to the top right */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-[60] w-full">
        <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
          SAP TM Menu
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 border border-border rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* 2. BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. THE ASIDE (Drawer) */}
      <aside className={`
        fixed inset-y-0 left-0 z-[80] w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:w-64 md:h-screen md:sticky md:top-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        overflow-y-auto p-6
      `}>
        {/* Your menu content here... */}
        <div className="space-y-8">
          {activeMenu.map((section) => (
            <div key={section.group}>
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">
                {section.group}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => {
                  const isActive = pathname === item.url;

                  return (
                    <li key={item.slug}>
                      <Link
                        href={item.url}
                        onClick={() => setIsOpen(false)}
                        className={`
                          block py-1.5 px-2 text-sm rounded-md transition-all duration-200
                          break-words whitespace-normal leading-relaxed
                          ${isActive
                            ? "bg-brand-start/10 text-brand-start font-medium border-l-2 border-brand-start" // Active Style
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border-l-2 border-transparent" // Inactive Style
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}