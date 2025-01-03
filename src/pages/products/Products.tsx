import React, { useState, useEffect, ChangeEvent } from 'react';
import defaultImage from '../../assets/images/NoImageFound.jpg.png';

const API_BASE_URL = 'https://api.leelavatiautomation.com';

interface Product {
  id: number;
  code: string | null;
  main_cat: string | null;
  sub_cat: string | null;
  brand: string | null;
  model: string | null;
  housing_size: string | null;
  function: string | null;
  range: string | null;
  output: string | null;
  voltage: string | null;
  connection: string | null;
  material: string | null;
  images: string | null;
  pdf: string | null;
}

interface DropdownData {
  brand: string[];
  main_cat: string[];
  sub_cat: string[];
  housing_size: string[];
  function: string[];
  range: string[];
  output: string[];
  voltage: string[];
  connection: string[];
  material: string[];
}

const Products: React.FC = () => {
  const [dropdownData, setDropdownData] = useState<DropdownData>({
    brand: [],
    main_cat: [],
    sub_cat: [],
    housing_size: [],
    function: [],
    range: [],
    output: [],
    voltage: [],
    connection: [],
    material: [],
  });

  const [filters, setFilters] = useState({
    brand: '',
    main_cat: '',
    sub_cat: '',
    housing_size: '',
    function: '',
    range: '',
    output: '',
    voltage: '',
    connection: '',
    material: '',
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/distinct-values`);
        const data = await response.json();
        setDropdownData({
          brand: ['All', ...data.brands.filter(Boolean)],
          main_cat: ['All', ...data.main_categories.filter(Boolean)],
          sub_cat: ['All', ...data.sub_categories.filter(Boolean)],
          housing_size: ['All', ...data.housing_sizes.filter(Boolean)],
          function: ['All', ...data.functions.filter(Boolean)],
          range: ['All', ...data.ranges.filter(Boolean)],
          output: ['All', ...data.outputs.filter(Boolean)],
          voltage: ['All', ...data.voltages.filter(Boolean)],
          connection: ['All', ...data.connections.filter(Boolean)],
          material: ['All', ...data.materials.filter(Boolean)],
        });
      } catch (error) {
        console.error('Failed to fetch dropdown data:', error);
      }
    };

    fetchDropdownData();
  }, []);

  const fetchProducts = async (page: number, updatedFilters: Record<string, string> = filters) => {
    try {
      const queryParams = new URLSearchParams(
        Object.entries(updatedFilters).reduce(
          (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
          {}
        )
      );
      queryParams.append('page', page.toString());

      const response = await fetch(`${API_BASE_URL}/search-products-extended?${queryParams.toString()}`);
      const data = await response.json();

      setProducts(data.products || []);
      setCurrentPage(data.page || 1);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [filters, currentPage]);

  const handleFilterChange = (key: string) => (event: ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, [key]: event.target.value === 'All' ? '' : event.target.value };
    setFilters(newFilters);
    fetchProducts(1, newFilters); // Fetch products with updated filters on dropdown change
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchProducts(newPage); // Fetch products for the selected page
    }
  };

  return (
    <div className="product-main">
      <style>
        {`
          .product-filter {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            margin-bottom: 20px;
          }

          .filter-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 180px; /* Uniform size for dropdowns */
          }

          .filter-label {
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
          }

          .filter-dropdown {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            width: 100%;
            background-color: #fff;
            cursor: pointer;
          }

          .pagination-holder {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin: 20px 0 50px; /* Add margin below pagination for footer spacing */
          }
        `}
      </style>

      <h1 className="product-header">All Products</h1>

      {/* Filter Section */}
      <div className="product-section">
        <div className="product-filter">
          {Object.entries(dropdownData).map(([key, values]) => (
            <div key={key} className="filter-item">
              <label htmlFor={key} className="filter-label">
                {key
                  .replace('brand', 'BRAND')
                  .replace('main_cat', 'MAIN CATEGORIES')
                  .replace('sub_cat', 'SUB CATEGORIES')
                  .replace('housing_size', 'HOUSING SIZES')
                  .replace('function', 'FUNCTIONS')
                  .replace('range', 'RANGES')
                  .replace('output', 'OUTPUTS')
                  .replace('voltage', 'VOLTAGES')
                  .replace('connection', 'CONNECTIONS')
                  .replace('material', 'MATERIALS')}
              </label>
              <select
                id={key}
                value={filters[key as keyof typeof filters] as string}
                onChange={handleFilterChange(key)}
                className="filter-dropdown"
              >
                {values.map((value: string, index: number) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.images || defaultImage}
              alt={product.model || 'Product'}
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />
            <div className="product-details">
              <h2>{product.model || 'N/A'}</h2>
              <p><strong>Brand:</strong> {product.brand || 'N/A'}</p>
              <p><strong>Main Category:</strong> {product.main_cat || 'N/A'}</p>
              <p><strong>Sub Category:</strong> {product.sub_cat || 'N/A'}</p>
              <a
                href={product.pdf || '#'}
                target={product.pdf ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <button className="details-btn">Details</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-holder">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
