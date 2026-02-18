import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Technology } from './pages/Technology';
import { Product } from './pages/Product';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { PageRoutes } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoutes.HOME} element={<Home />} />
            <Route path={PageRoutes.STORY} element={<Story />} />
            <Route path={PageRoutes.TECHNOLOGY} element={<Technology />} />
            <Route path={PageRoutes.PRODUCT} element={<Product />} />
            <Route path={PageRoutes.FAQ} element={<FAQ />} />
            <Route path={PageRoutes.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;