import { NavLink } from "./NavLink";

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex md:space-x-6">
      <NavLink to="/">
        Age Calculator
      </NavLink>
      <NavLink to="/difference">
        Age Difference
      </NavLink>
      <NavLink to="/date-calculator">
        Date Calculator
      </NavLink>
      <NavLink to="/birthday-countdown">
        Birthday Countdown
      </NavLink>
      <NavLink to="/pregnancy-calculator">
        Pregnancy Age
      </NavLink>
      <NavLink to="/leap-year-calculator">
        Leap Year
      </NavLink>
      <NavLink to="/retirement-calculator">
        Retirement
      </NavLink>
      <NavLink to="/generation-finder">
        Generational Cohort
      </NavLink>
    </div>
  );
}; 