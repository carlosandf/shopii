import { Navbar } from '../navbar';
import { Sidebar } from '../../containers/side_bar';
import './layout.css';

export const Layout = ({ children }) => {
  return (
    <>
      <header className='fixed z-20 w-full top-0 max-w-screen-2xl'>
        <Navbar />
        <Sidebar />
      </header>
      <main className='mt-16 relative grid gap-1 min-h-screen place-content-center grid-cols-[auto_auto_auto] items-center p-8'>
        <div className='Layout-main col-[2/3] pt-3 rounded-s-lg h-[inherit] overflow-y-scroll'>
          {children}
        </div>
      </main>
      <footer className='h-[40dvh] bg-gray-300 grid place-content-center'>
        Todos los izquierdos reservados
      </footer>
    </>
  );
};
