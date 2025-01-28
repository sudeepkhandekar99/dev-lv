import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

interface Brand {
  id: number;
  brand: string;
  display_name: string;
  priority: number;
  aws_link: string;
}

const API_BASE_URL = 'https://api.leelavatiautomation.com';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Brands: React.FC = () => {
  const query = useQuery();
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const mainCat = query.get('mainCategory');
    const subCat = query.get('subCategory');

    if (mainCat && subCat) {
      setMainCategory(mainCat);
      setSubCategory(subCat);

      // Fetch brands based on mainCategory and subCategory
      fetchBrands(mainCat, subCat);
    }
  }, [useLocation().search]);

  const fetchBrands = async (mainCategory: string, subCategory: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${API_BASE_URL}/products/unique_brands/${mainCategory}/${subCategory}`
      );
      const data = await response.json();

      // Sort brands by priority
      const sortedBrands = data.brands.sort((a: Brand, b: Brand) => a.priority - b.priority);
      setBrands(sortedBrands);
    } catch (error) {
      console.error('Failed to fetch brands:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="product-main">
      <style></style>

      <h1 className="product-header">Explore Brands</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : brands.length > 0 ? (
        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-item">
              <Link
                to={`/products?brand=${brand.brand.toLowerCase()}&mainCategory=${mainCategory.toLowerCase()}&subCategory=${subCategory.toLowerCase()}`}
                onClick={handleClick}
              >
                <img src={brand.aws_link} alt={brand.display_name} />
                <span>{brand.display_name}</span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No brands found for {mainCategory} - {subCategory}.</p>
      )}
    </div>
  );
};

export default Brands;
