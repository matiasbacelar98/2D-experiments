import React from 'react';
import Lenis from '@studio-freight/lenis';

import Layout from './components/layout';
import Header from './components/header';
import MasonryGrid from './components/masonry-grid';
import Footer from './components/footer';

export default function App() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Layout>
      <Header />
      <MasonryGrid />
      <Footer />
    </Layout>
  );
}
