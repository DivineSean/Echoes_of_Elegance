
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { Filter, X, ChevronDown } from 'lucide-react';

const collections = {
  "all": {
    title: "All Products",
    description: "Our complete collection of premium children's clothing"
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest additions to our collection"
  },
  "best-sellers": {
    title: "Best Sellers",
    description: "Our most loved pieces"
  },
  "girls": {
    title: "Girls Collection",
    description: "Stylish and comfortable clothing for girls"
  },
  "boys": {
    title: "Boys Collection",
    description: "Timeless and durable clothing for boys"
  },
  "babies": {
    title: "Babies Collection",
    description: "Soft and gentle clothing for the littlest ones"
  },
  "accessories": {
    title: "Accessories",
    description: "The perfect finishing touches"
  }
};

const Collection = () => {
  const { collectionId = 'all' } = useParams<{ collectionId: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState('newest');
  const collection = collections[collectionId as keyof typeof collections] || collections.all;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collectionId]);

  const toggleSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const resetFilters = () => {
    setPriceRange([0, 100]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h1 className="text-3xl md:text-4xl font-display font-medium text-center mb-4">{collection.title}</h1>
          <p className="text-midnight/70 text-center max-w-2xl mx-auto">{collection.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Mobile Toggle */}
          <button 
            className="lg:hidden flex items-center justify-between w-full bg-white px-4 py-3 rounded-md border border-border mb-4"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter Products
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Filter Sidebar */}
          <div className={`lg:w-1/4 xl:w-1/5 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-medium text-lg">Filters</h2>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-midnight/70 hover:text-midnight"
                >
                  Reset All
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-midnight/70">${priceRange[0]}</span>
                  <span className="text-sm text-midnight/70">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['0-3M', '3-6M', '6-12M', '1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y'].map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-1 text-sm rounded-md border transition-all ${
                        selectedSizes.includes(size)
                          ? 'bg-midnight text-white border-midnight'
                          : 'bg-white text-midnight/70 border-border hover:border-midnight'
                      }`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Red', value: '#E53E3E' },
                    { name: 'Blue', value: '#3182CE' },
                    { name: 'Green', value: '#38A169' },
                    { name: 'Navy', value: '#1A365D' },
                    { name: 'Pink', value: '#ED64A6' },
                    { name: 'Yellow', value: '#ECC94B' },
                    { name: 'Gray', value: '#718096' },
                    { name: 'Black', value: '#1A202C' },
                    { name: 'White', value: '#FFFFFF' }
                  ].map((color) => (
                    <button
                      key={color.name}
                      aria-label={`Filter by ${color.name}`}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColors.includes(color.name)
                          ? 'border-midnight scale-110'
                          : 'border-transparent hover:border-midnight/30'
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => toggleColor(color.name)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4 xl:w-4/5">
            <div className="flex justify-between items-center mb-6">
              <p className="text-midnight/70">Showing 24 products</p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-midnight/70 mr-2 hidden sm:inline">Sort by:</label>
                <select
                  id="sort"
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-white border border-border rounded-md px-3 py-2 focus:outline-none focus:border-midnight text-sm"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
            
            <ProductGrid title={collection.title} showHeading={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
