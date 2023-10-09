import { Link } from 'wouter';
import { useContext } from 'react';
import { NavLink } from '../';
import { ShoppingCartContext } from '../../context';

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
  const { cartProducts } = useContext(ShoppingCartContext);
  return (
    <nav className='w-full flex h-16 items-center justify-between gap-2 px-6 py-3 text-sm bg-white font-medium shadow'>
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
        <li className='text-xl relative'>
          {
            cartProducts?.length > 0 && (
              <span className='absolute bg-red-500 py-0.5 px-1 text-white text-xs font-bold rounded-full leading-none left-3 bottom-5'>
                {cartProducts.length}
              </span>
            )
          }
          <NavLink
            href='/order'
            className='text-2xl'
            whenActive='text-blue-600'
          >
            🛒
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
