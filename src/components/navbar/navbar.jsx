import { Link } from 'wouter';
import { NavLink } from '../';

const linksLeft = [
  { path: '/', label: 'All' },
  { path: '/clothes', label: 'Clothes' },
  { path: '/electronics', label: 'Electronics' },
  { path: '/furnitures', label: 'Furnitures' },
  { path: '/toys', label: 'Toys' }
];

const linksRight = [
  { path: '/orders/all', label: 'My Orders' },
  { path: '/account', label: 'My Account' },
  { path: '/signin', label: 'Sign In' }
];

export const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between gap-2 px-6 py-3 text-sm bg-white font-medium shadow'>
      <ul className='flex gap-5 items-center'>
        <li className='text-xl font-extrabold'>
          <Link to='/'>Shopii</Link>
        </li>
        {linksLeft.map(link => (
          <li key={`${link.label}_linkLeft`}>
            <NavLink
              to={link.path}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex gap-5 items-center'>
        <li className='text-sm font-light p-r'>
          <Link to='/'>youemail@example.con</Link>
        </li>
        {linksRight.map(link => (
          <li key={`${link.label}_linkRight`}>
            <NavLink
              to={link.path}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className='text-xl'>
          <NavLink to='/order'>
            🛒
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
