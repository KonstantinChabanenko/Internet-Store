import { Link } from 'react-router-dom';
import ProductTileStyled from './ProductTileStyled';
import Swatch from './swatch/Swatch';

const ProductTile = ({ product }) => {
    return (
        <ProductTileStyled>
            <div className="image-wrapper">
                <Link to={`/product/${product.id}`}>
                    <img src={product.imageSrc} alt={product.name} className="image" />
                </Link>
            </div>
            {
                product?.colors?.length && (
                    <div className="swatches">
                        {product.colors.map((color) => (
                            <Link to={`/product/${product.id}&color=${color._id}`} key={color._id}>
                                <Swatch bgimage={color.imageURL} />
                            </Link>
                        ))}
                    </div>
                )
            }
            <div className="product-name">
                <Link to={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </div>
            <div className="product-price">{`$${product.price.toString()}`}</div>
        </ProductTileStyled>
    );
};

export default ProductTile;
