import { Navbar } from '../navbar';
import { Sidebar } from '../../containers/side_bar';
import './layout.css';

export const Layout = ({ children }) => {
  return (
    <>
      <header className='sticky z-20 w-full top-0 px-6 py-3 bg-yellow-300 shadow'>
        <Navbar />
        <Sidebar />
      </header>
      <main className='relative flex gap-1 justify-center min-h-screen items-start p-8'>
        <div className='Layout-main grid w-full max-w-screen-xl justify-items-center rounded-s-lg h-[inherit]'>
          {children}
        </div>
      </main>
      <footer className='h-[40dvh] mt-24 bg-gray-200 grid place-content-center'>
        &copy; 2023 - Todos los izquierdos reservados
      </footer>
    </>
  );
};
