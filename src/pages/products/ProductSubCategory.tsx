import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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

const ProductSubCategory: React.FC = () => {
    const query = useQuery();
    const [mainCategory, setMainCategory] = useState<string>('');
    const [subCategory, setSubCategory] = useState<string>('');

    const handleClick = () => {
        window.scroll(0, 0);
    };

    useEffect(() => {
        const main = query.get('mainCategory');
        const sub = query.get('subCategory');
        
        if (main) {
            setMainCategory(main.toUpperCase());
        } else {
            setMainCategory('');
        }

        if (sub) {
            setSubCategory(sub.toUpperCase());
        } else {
            setSubCategory('');
        }
    }, [useLocation().search]);

    // Ensure filterData is treated as ProductCategoryItem[]
    const filteredProducts = (filterData as ProductCategoryItem[]).filter(product =>
        product['MAIN-Category']?.toUpperCase() === mainCategory &&
        product['SUB-Category']?.toUpperCase() === subCategory
    );

    // Extract unique brand values from the filtered data
    const brands = [...new Set(filteredProducts.map(product => product.BRAND))];

    return (
        <div className='product-main'>
            <h1 className='product-header'>Search Products by Brand</h1>
            <div className='brands-grid'>
                {brands.length > 0 ? (
                    brands.map((brand, index) => (
                        <div key={index} className='brand-item'>
                            <Link to={`/products?brand=${brand.toLowerCase()}&mainCategory=${mainCategory.toLowerCase()}&subCategory=${subCategory.toLowerCase()}`} onClick={handleClick}>
                                <img src={defaultImage} alt={brand} width="200px" height="200px" />
                                <span>{brand}</span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No brands found for the selected main category and sub-category.</p>
                )}
            </div>
        </div>
    );
}

export default ProductSubCategory;
