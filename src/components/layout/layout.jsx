import { Navbar } from '../navbar/navbar';
import { ProductDetail } from '../product_detail/product_detail';
import './layout.css';

export const Layout = ({ children }) => {
  return (
    <>
      <header className='fixed z-10 w-full top-0 max-w-screen-2xl'>
        <Navbar />
      </header>
      <main className='mt-16 grid gap-1 max-h-[calc(100dvh-64px)] place-content-center grid-cols-[auto_auto_auto] items-center p-8'>
        <div className='Layout-main col-[2/3] max-h-[inherit] overflow-y-scroll pt-3 rounded-s-lg'>
          {children}
        </div>
        <div>
          <ProductDetail />
        </div>
      </main>
      <footer></footer>
    </>
  );
};
