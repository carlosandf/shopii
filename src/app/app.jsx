import { AppRouter } from '../router';
import { Layout } from '../components';
import { ShoppingCartProvider } from '../context/shopping_cart_context';

export function App () {
  return (
    <>
      <ShoppingCartProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </ShoppingCartProvider>
    </>
  );
}
