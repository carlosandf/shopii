import { Link, useLocation } from 'wouter';
import { NavLink } from '..';
import { CartIcon } from '../icons';
import { useShoppingCartContext } from '../../hooks/useShoppingCartContext';

const linksLeft = [
  { path: '/', label: 'All' },
  { path: '/clothing', label: 'Clothes' },
  { path: '/electronics', label: 'Electronics' },
  { path: '/jewelery', label: 'Jewelery' },
  { path: '/toys', label: 'Toys' }
];

const linksRight = [
  { path: '/orders/all', label: 'My Orders' },
  { path: '/account', label: 'My Account' },
  { path: '/signin', label: 'Sign In' }
];

export const Navbar = () => {
  const { cartProducts, closeSidebar } = useShoppingCartContext();
  const [, setLocation] = useLocation();

  const handleClick = () => {
    closeSidebar();
    setLocation('/cart');
  };
  return (
    <nav className='w-full  max-w-screen-xl mx-auto flex items-center justify-between gap-2 text-sm font-medium'>
      <ul className='flex gap-5 items-center'>
        <li className='text-xl font-extrabold'>
          <Link to='/'>Shopii</Link>
        </li>
        {linksLeft.map(link => (
          <li key={`${link.label}_linkLeft`}>
            <NavLink
              href={link.path}
              whenActive='underline underline-offset-4 text-blue-600'
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
              href={link.path}
              whenActive='underline underline-offset-4 text-blue-600'
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className='text-xl relative grid'>
          {
            cartProducts?.length > 0 && (
              <span className='absolute bg-red-500 py-0.5 px-1 text-white text-xs font-bold rounded-full leading-none left-4 bottom-4'>
                {cartProducts.length}
              </span>
            )
          }
          <button
            onClick={handleClick}
          >
            <CartIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};
