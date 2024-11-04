import React from 'react';
import { Link } from 'react-router-dom';
import filterData from "../../data/filter_one.json"; // Import the data
import placeholderImage from '../../assets/images/cat_images/NoImageFound.jpg.png'; // Import the placeholder image
import accessories from '../../assets/images/cat_images/accessories.png';
import config from '../../assets/images/cat_images/config.png';
import control from '../../assets/images/cat_images/control.png';
import controller from '../../assets/images/cat_images/controller.png';
import current_transformer from '../../assets/images/cat_images/current_transformer.png';
import relay from '../../assets/images/cat_images/relay.png';
import safety from '../../assets/images/cat_images/safety.png';
import sensor from '../../assets/images/cat_images/sensor.png';
import pressure from '../../assets/images/cat_images/pressure.png'; // adding pressure for completeness

function Brands() {
    const handleClick = () => {
        window.scroll(0, 0);
    };

    // Define imageMap as a Record<string, string>
    const imageMap: Record<string, string> = {
        sensor,
        safety,
        accessories,
        control,
        'current transformer': current_transformer,
        config,
        controller,
        relay,
        pressure
    };

    // Extract unique MAIN-Category values, filtering out any empty or undefined categories
    const mainCategories = [...new Set(filterData.map(item => item['MAIN-Category']).filter(category => category))];

    return (
        <div className='product-main'>
            <h1 className='product-header'>Explore Products by Category</h1>
            <div className='brands-grid'>
                {mainCategories.map((category, index) => {
                    // Try to find the corresponding image by matching the category name
                    const lowerCategory = category.toLowerCase();
                    const imageSrc = imageMap[lowerCategory] || placeholderImage;

                    return (
                        <div key={index} className='brand-item'>
                            <Link to={`/product-category?mainCategory=${lowerCategory}`} onClick={handleClick}>
                                <img src={imageSrc} alt={category} width="200px" height="200px" />
                                <p>{category}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Brands;
