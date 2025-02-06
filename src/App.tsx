import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Loader from './component/Loader';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Disable body scroll while loading
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    // Apply scroll animations to elements inside all components
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        // Skip form-related sections to avoid left animation
        if (section.classList.contains('form-section')) return;

        // Target individual child elements inside each section
        gsap.utils.toArray(section.children).forEach((el) => {
          const element = el as HTMLElement; // Assert the type to HTMLElement

          // Apply different animations based on element type (card vs others)
          if (element.classList.contains('card')) {
            // For cards
            gsap.fromTo(
              element,
              { opacity: 0, y: 50 }, // Start with hidden and below
              {
                opacity: 1,           // Fade in
                y: 0,                 // Move to original position
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,           // Trigger animation when the element is in view
                  start: "top 75%",            // Trigger when top of the element is 80% into the viewport
                  end: "bottom 50%",
                  scrub: 0,
                  toggleActions: "play none none reverse",
                  once: false,                 // Animation only triggers once
                },
              }
            );
          } else {
            // For other elements like text or images
            gsap.fromTo(
              element,
              { opacity: 0, y: 50 }, // Start with hidden and to the right (x-axis)
              {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 75%",         // Trigger when top of the element is 80% into the viewport
                  end: "bottom 50%",
                  scrub: 0,
                  toggleActions: "play none none reverse",
                  once: false,              // Animation only triggers once
                },
              }
            );
          }
        });
      });

      // Handle form section separately if needed
      const formSections = document.querySelectorAll('.form-section');

      formSections.forEach((formElement) => {
        const form = formElement as HTMLElement; // Assert the type to HTMLElement

        gsap.fromTo(
          form,
          { opacity: 0, y: 30 }, // Start with hidden and slightly below
          {
            opacity: 1,              // Fade in
            y: 0,                    // Move to original position
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: form,
              start: "top 80%",      // Trigger when top of the form reaches 80% of viewport
              end: "bottom 50%",
              scrub: 0,
              toggleActions: "play none none reverse",
              once: false,           // Animation only triggers once
            },
          }
        );
      });

      // Animate footer elements
      const footer = document.querySelector('footer');
      if (footer) {
        gsap.utils.toArray(footer.children).forEach((footerElement) => {
          const footerChild = footerElement as HTMLElement;

          gsap.fromTo(
            footerChild,
            { opacity: 0, y: 50 }, // Start with hidden and slightly below
            {
              opacity: 1,            // Fade in
              y: 0,                  // Move to original position
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footerChild,
                start: "top 80%",    // Trigger when top of the footer reaches 80% of viewport
                end: "bottom 50%",
                scrub: 0,
                toggleActions: "play none none reverse",
                once: false,         // Animation only triggers once
              },
            }
          );
        });
      }
    };

    // Run animation setup on initial load
    animateOnScroll();

    // Re-run animation setup on window resize (for responsive behavior)
    window.addEventListener("resize", animateOnScroll);

    return () => {
      window.removeEventListener("resize", animateOnScroll);
    };
  }, [isLoading]);

  return (
    <>
      <Loader loading={isLoading} />
      <div className="main container m-auto gap-4 flex flex-col xl:flex-row">
        <aside className="xl:fixed xl:max-w-96">
          <Card />
        </aside>
        <main className="ml-0 xl:ml-96 w-full">
          <Navbar />
          <div className="container m-auto px-5">
            <Hero />
            <Portfolio />
            <About />
            <Resume />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
