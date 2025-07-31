import { useEffect, useState, lazy, Suspense } from 'react';
import './App.css';

import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Loader from './component/Loader';
import Card from './component/Card';
import Footer from './component/Footer';

// Lazy Load Non-Critical Components
const Portfolio = lazy(() => import('./component/Portfolio'));
const About = lazy(() => import('./component/About'));
const Resume = lazy(() => import('./component/Resume'));
const Contact = lazy(() => import('./component/Contact'));


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Loader loading={isLoading} />
      <div className="main container m-auto gap-4 flex flex-col xl:flex-row">
        <aside className="xl:fixed xl:w-96">
          <Card />
        </aside>
        <main className="ml-0 xl:ml-96 w-full">
          <Navbar />
          <div className="container m-auto px-5">
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
              <Portfolio />
              <About />
              <Resume />
              <Contact />
            </Suspense>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
