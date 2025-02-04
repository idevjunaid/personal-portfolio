import { useEffect, useState } from 'react';
import './App.css'
import Card from './component/Card';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Loader from './component/Loader';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Resume from './component/Resume';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // const handleScroll = (event: WheelEvent) => {
    //   event.preventDefault();
    //   const scrollAmount = event.deltaY > 0 ? 100 : -100; // Adjust scroll amount as needed
    //   window.scrollBy({
    //     top: scrollAmount,
    //     left: 0,
    //     behavior: 'smooth',
    //   });
    // };

    // window.addEventListener('wheel', handleScroll, { passive: false });

    // return () => {
    //   window.removeEventListener('wheel', handleScroll);
    // };
  }, [])
  return (
    <>
      <Loader loading={isLoading} />
      <div className='main container m-auto gap-4 flex flex-col lg:flex-row'>
        <aside className='lg:fixed lg:max-w-96'>
          <Card />
        </aside>
        <main className='ml-0 lg:ml-96 w-full'>

          <Navbar />
          <div className="container m-auto px-2">
            <Hero />
            <Portfolio />
            <About />
            <Resume />
            <Testimonial />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
