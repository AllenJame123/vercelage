import { MobileNavLink } from "./MobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <MobileNavLink to="/" onClick={onClose}>
          Age Calculator
        </MobileNavLink>
        <MobileNavLink to="/difference" onClick={onClose}>
          Age Difference
        </MobileNavLink>
        <MobileNavLink to="/date-calculator" onClick={onClose}>
          Date Calculator
        </MobileNavLink>
        <MobileNavLink to="/birthday-countdown" onClick={onClose}>
          Birthday Countdown
        </MobileNavLink>
        <MobileNavLink to="/pregnancy-calculator" onClick={onClose}>
          Pregnancy Age
        </MobileNavLink>
        <MobileNavLink to="/leap-year-calculator" onClick={onClose}>
          Leap Year
        </MobileNavLink>
        <MobileNavLink to="/retirement-calculator" onClick={onClose}>
          Retirement
        </MobileNavLink>
        <MobileNavLink to="/generation-finder" onClick={onClose}>
          Generational Cohort
        </MobileNavLink>
      </div>
    </div>
  );
}; 