import { Link, useLocation } from "@remix-run/react";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink = ({ to, children }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
        isActive 
          ? "text-primary" 
          : "text-neutral-gray"
      }`}
      prefetch="intent"
    >
      {children}
    </Link>
  );
}; 