import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import productCategory from "../../data/product-category";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ProductCategory() {
    const query = useQuery();
    const [brandFilter, setBrandFilter] = useState<string>('');
    
    const handleClick = () => {
        window.scroll(0, 0);
    };

    useEffect(() => {
        const brand = query.get('brand');
        if (brand) {
            setBrandFilter(brand.toLowerCase());
        } else {
            setBrandFilter('');
        }
    }, [useLocation().search]);

    const filteredBrands = productCategory.filter(product => 
        product.brand.toLowerCase().includes(brandFilter)
    );

    return (
        <div className='product-main'>
            <h1 className='product-header'>Search Products by Product Category</h1>
            <div className='brands-grid'>
                {filteredBrands.map(product => (
                    <div key={product.id} className='brand-item'>
                        <Link to={`/product-subcategory?brand=${product.brand.toLowerCase()}&category=${product.name.toLowerCase()}`} onClick={handleClick}>
                            <img src={product.image} alt={product.name} width="200px" height="200px" />
                            <span>{product.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCategory;
