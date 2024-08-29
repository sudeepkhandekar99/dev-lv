import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import filterData from "../../data/filter_one.json"; // Import the data
import defaultImage from '../../assets/images/brands/Datalogic.jpg'; // Import the default image

// Define types based on the actual structure of the data
interface ProductCategoryItem {
    Code: string;
    'MAIN-Category': string;
    'SUB-Category': string;
    BRAND: string;
    'Model number': string;
    Stock: number;
    Price: number;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Products: React.FC = () => {
    const [brandFilter, setBrandFilter] = useState<string>(''); // Single string instead of array
    const [categoryFilter, setCategoryFilter] = useState<string>(''); // Single string instead of array
    const [subcategoryFilter, setSubcategoryFilter] = useState<string>(''); // Single string instead of array
    const [searchTerm, setSearchTerm] = useState<string>('');
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        const brand = query.get('brand')?.toLowerCase() || '';
        const category = query.get('category')?.toLowerCase() || '';
        const subcategory = query.get('subcategory')?.toLowerCase() || '';

        setBrandFilter(brand);
        setCategoryFilter(category);
        setSubcategoryFilter(subcategory);
    }, [query]);

    const handleFilterChange = (filterSetter: React.Dispatch<React.SetStateAction<string>>, queryParam: string) => (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value.toLowerCase();
        filterSetter(value);

        const searchParams = new URLSearchParams(query.toString());
        searchParams.delete(queryParam);
        if (value !== '') {
            searchParams.append(queryParam, value);
        }

        navigate(`/products?${searchParams.toString()}`);
    };

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        console.log('Search submitted:', searchTerm);
    };

    const handleClearFilters = () => {
        setBrandFilter('');
        setCategoryFilter('');
        setSubcategoryFilter('');
        setSearchTerm('');
        navigate('/products');
    };

    // Ensure filterData is treated as ProductCategoryItem[]
    const filteredProducts = (filterData as ProductCategoryItem[]).filter(product => {
        return (
            (brandFilter === '' || product.BRAND.toLowerCase() === brandFilter) &&
            (categoryFilter === '' || product['MAIN-Category'].toLowerCase() === categoryFilter) &&
            (subcategoryFilter === '' || product['SUB-Category'].toLowerCase() === subcategoryFilter) &&
            (searchTerm === '' || product['Model number'].toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    // Extract unique values for dropdowns
    const uniqueBrands = [...new Set(filterData.map(product => product.BRAND))];
    const uniqueCategories = [...new Set(filterData.map(product => product['MAIN-Category']))];
    const uniqueSubcategories = [...new Set(filterData.map(product => product['SUB-Category']))];

    return (
        <div className='product-main'>
            <h1 className='product-header'>All Products</h1>

            <div className='product-section'>
                <div className='product-count'>
                    <span>Showing {filteredProducts.length} of {filterData.length} results</span>
                </div>
                <div className='product-filter'>
                    <div>
                        <select
                            className='filter-dropdown'
                            onChange={handleFilterChange(setBrandFilter, 'brand')}
                            value={brandFilter}
                        >
                            <option value=''>All Brands</option>
                            {uniqueBrands.map((brand, index) => (
                                <option key={index} value={brand.toLowerCase()}>{brand}</option>
                            ))}
                        </select>
                        <select
                            className='filter-dropdown'
                            onChange={handleFilterChange(setCategoryFilter, 'category')}
                            value={categoryFilter}
                        >
                            <option value=''>All Categories</option>
                            {uniqueCategories.map((category, index) => (
                                <option key={index} value={category.toLowerCase()}>{category}</option>
                            ))}
                        </select>
                        <select
                            className='filter-dropdown'
                            onChange={handleFilterChange(setSubcategoryFilter, 'subcategory')}
                            value={subcategoryFilter}
                        >
                            <option value=''>All Subcategories</option>
                            {uniqueSubcategories.map((subcategory, index) => (
                                <option key={index} value={subcategory.toLowerCase()}>{subcategory}</option>
                            ))}
                        </select>
                    </div>
                    <button className='clear-btn' onClick={handleClearFilters}>Clear filters</button>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <button type="button" className="search-btn" onClick={handleSearchSubmit}>Search</button>
                </div>
            </div>

            <div className='product-list'>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.Code}
                        productName={product['Model number']}
                        productDescription={product.BRAND} // Assuming a simple description here
                        price={product.Price.toString()} // Convert number to string
                        image={defaultImage} // Use default image
                        id={product.Code}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
