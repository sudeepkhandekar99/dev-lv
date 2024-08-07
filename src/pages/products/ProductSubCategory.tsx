import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import productSubCategory from "../../data/product-subcategory";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ProductSubCategory() {
    const query = useQuery();
    const [brandFilter, setBrandFilter] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('');
    
    const handleClick = () => {
        window.scroll(0, 0);
    };

    useEffect(() => {
        const brand = query.get('brand');
        const category = query.get('category');
        
        if (brand) {
            setBrandFilter(brand.toLowerCase());
        } else {
            setBrandFilter('');
        }

        if (category) {
            setCategoryFilter(category.toLowerCase());
        } else {
            setCategoryFilter('');
        }
    }, [useLocation().search]);

    const filteredProducts = productSubCategory.filter(product => 
        product.brand.toLowerCase().includes(brandFilter) &&
        product.category.toLowerCase().includes(categoryFilter)
    );

    return (
        <div className='product-main'>
            <h1 className='product-header'>Search Products by Product SubCategory</h1>
            <div className='brands-grid'>
                {filteredProducts.map(product => (
                    <div key={product.id} className='brand-item'>
                        <Link to={`/products?brand=${product.brand.toLowerCase()}&category=${product.category.toLowerCase()}&subcategory=${product.name.toLowerCase()}`} onClick={handleClick}>
                            <img src={product.image} alt={product.name} width="200px" height="200px" />
                            <span>{product.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductSubCategory;

