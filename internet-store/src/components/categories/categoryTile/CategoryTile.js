import { Link } from 'react-router-dom';
import CategoryTileStyled from './CategoryTileStyled';

const CategoryTile = ({ category }) => {
    const { categoryID, name, imageURL } = category;

    return (
        <CategoryTileStyled>
            <Link to={`/products/${categoryID}`}>
                <div className="category-tile">
                    <img src={ imageURL } alt={ name } className="category-image" />
                    <h2 className="category-name">{ name }</h2>
                </div>
            </Link>
        </CategoryTileStyled>
    );
};

export default CategoryTile;
