
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
  description?: string;
}

const categories: Category[] = [
  {
    id: 'girls',
    name: 'Girls',
    image: '/image/ad3031ab-70a9-4355-96f6-dcc98f200f5f.png',
    link: '#',
    description: 'Elegant & playful styles'
  },
  {
    id: 'boys',
    name: 'Boys',
    image: '/image/8d975916-7fd2-4da0-8dab-36bf30d682b0.png',
    link: '#',
    description: 'Comfortable & durable fashion'
  },
  {
    id: 'babies',
    name: 'Babies',
    image: '/image/nina-hill-PlO6EYgbKmQ-unsplash.jpg',
    link: '#',
    description: 'Soft & gentle for little ones'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: '/image/Kids-Hair-Accessories.jpg',
    link: '#',
    description: 'Perfect finishing touches'
  }
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, categories.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));
  const [loaded, setLoaded] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const getItemsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 opacity-0 ${loaded ? 'animate-fade-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Shop by Category</h2>
          <p className="text-midnight/70 max-w-2xl mx-auto">
            Explore our collections designed for different ages and occasions
          </p>
        </div>

        <div className="relative">
          {currentIndex > 0 && (
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all hover-lift"
              aria-label="Previous category"
            >
              <ChevronLeft className="h-6 w-6 text-midnight" />
            </button>
          )}
          
          {currentIndex < maxIndex && (
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all hover-lift"
              aria-label="Next category"
            >
              <ChevronRight className="h-6 w-6 text-midnight" />
            </button>
          )}

          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / getItemsPerView())}%)` }}
            >
              {categories.map((category, index) => (
                <div 
                  key={category.id}
                  className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 opacity-0 ${
                    loaded ? 'animate-fade-in' : ''
                  }`}
                  style={{ 
                    animationDelay: `${(index * 0.1) + 0.1}s`,
                    flex: `0 0 ${isMobile ? '100%' : 'auto'}`
                  }}
                >
                  <Link to={category.link} className="block relative group hover-lift">
                    <div className="overflow-hidden rounded-lg aspect-[4/5] bg-secondary">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="bg-white/90 backdrop-blur-sm w-full py-4 px-6 rounded-md text-center">
                        <h3 className="font-display text-xl mb-1">{category.name}</h3>
                        {category.description && (
                          <p className="text-xs text-midnight/70 mb-1">{category.description}</p>
                        )}
                        <span className="text-sm text-forest inline-block group-hover:translate-x-2 transition-transform">
                          Explore Collection
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
