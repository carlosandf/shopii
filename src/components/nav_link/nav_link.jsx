import { Link, useRoute } from 'wouter';

export const NavLink = ({ to, children }) => {
  const [isActive] = useRoute(to);
  return (
    <Link
      href={to}
      className={`
        ${isActive && 'underline underline-offset-4 text-blue-600'}
      `}>
      {children}
    </Link>
  );
};
