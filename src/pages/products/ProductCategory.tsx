import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import filterData from "../../data/filter_one.json"; // Import the data
import defaultImage from '../../assets/images/brands/Datalogic.jpg'; // Import the default image
import Fiberoptic from '../../assets/images/sub_cat_images/Fiberoptic.png';
import Pressure from '../../assets/images/sub_cat_images/Pressure.png';
import area from '../../assets/images/sub_cat_images/area.png';
import capacitive from '../../assets/images/sub_cat_images/capacitive.png';
import colormark from '../../assets/images/sub_cat_images/colormark.png';
import fork from '../../assets/images/sub_cat_images/fork.png';
import hmd from '../../assets/images/sub_cat_images/hmd.png';
import inductive from '../../assets/images/sub_cat_images/inductive.png';
import magnetic from '../../assets/images/sub_cat_images/magnetic.png';
import motion from '../../assets/images/sub_cat_images/motion.png';
import photoelectric from '../../assets/images/sub_cat_images/photoelectric.png';
import ring from '../../assets/images/sub_cat_images/ring.png';
import temperature from '../../assets/images/sub_cat_images/temperature.png';

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

// Map sub-category names to their respective images
const subCategoryImages: Record<string, string> = {
    Fiberoptic,
    Pressure,
    area,
    capacitive,
    colormark,
    fork,
    hmd,
    inductive,
    magnetic,
    motion,
    photoelectric,
    ring,
    temperature,
};

// Map sub-category names in the JSON to image keys
const subCategoryMapping: Record<string, string> = {
    "COLOR/MARK/LUMINESCENCE": "colormark",
    "FIBER OPTIC": "Fiberoptic",
    "INDUCTIVE": "inductive",
    "CAPACITIVE": "capacitive",
    "PHOTOELECTRIC": "photoelectric",
    "MAGNETIC": "magnetic",
    "HMD": "hmd",
    "FORK": "fork",
    "RING": "ring",
    "AREA": "area",
    "MOTION": "motion",
    "TEMPERATURE": "temperature",
    "PRESSURE": "Pressure",
    "LEVEL": "level", // Default if no image exists for "level"
    "OTHERS": "others", // Default for others
};

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
    let subCategories = [...new Set(filteredCategories.map(product => product['SUB-Category'] || ''))];

    // Sort alphabetically but keep "OTHERS" at the end
    subCategories = subCategories.sort((a, b) => {
        if (a.toUpperCase() === "OTHERS") return 1; // "OTHERS" should come last
        if (b.toUpperCase() === "OTHERS") return -1;
        return a.localeCompare(b); // Regular alphabetical sorting
    });

    return (
        <div className='product-main'>
            <h1 className='product-header'>Search Products by Sub-Category</h1>
            <div className='brands-grid'>
                {subCategories.length > 0 ? (
                    subCategories.map((subCategory, index) => {
                        const normalizedKey = subCategoryMapping[subCategory.toUpperCase()] || subCategory.toLowerCase();
                        return (
                            <div key={index} className='brand-item'>
                                <Link to={`/product-subcategory?mainCategory=${mainCategory}&subCategory=${subCategory.toLowerCase()}`} onClick={handleClick}>
                                    <img
                                        src={subCategoryImages[normalizedKey] || defaultImage}
                                        alt={subCategory}
                                        width="200px"
                                        height="200px"
                                    />
                                    <span>{subCategory}</span>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <p>No sub-categories found for the selected main category.</p>
                )}
            </div>
        </div>
    );
}

export default ProductCategory;
