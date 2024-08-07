import React from "react";
import { Link } from "react-router-dom";

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
                <img src={image} alt="" />
            <div className="product-details">
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <div className="product-container">
                    <span className="price">₹{price}</span>
                    <Link to={`/product-details/${id}`} className="details-btn">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
