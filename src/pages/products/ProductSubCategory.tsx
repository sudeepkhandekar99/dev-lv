import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchModel, setSearchModel] = useState<string>('');

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

  const handleSearchByModel = () => {
    if (!searchModel.trim()) return;
    navigate(`/products?model=${searchModel.trim()}`);
  };

  return (
    <div className="product-main">
      <style>
        {`
          .model-search {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            justify-content: center;
          }

          .search-input {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            width: 300px;
          }

          .search-button {
            padding: 8px 12px;
            background-color: #ff7f7f;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }

          .search-button:hover {
            background-color: red;
          }
        `}
      </style>

      <h1 className="product-header">Explore Brands</h1>
      
      {/* Search by Model Number */}
      <div className="model-search">
        <input
          type="text"
          placeholder="Search by Model Number"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearchByModel} className="search-button">
          Search
        </button>
      </div>


      {isLoading ? (
        <p>Loading...</p>
      ) : brands.length > 0 ? (
        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-item">
              <Link
                to={`/products?brand=${brand.brand.toLowerCase()}&main_cat=${mainCategory.toLowerCase()}&sub_cat=${subCategory.toLowerCase()}`}
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
