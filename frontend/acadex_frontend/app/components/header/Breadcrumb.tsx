"use client";

import { usePathname } from "next/navigation";
import { ChevronRight, LayoutDashboard } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  // convert "/users/create" → ["users", "create"]
  const segments = pathname.split("/").filter(Boolean);

  const formatLabel = (text: string) => {
    return text.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-2">
      <div className="flex items-center text-sm text-gray-600">
        {/* DASHBOARD */}
        <div className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
          <LayoutDashboard size={14} />
          <span>Dashboard</span>
        </div>

        {segments.map((seg, index) => {
          const isLast = index === segments.length - 1;

          return (
            <div key={index} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-gray-400" />

              <span
                className={`${
                  isLast
                    ? "text-gray-900 font-medium"
                    : "hover:text-gray-900 cursor-pointer"
                }`}
              >
                {formatLabel(seg)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
