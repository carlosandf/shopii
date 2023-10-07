import { AppRouter } from '../router';
import { Layout } from '../components';

export function App () {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}
