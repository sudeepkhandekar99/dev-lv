import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import products from "../../data/products";
import brands from "../../data/brands";
import categories from "../../data/product-category";
import subcategories from "../../data/product-subcategory";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Products() {
    const [brandFilters, setBrandFilters] = useState<string[]>([]);
    const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
    const [subcategoryFilters, setSubcategoryFilters] = useState<string[]>([]);
    const [sensingDistanceFilter, setSensingDistanceFilter] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        const brands = query.getAll('brand').map(b => b.toLowerCase());
        const categories = query.getAll('category').map(c => c.toLowerCase());
        const subcategories = query.getAll('subcategory').map(sc => sc.toLowerCase());

        setBrandFilters(brands);
        setCategoryFilters(categories);
        setSubcategoryFilters(subcategories);
    }, [query]);

    const handleFilterChange = (filterSetter: React.Dispatch<React.SetStateAction<string[]>>, filterValues: string[], queryParam: string) => (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value.toLowerCase();
        let newFilters: string[];
    
        if (value === '') {
            newFilters = [];
        } else {
            newFilters = filterValues.includes(value) ? filterValues.filter(f => f !== value) : [...filterValues, value];
        }
    
        filterSetter(newFilters);
    
        const searchParams = new URLSearchParams(query.toString());
        searchParams.delete(queryParam);
        newFilters.forEach(filter => {
            if (filter !== '') {
                searchParams.append(queryParam, filter);
            }
        });
    
        navigate(`/products?${searchParams.toString()}`);
    };    

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        console.log('Search submitted:', searchTerm);
    };

    const handleClearFilters = () => {
        setBrandFilters([]);
        setCategoryFilters([]);
        setSubcategoryFilters([]);
        setSensingDistanceFilter('');
        setSearchTerm('');
        navigate('/products');
    };    

    const filteredProducts = products.filter(product => {
        return (
            (brandFilters.length === 0 || brandFilters.includes(product.brand.toLowerCase()) || brandFilters.includes('')) &&
            (categoryFilters.length === 0 || categoryFilters.includes(product.category.toLowerCase()) || categoryFilters.includes('')) &&
            (subcategoryFilters.length === 0 || subcategoryFilters.includes(product.subcategory.toLowerCase()) || subcategoryFilters.includes('')) &&
            (searchTerm === '' || product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });    

    return (
        <div className='product-main'>
            <h1 className='product-header'>All Products</h1>

            <div className='product-section'>
                <div className='product-count'>
                    <span>Showing {filteredProducts.length} of {products.length} results</span>
                </div>
                <div className='product-filter'>
                    <div>
                        <select className='filter-dropdown' onChange={handleFilterChange(setBrandFilters, brandFilters, 'brand')} value={brandFilters}>
                            <option value='' selected={brandFilters.length === 0}>All Brands</option>
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.name.toLowerCase()}>{brand.name}</option>
                            ))}
                        </select>
                        <select className='filter-dropdown' onChange={handleFilterChange(setCategoryFilters, categoryFilters, 'category')} value={categoryFilters}>
                            <option value='' selected={categoryFilters.length === 0}>All Categories</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name.toLowerCase()}>{category.name}</option>
                            ))}
                        </select>

                        <select className='filter-dropdown' onChange={handleFilterChange(setSubcategoryFilters, subcategoryFilters, 'subcategory')} value={subcategoryFilters}>
                            <option value='' selected={subcategoryFilters.length === 0}>All Subcategories</option>
                            {subcategories.map((subcategory) => (
                                <option key={subcategory.id} value={subcategory.name.toLowerCase()}>{subcategory.name}</option>
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
                        key={product.id}
                        productName={product.productName}
                        productDescription={product.productDescription}
                        price={product.price}
                        image={product.image}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
