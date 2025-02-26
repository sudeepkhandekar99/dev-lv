import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://api.leelavatiautomation.com';

interface Category {
  id: number;
  image_link: string;
  display_name: string;
  priority: number;
  main_category: string;
}

const Brands: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/categories`);
        const data = await response.json();
        // Sort categories by priority in ascending order
        const sortedCategories = data.sort((a: Category, b: Category) => a.priority - b.priority);
        setCategories(sortedCategories);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
        setError('Failed to load categories. Please try again later.');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = () => {
    window.scroll(0, 0);
  };

  const handleSearchByModel = () => {
    if (!searchModel.trim()) return;
    navigate(`/products?model=${searchModel.trim()}`);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

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

      <h1 className="product-header">Explore Products by Category</h1>

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

      <div className="brands-grid">
        {categories.map((category) => (
          <div key={category.id} className="brand-item">
            <Link
              to={`/product-category?main_cat=${category.main_category}`}
              onClick={handleClick}
            >
              <img
                src={category.image_link}
                alt={category.display_name}
                width="200px"
                height="200px"
                onError={(e) => (e.currentTarget.src = '/path-to-placeholder-image.jpg')}
              />
              <p>{category.display_name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
