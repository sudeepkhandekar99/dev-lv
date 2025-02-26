import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

interface SubCategory {
  id: number;
  subcat: string;
  display_name: string;
  priority: number;
  link: string;
}

const API_BASE_URL = 'https://api.leelavatiautomation.com';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductCategory: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchModel, setSearchModel] = useState<string>('');

  useEffect(() => {
    const category = query.get('main_cat');
    if (category) {
      setMainCategory(category);
      fetchSubCategories(category);
    }
  }, [useLocation().search]);

  const fetchSubCategories = async (mainCategory: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/products/distinct-sub-categories/${mainCategory}`);
      const data = await response.json();

      // Sort the sub-categories by priority
      const sortedSubCategories = data.sub_categories.sort((a: SubCategory, b: SubCategory) => a.priority - b.priority);
      setSubCategories(sortedSubCategories);
    } catch (error) {
      console.error('Failed to fetch sub-categories:', error);
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

      <h1 className="product-header">Explore Sub-Categories</h1>

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
      ) : subCategories.length > 0 ? (
        <div className="brands-grid">
          {subCategories.map((subCategory) => (
            <div key={subCategory.id} className="brand-item">
              <Link
                to={`/product-subcategory?mainCategory=${mainCategory}&subCategory=${subCategory.subcat}`}
                onClick={handleClick}
              >
                <img src={subCategory.link} alt={subCategory.display_name} />
                <span>{subCategory.display_name}</span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No sub-categories found for {mainCategory}.</p>
      )}
    </div>
  );
};

export default ProductCategory;
