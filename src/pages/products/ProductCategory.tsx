import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

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
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  return (
    <div className="product-main">
      <style>
      </style>

      <h1 className="product-header">Explore Sub-Categories</h1>

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
