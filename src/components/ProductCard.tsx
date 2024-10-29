import React from "react";
import { Link } from "react-router-dom";
import defaultImage from '../assets/images/NoImageFound.jpg.png'; 

interface ProductCardProps {
    productName: string;
    productDescription: string;
    price: string;
    image: string;
    id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productName,
    productDescription,
    price,
    image,
    id,
}) => {
    return (
        <div className="product-card">
            <img
                src={image}
                alt=""
                onError={(e) => {
                    // Set the image source to defaultImage if the original fails to load
                    (e.target as HTMLImageElement).src = defaultImage;
                }}
            />
            <div className="product-details">
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <div className="product-container">
                    <span className="price">₹{price}</span>
                    {/* Uncomment this if you want to use the link */}
                    {/* <Link to={`/product-details/${id}`} className="details-btn">View Details</Link> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
