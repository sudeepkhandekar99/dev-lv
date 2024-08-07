import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import QuoteModal from '../sections/QuoteModal';

const ProductsDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProduct = products.find(product => product.id === id);

    if (!filteredProduct) {
        return <div>Product not found</div>;
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleQuoteRequest = () => {
        openModal();
    };

    return (
        <div className='product-main'>
            <h1 className='product-header'>Product Details</h1>
            <div className='details-section'>
                <img src={filteredProduct.image} alt={filteredProduct.productName} />
                <div>
                    <h1>{filteredProduct.productName}</h1>
                    <p><b>Description:</b> {filteredProduct.productDescription}</p>
                    <p><b>Brand:</b> {filteredProduct.brand}</p>
                    <p><b>Price:</b> ₹{filteredProduct.price}</p>
                    <button className='quote-btn' onClick={handleQuoteRequest}>Request a Quote</button>
                </div>
            </div>
            {isModalOpen && <QuoteModal closeModal={closeModal} />}
        </div>
    );
};

export default ProductsDetails;
