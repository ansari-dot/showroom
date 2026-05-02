
import React from 'react';
import { useEffect, useState } from 'react';
import CollectionPage from './components/CollectionPage';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import CarDetailPage from './components/CarDetailPage';

const App: React.FC = () => {
  const getPage = () => {
    if (window.location.hash.startsWith('#collection')) return 'collection';
    if (window.location.hash.startsWith('#contact-page')) return 'contact';
    if (window.location.hash.startsWith('#services-page')) return 'services';
    if (window.location.hash.startsWith('#about-page')) return 'about';
    if (window.location.hash.startsWith('#car-detail')) return 'car-detail';
    return 'home';
  };
  const [page, setPage] = useState<'home' | 'collection' | 'contact' | 'services' | 'about' | 'car-detail'>(getPage);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPage());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (page === 'collection') return <CollectionPage />;
  if (page === 'contact') return <ContactPage />;
  if (page === 'services') return <ServicesPage />;
  if (page === 'about') return <AboutPage />;
  if (page === 'car-detail') return <CarDetailPage />;
  return <HomePage />;
};

export default App;

