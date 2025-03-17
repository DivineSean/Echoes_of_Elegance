
import { useEffect } from 'react';
import Hero from '../components/Hero';
import CategorySlider from '../components/CategorySlider';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <CategorySlider />
      
      <ProductGrid 
        title="New Arrivals" 
        subtitle="Discover our latest collection of timeless children's fashion"
        limit={8}
      />
      
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block text-sm uppercase tracking-widest text-forest mb-4">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Designed with Purpose, <br />Made to Last
              </h2>
              <p className="text-midnight/70 mb-6">
                At petit elite, we believe that children's clothing should combine timeless design with functionality. Every piece in our collection is carefully crafted using premium, sustainable materials that are gentle on your child's skin and our planet.
              </p>
              <p className="text-midnight/70 mb-8">
                Our designs embrace the innocence of childhood while enabling freedom of movement and expression. We create clothing that grows with your child, both in style and durability.
              </p>
              <Link 
                to="#" 
                className="inline-flex items-center text-midnight hover:text-forest transition-colors font-medium"
              >
                Learn more about our story
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <img 
                src="/image/0c80b87d-dd78-4d30-a9ab-3c85b49bcfc0.png" 
                alt="Children wearing petit elite clothing" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm uppercase tracking-widest text-forest mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Sustainable Fashion for the Next Generation
            </h2>
            <p className="text-midnight/70 mb-8 text-lg">
              We're committed to creating a better future for the children who wear our clothes. Our sustainable practices include using organic fabrics, ethical manufacturing, and minimizing waste in our production process.
            </p>
            <Link 
              to="#" 
              className="bg-forest text-white px-8 py-3 rounded-md hover:bg-forest/90 transition-all btn-transition inline-flex items-center justify-center"
            >
              Explore Our Sustainability Practices
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Explore Our Instagram
            </h2>
            <p className="text-midnight/70 max-w-2xl mx-auto">
              Follow us for daily inspiration and behind-the-scenes moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <a target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded-lg group">
              <img 
                src="/image/ad3031ab-70a9-4355-96f6-dcc98f200f5f.png" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
            <a  target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded-lg group">
              <img 
                src="/image/d1dd06b6-8982-41fe-af7d-5e928cfe7630.png" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
            <a  target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded-lg group">
              <img 
                src="/image/07c78662-2ac2-4f3d-afb3-ede742673e42.png" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
            <a  target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded-lg group">
              <img 
                src="/image/826ba714-ba8e-42b2-ae51-4568d022f4c8.png" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
            <a  target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded-lg group">
              <img 
                src="/image/32ebc6de-3ac0-478e-a90a-550d516ad559.png" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
            <a  target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded-lg group">
              <img 
                src="/image/520ecec9-b6a6-4598-b61c-63f577a4fdb9.png" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
          </div>
          
          <div className="text-center mt-8">
            <a 
               
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-midnight hover:text-forest transition-colors font-medium"
            >
              Follow us on Instagram
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default Index;
