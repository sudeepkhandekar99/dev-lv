import { Link } from 'react-router-dom';
import brands from "../../data/brands";

function Brands() {
    const handleClick = () => {
        window.scroll(0, 0);
    };

    return (
        <div className='product-main'>
            <h1 className='product-header'>Search Products by Brand</h1>
            <div className='brands-grid'>
                {brands.map(brand => (
                    <div key={brand.id} className='brand-item'>
                        <Link to={`/product-category?brand=${brand.name.toLowerCase()}`} onClick={handleClick}>
                            <img src={brand.image} alt={brand.name} width="200px" height="200px" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
