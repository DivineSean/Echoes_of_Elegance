
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Star, Heart, Share2, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { toast } from 'sonner';

// Mock product data
const product = {
  id: 'girls-red-dress-1',
  name: 'Red Plaid Dress Set',
  price: 68.50,
  rating: 4.8,
  reviewCount: 26,
  description: "Our classic Red Plaid Dress Set combines timeless style with comfort. The dress features a delicate collar and button details, paired with a soft white undershirt. Perfect for special occasions or everyday elegance.",
  details: [
    "100% premium cotton fabric",
    "Soft and breathable material",
    "Designed for comfort and movement",
    "Machine washable at 30°C",
    "Ethically manufactured"
  ],
  sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y'],
  colors: [
    { name: 'Red', value: '#C53030', isDefault: true },
    { name: 'Navy', value: '#1A365D' },
    { name: 'Green', value: '#276749' }
  ],
  images: [
    '/image/07c78662-2ac2-4f3d-afb3-ede742673e42.png',
    '/image/d1dd06b6-8982-41fe-af7d-5e928cfe7630.png',
    '/image/90e0556c-1362-4ca3-8336-400263803067.png',
    '/image/826ba714-ba8e-42b2-ae51-4568d022f4c8.png'
  ]
};

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors.find(c => c.isDefault)?.name || product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      toast.success('Added to your bag!', {
        description: `${product.name} - ${selectedSize} (${selectedColor})`,
      });
      setIsLoading(false);
    }, 1000);
  };

  const incrementQuantity = () => {
    setQuantity(q => Math.min(q + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity(q => Math.max(q - 1, 1));
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-4 pt-6">
          <p className="text-sm text-midnight/60 flex items-center">
            <span>Home</span>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span>Products</span>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-midnight">{product.name}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div>
            <div className="mb-4 overflow-hidden rounded-lg bg-secondary aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-midnight' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-display font-medium mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-midnight/70">{product.rating}</span>
              </div>
              <span className="text-sm text-midnight/70">{product.reviewCount} reviews</span>
            </div>
            
            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
            
            <p className="text-midnight/70 mb-8">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <p className="font-medium mb-3">Color: <span className="text-midnight/70 font-normal">{selectedColor}</span></p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    aria-label={`Select ${color.name} color`}
                    className={`w-10 h-10 rounded-full relative transition-all ${
                      selectedColor === color.name 
                        ? 'ring-2 ring-offset-2 ring-midnight scale-110' 
                        : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    {selectedColor === color.name && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check className="h-5 w-5 text-white drop-shadow-md" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium">Size</p>
                <button className="text-sm text-midnight/70 hover:text-midnight underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-md border transition-all ${
                      selectedSize === size
                        ? 'bg-midnight text-white border-midnight'
                        : 'bg-white text-midnight/70 border-border hover:border-midnight'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <p className="font-medium mb-3">Quantity</p>
              <div className="flex">
                <button
                  className="bg-secondary text-midnight p-2 rounded-l-md border-y border-l border-border"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-5 w-5" />
                </button>
                <div className="flex items-center justify-center w-16 border-y border-border bg-white">
                  {quantity}
                </div>
                <button
                  className="bg-secondary text-midnight p-2 rounded-r-md border-y border-r border-border"
                  onClick={incrementQuantity}
                  disabled={quantity >= 10}
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="flex-grow bg-midnight text-white px-8 py-3 rounded-md hover:bg-midnight/90 transition-all flex items-center justify-center disabled:opacity-70"
                onClick={handleAddToCart}
                disabled={isLoading}
              >
                {isLoading ? (
                  'Adding...'
                ) : (
                  <>
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Bag
                  </>
                )}
              </button>
              <button
                className="flex-grow-0 border border-midnight text-midnight px-4 py-3 rounded-md hover:bg-midnight/5 transition-all flex items-center justify-center"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>
              <button
                className="flex-grow-0 border border-midnight text-midnight px-4 py-3 rounded-md hover:bg-midnight/5 transition-all flex items-center justify-center"
                aria-label="Share product"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
            
            {/* Product Details */}
            <div className="border-t border-border pt-6">
              <h2 className="font-medium mb-4">Product Details</h2>
              <ul className="list-disc list-inside space-y-2 text-midnight/70">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <ProductGrid 
          title="You May Also Like" 
          subtitle="Products that complement this item" 
          limit={4}
        />
      </div>
    </div>
  );
};

export default Product;
