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

const ProductCategory: React.FC = () => {
    const query = useQuery();
    const [mainCategory, setMainCategory] = useState<string>('');

    const handleClick = () => {
        window.scroll(0, 0);
    };

    useEffect(() => {
        const category = query.get('mainCategory');
        if (category) {
            setMainCategory(category.toUpperCase());
        } else {
            setMainCategory('');
        }
    }, [useLocation().search]);

    // Ensure filterData is treated as ProductCategoryItem[]
    const filteredCategories = (filterData as ProductCategoryItem[]).filter(product =>
        product['MAIN-Category']?.toUpperCase() === mainCategory
    );

    // Extract unique SUB-Category values from the filtered data
    const subCategories = [...new Set(filteredCategories.map(product => product['SUB-Category'] || ''))];

    return (
        <div className='product-main'>
            <h1 className='product-header'>Search Products by Sub-Category</h1>
            <div className='brands-grid'>
                {subCategories.length > 0 ? (
                    subCategories.map((subCategory, index) => (
                        <div key={index} className='brand-item'>
                            <Link to={`/product-subcategory?mainCategory=${mainCategory}&subCategory=${subCategory.toLowerCase()}`} onClick={handleClick}>
                                <img src={defaultImage} alt={subCategory} width="200px" height="200px" />
                                <span>{subCategory}</span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No sub-categories found for the selected main category.</p>
                )}
            </div>
        </div>
    );
}

export default ProductCategory;
