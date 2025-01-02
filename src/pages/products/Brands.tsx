import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://api.leelavatiautomation.com';

interface Category {
  id: number;
  image_link: string;
  display_name: string;
  priority: number;
  main_category: string;
}

function Brands() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-main">
      <style>
        {`
          .brands-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .brand-item {
            text-align: center;
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
          }

          .brand-item:hover {
            transform: scale(1.05);
          }

          .brand-item img {
            max-width: 100%;
            height: auto;
            margin-bottom: 10px;
            border-radius: 4px;
          }

          .brand-item p {
            font-size: 16px;
            font-weight: bold;
            color: #333;
          }
        `}
      </style>

      <h1 className="product-header">Explore Products by Category</h1>
      <div className="brands-grid">
        {categories.map((category) => (
          <div key={category.id} className="brand-item">
            <Link
              to={`/product-category?main_cat=${category.main_category.toLowerCase()}`}
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
}

export default Brands;
