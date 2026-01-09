"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    // Format the segment for display (replace hyphens with spaces, capitalize)
    const label = segment === "" ? "home" : segment;

    return {
      href,
      label,
      isLast,
    };
  });

  return (
    <nav className="text-sm text-neutral-500 mb-6">
      <ol className="flex items-center gap-1 flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-emerald-500 transition-colors"
          >
            home
          </Link>
        </li>
        {breadcrumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1">
            <span className="text-neutral-600">/</span>
            {crumb.isLast ? (
              <span className="text-neutral-400">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-emerald-500 transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
