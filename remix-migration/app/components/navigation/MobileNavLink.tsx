import { Link, useLocation } from "@remix-run/react";

interface MobileNavLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const MobileNavLink = ({ to, onClick, children }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
        isActive
          ? "bg-soft-purple text-primary"
          : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
      }`}
      onClick={onClick}
      prefetch="intent"
    >
      {children}
    </Link>
  );
}; 