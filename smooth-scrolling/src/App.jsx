import Layout from './components/layout';
import Header from './components/header';
import MasonryGrid from './components/masonry-grid';
import Footer from './components/footer';

export default function App() {
  return (
    <Layout>
      <Header />
      <MasonryGrid />
      <Footer />
    </Layout>
  );
}
