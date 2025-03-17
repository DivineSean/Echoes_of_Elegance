
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isOnSale?: boolean;
}

const products: Product[] = [
  {
    id: 'girls-red-dress-1',
    name: 'Fall Fashion',
    price: 68.50,
    image: '/image/8d975916-7fd2-4da0-8dab-36bf30d682b0.png',
    hoverImage: '/image/ad3031ab-70a9-4355-96f6-dcc98f200f5f.png',
    isNew: true
  },
  {
    id: 'boys-denim-jacket-1',
    name: 'Classic Fashion',
    price: 54.99,
    salePrice: 42.99,
    image: '/image/520ecec9-b6a6-4598-b61c-63f577a4fdb9.png',
    hoverImage: '/image/32466c02-b163-4f41-ba30-7d8f05e727c2.png',
    isOnSale: true
  },
  {
    id: 'girl-pink-shimmer-1',
    name: 'Winter Fashion',
    price: 72.00,
    image: '/image/d1dd06b6-8982-41fe-af7d-5e928cfe7630.png',
    hoverImage: '/image/0c80b87d-dd78-4d30-a9ab-3c85b49bcfc0.png',
    isNew: true
  },
  {
    id: 'toddler-corduroy-set-1',
    name: 'Match Sibling Sets',
    price: 58.50,
    salePrice: 45.99,
    image: '/image/07c78662-2ac2-4f3d-afb3-ede742673e42.png',
    hoverImage: '/image/32ebc6de-3ac0-478e-a90a-550d516ad559.png',
    isOnSale: true
  },
  {
    id: 'girl-red-dress-2',
    name: 'Casual Little Girls Dresses',
    price: 49.99,
    image: '/image/pexels-cottonbro-3661550.jpg',
    hoverImage: '/image/kabita-darlami-DwkwhSFrmlY-unsplash.jpg',
  },
  {
    id: 'girl-striped-dress-1',
    name: 'A-line Dress',
    price: 45.00,
    image: '/image/826ba714-ba8e-42b2-ae51-4568d022f4c8.png',
    hoverImage: '/image/A-line Dress.png'
  },
  {
    id: 'children-collection-1',
    name: 'Casual Boys Fashion',
    price: 89.00,
    salePrice: 72.50,
    image: '/image/pexels-nicoisnothuman-969373.jpg',
    isOnSale: true
  },
  {
    id: 'boy-check-shirt-1',
    name: 'Kids Clothes & Hair Accessories',
    price: 42.50,
    image: '/image/Kids-Hair-Accessories.jpg'
  }
];

interface ProductGridProps {
  title: string;
  subtitle?: string;
  limit?: number;
  showHeading?: boolean;
}

const ProductGrid = ({ title, subtitle, limit = 8, showHeading = true }: ProductGridProps) => {
  const [loaded, setLoaded] = useState(false);
  const displayProducts = products.slice(0, limit);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className={`text-center mb-12 opacity-0 ${loaded ? 'animate-fade-in' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">{title}</h2>
            {subtitle && <p className="text-midnight/70 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              image={product.image}
              hoverImage={product.hoverImage}
              isNew={product.isNew}
              isOnSale={product.isOnSale}
              delay={0.1 * (index % 4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
