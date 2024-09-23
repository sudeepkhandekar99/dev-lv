import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import filterData from "../../data/filter_one.json"; // Import the data
import brand1 from '../../assets/images/brands/carlo-gavazzi-logo.jpg';
import brand2 from '../../assets/images/brands/Takex-logo.jpg';
import brand3 from '../../assets/images/brands/SELET-logo.jpg';
import brand4 from '../../assets/images/brands/PAN-GLOBE-logo.jpg';
import brand5 from '../../assets/images/brands/xecro-logo.jpg';
import brand6 from '../../assets/images/brands/Mayser-logo.jpg';
import brand7 from '../../assets/images/brands/Hikvision-logo.jpg';
import brand8 from '../../assets/images/brands/microsonic-logo.jpg';
import brand9 from '../../assets/images/brands/bea-logo.jpg';
import brand10 from '../../assets/images/brands/EPV-Logo.jpg';
import brand11 from '../../assets/images/brands/Elko-EP.jpg';
import brand12 from '../../assets/images/brands/lika-logo.jpg';
import brand13 from '../../assets/images/brands/eldes-logo.jpg';
import brand14 from '../../assets/images/brands/Alstron-Logo.jpg';
import brand15 from '../../assets/images/brands/senseware-logo.jpg';
import brand16 from '../../assets/images/brands/skarlet-logo.jpg';
import brand17 from '../../assets/images/brands/Atex.jpg';
import brand18 from '../../assets/images/brands/Panasonic-Logo.jpg';
import brand19 from '../../assets/images/brands/deviteq-logo.jpg';
import brand20 from '../../assets/images/brands/P-F.jpg';
import brand21 from '../../assets/images/brands/optex-logo.jpg';
import brand22 from '../../assets/images/brands/images.jpg';
import brand23 from '../../assets/images/brands/Hotron.jpg';
import brand24 from '../../assets/images/brands/Dupline-Logo.jpg';
import brand25 from '../../assets/images/brands/EMX-Blue-and-White.jpg';
import brand26 from '../../assets/images/brands/Conotec.jpg';
import brand27 from '../../assets/images/brands/Datalogic.jpg';
import defaultImage from '../../assets/images/NoImageFound.jpg.png'; // Import the default image

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

    // Define the brand image mappings
    const brands = [
        { name: "Carlo Gavazzi", image: brand1 },
        { name: "Takex", image: brand2 },
        { name: "Selet", image: brand3 },
        { name: "PAN Globe", image: brand4 },
        { name: "Xecro", image: brand5 },
        { name: "Mayser", image: brand6 },
        { name: "Hikvision", image: brand7 },
        { name: "Microsonic", image: brand8 },
        { name: "BEA", image: brand9 },
        { name: "EPV", image: brand10 },
        { name: "Elko EP", image: brand11 },
        { name: "Lika", image: brand12 },
        { name: "Eldes", image: brand13 },
        { name: "Alstron", image: brand14 },
        { name: "Senseware", image: brand15 },
        { name: "Scarlet", image: brand16 },
        { name: "Atex", image: brand17 },
        { name: "Panasonic", image: brand18 },
        { name: "Daviteq", image: brand19 },
        { name: "P&F", image: brand20 },
        { name: "Optex", image: brand21 },
        { name: "Texelco", image: brand22 },
        { name: "Hotron", image: brand23 },
        { name: "Dupline", image: brand24 },
        { name: "EMX", image: brand25 },
        { name: "Conotec", image: brand26 },
        { name: "Datalogic", image: brand27 },
    ];

    // Extract unique brand values from the filtered data
    const uniqueBrands = [...new Set(filteredProducts.map(product => product.BRAND))];

    return (
        <div className='product-main'>
            <h1 className='product-header'>Search Products by Brand</h1>
            <div className='brands-grid'>
                {uniqueBrands.length > 0 ? (
                    uniqueBrands.map((brand, index) => {
                        // Find the matching brand object from the imported brands array
                        const brandImage = brands.find(b => b.name.toLowerCase() === brand.toLowerCase())?.image || defaultImage;

                        return (
                            <div key={index} className='brand-item'>
                                <Link to={`/products?brand=${brand.toLowerCase()}&mainCategory=${mainCategory.toLowerCase()}&subCategory=${subCategory.toLowerCase()}`} onClick={handleClick}>
                                    <img src={brandImage} alt={brand} width="200px" height="200px" />
                                    <span>{brand}</span>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <p>No brands found for the selected main category and sub-category.</p>
                )}
            </div>
        </div>
    );
}

export default ProductSubCategory;
