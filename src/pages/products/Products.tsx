import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
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

  const [filters, setFilters] = useState<Record<string, string>>({
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
  const [searchModel, setSearchModel] = useState('');
  const [searchedProduct, setSearchedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  const query = useQuery();

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/distinct-values`);
        const data = await response.json();
        setDropdownData({
          brand: [query.get('brand') || 'All', ...data.brands.filter(Boolean), 'All'],
          main_cat: [query.get('main_cat') || 'All', ...data.main_categories.filter(Boolean), 'All'],
          sub_cat: [query.get('sub_cat') || 'All', ...data.sub_categories.filter(Boolean), 'All'],
          housing_size: [query.get('housing_size') || 'All', ...data.housing_sizes.filter(Boolean), 'All'],
          function: [query.get('function') || 'All', ...data.functions.filter(Boolean), 'All'],
          range: [query.get('range') || 'All', ...data.ranges.filter(Boolean), 'All'],
          output: [query.get('output') || 'All', ...data.outputs.filter(Boolean), 'All'],
          voltage: [query.get('voltage') || 'All', ...data.voltages.filter(Boolean), 'All'],
          connection: [query.get('connection') || 'All', ...data.connections.filter(Boolean), 'All'],
          material: [query.get('material') || 'All', ...data.materials.filter(Boolean), 'All'],
        });
      } catch (error) {
        console.error('Failed to fetch dropdown data:', error);
      }
    };

    fetchDropdownData();
  }, [products]);

  useEffect(() => {
    const brand = query.get('brand') || '';
    const mainCategory = query.get('main_cat') || '';
    const subCategory = query.get('sub_cat') || '';

    const initialFilters = {
      brand: brand || '',
      main_cat: mainCategory || '',
      sub_cat: subCategory || '',
      housing_size: '',
      function: '',
      range: '',
      output: '',
      voltage: '',
      connection: '',
      material: '',
    };

    setFilters(initialFilters);

    if (brand || mainCategory || subCategory) {
      fetchProducts(1, initialFilters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setSearchedProduct(null); // Reset searched product
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setProducts([]);
    }
  };

  const handleFilterChange = (key: string) => (event: ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, [key]: event.target.value === 'All' ? '' : event.target.value };
    setFilters(newFilters);

    // Update URL parameters while making the API call
    const url = new URL(window.location.href);
    url.searchParams.set(key, newFilters[key]);
    navigate(url.pathname + '?' + url.searchParams.toString(), { replace: true });

    fetchProducts(1, newFilters);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchProducts(newPage);
    }
  };

  const handleSearchByModel = async () => {
    if (!searchModel.trim()) return;
    try {
      const response = await fetch(`${API_BASE_URL}/search-by-model?model=${searchModel.trim()}`);
      const data = await response.json();
      setSearchedProduct(data);
      setProducts([]); // Clear other products to display searched product
    } catch (error) {
      console.error('Failed to fetch product by model:', error);
      setSearchedProduct(null);
    }
  };

  const handleResetFilters = () => {
    setSearchModel('');
    setSearchedProduct(null);
    setFilters({
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
  
    // Clear URL parameters
    navigate('/products', { replace: true });
  
    // Fetch all products again
    fetchProducts(1, {});
  };
  

  useEffect(() => {
    const model = query.get('model') || '';
    if (model) {
      setSearchModel(model);
      fetch(`${API_BASE_URL}/search-by-model?model=${model}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchedProduct(data);
          setProducts([]); // Clear other products to display searched product
        })
        .catch((error) => {
          console.error('Failed to fetch product by model:', error);
          setSearchedProduct(null);
        });
    }
  }, []);

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
            width: 180px;
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
            margin: 20px 0 50px;
          }

          .model-search {
        display: flex;
        align-items: center;
        gap: 10px; /* Space between input and button */
        margin-bottom: 20px;
      }

      .search-input {
        flex: 1; /* Takes up available space */
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
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

      .reset-button {
        padding: 8px 12px;
        background-color:rgb(127, 174, 255);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }

      .reset-button:hover {
        background-color: blue;
      }
        `}
      </style>

      <h1 className="product-header">All Products</h1>

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
      <button onClick={handleResetFilters} className="reset-button">
        Reset
      </button>
    </div>

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
                value={filters[key as keyof typeof filters] || ''}
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

      <div className="product-list">
      {searchedProduct ? (
        searchedProduct.map((product) => (
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
        ))

        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
      {!searchedProduct ? (<div className="pagination-holder">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>) : (<div></div>)}
    </div>
  );
};

export default Products;
