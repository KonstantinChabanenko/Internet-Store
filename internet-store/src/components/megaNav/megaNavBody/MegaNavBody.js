import { useSelector } from 'react-redux';
import MegaNavBodyStyled from './MegaNavBodyStyled';
import NavItem from '../navItem/NavItem';

const MegaNavBody = () => {
  const categories = useSelector(state => state.meganav.categories);

  return (
    <MegaNavBodyStyled>
      <ul className="nav">
          {categories.map((category) => {
              return (
                <NavItem key={ category._id } category={ category } />
              )
          })}
      </ul>
    </MegaNavBodyStyled>
  );
};

export default MegaNavBody;
