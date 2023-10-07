import { Navbar } from '../navbar/navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <header className='fixed z-10 w-full top-0 max-w-screen-2xl'>
        <Navbar />
      </header>
      <main className='mt-14 flex flex-col items-center p-8'>
        {children}
      </main>
      <footer></footer>
    </>
  );
};
