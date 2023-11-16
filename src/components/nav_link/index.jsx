import { Link, useRoute } from 'wouter';

export const NavLink = ({ children, href, className, whenActive, handleClick }) => {
  const [isActive] = useRoute(href);
  return (
    <Link
      href={href}
      className={
        `
        ${isActive && whenActive}
        ${className}
        `
      }
    >
      {children}
    </Link>
  );
};
