
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isOnSale?: boolean;
  delay?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  salePrice, 
  image, 
  hoverImage, 
  isNew = false, 
  isOnSale = false,
  delay = 0 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div 
      className={`product-card opacity-0 animate-fade-in`}
      style={{ 
        animationDelay: `${delay}s`,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <Link 
        to={`#`} 
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-secondary mb-4">
          {isNew && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-midnight text-white text-xs py-1 px-3 rounded-full uppercase tracking-wider">New</span>
            </div>
          )}
          
          {isOnSale && !isNew && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-rust text-white text-xs py-1 px-3 rounded-full uppercase tracking-wider">Sale</span>
            </div>
          )}
          
          <button 
            className={`absolute top-4 right-4 z-10 bg-white/80 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center transition-all ${isWishlisted ? 'bg-forest/10' : ''}`}
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'text-forest fill-forest' : 'text-midnight'}`} />
          </button>
          
          <img 
            src={isHovered && hoverImage ? hoverImage : image} 
            alt={name}
            className="product-image w-full h-full object-cover object-center"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        
        <h3 className="font-medium text-midnight mb-1 transition-colors hover:text-midnight/80">{name}</h3>
        <div className="flex items-center gap-2">
          {isOnSale && salePrice ? (
            <>
              <p className="text-rust font-medium">${salePrice.toFixed(2)}</p>
              <p className="text-midnight/60 line-through text-sm">${price.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-midnight/70">${price.toFixed(2)}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
