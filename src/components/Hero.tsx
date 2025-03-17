
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden bg-cream">
      {/* Background image - mobile version */}
      <div className="md:hidden absolute inset-0 w-full h-full bg-cream">
        <img
          src="/image/pexels-nicoisnothuman-969373.jpg"
          alt="Kids fashion collection"
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Background image - desktop version */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 to-cream/40 z-10"></div>
        <img
          src="/image/8d975916-7fd2-4da0-8dab-36bf30d682b0.png"
          alt="Kids fashion collection"
          className={`w-full h-full object-cover object-right transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="w-full md:w-1/2 pt-20 md:pt-0">
          <span className={`inline-block text-sm uppercase tracking-widest text-forest mb-4 opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            New Fall/Winter Collection
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
            Designed for Comfort, <br />
            <span className="text-forest">Made for Expression</span>
          </h1>
          <p className={`text-lg md:text-xl text-midnight/80 mb-8 max-w-md opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
            Timeless pieces that blend comfort with sophisticated style, allowing children to express their unique personalities.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.8s' }}>
            <Link 
              to="#" 
              className="bg-midnight text-white px-8 py-3 rounded-md hover:bg-midnight/90 transition-all hover-lift inline-flex items-center justify-center"
            >
              Shop Collection
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="#" 
              className="border border-midnight text-midnight px-8 py-3 rounded-md hover:bg-midnight/5 transition-all hover-lift inline-flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
