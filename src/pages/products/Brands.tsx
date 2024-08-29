import React from 'react';
import { Link } from 'react-router-dom';
import filterData from "../../data/filter_one.json"; // Import the data
import placeholderImage from '../../assets/images/brands/Datalogic.jpg'; // Import the placeholder image
function Brands() {
    const handleClick = () => {
        window.scroll(0, 0);
    };

    // Extract unique MAIN-Category values
    const mainCategories = [...new Set(filterData.map(item => item['MAIN-Category']))];

    return (
        <div className='product-main'>
            <h1 className='product-header'>Explore Products by Category</h1>
            <div className='brands-grid'>
                {mainCategories.map((category, index) => (
                    <div key={index} className='brand-item'>
                        <Link to={`/product-category?mainCategory=${category.toLowerCase()}`} onClick={handleClick}>
                            <img src={placeholderImage} alt={category} width="200px" height="200px" />
                            <p>{category}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
