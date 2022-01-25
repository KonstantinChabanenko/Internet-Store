
import { useState } from 'react';
import { Link } from "react-router-dom";
import DropdownItem from '../dropdownItem/DropdownItem';
import CloseMenuBtn from '../navMenu/closeMenuBtn/CloseMenuBtn';
import GoBackBtn from '../navMenu/goBackBtn/GoBackBtn';

const Dropdown = ({ topCategory, renderDropdownItems, hidePreviousDropdown }) => {
  const [show, setShow] = useState(false);

  return (
    <ul className="dropdown-menu">
      <li className="nav-menu">
        <GoBackBtn handleClick={() => hidePreviousDropdown()} />
        <CloseMenuBtn />
      </li>
      <li className="dropdown-item top-category">
        <Link to={`/products/${topCategory._id || topCategory.categoryID}`} className="nav-link">{topCategory.name}</Link>
      </li>
      {topCategory.subCategories.map((subCategory) => {
        const hasSubCategories = !!subCategory?.subCategories?.length;

        return (
          <DropdownItem
            key={subCategory.categoryID}
            category={subCategory}
            show={show}
            setShow={setShow}
          >
            { hasSubCategories && renderDropdownItems(subCategory, () => setShow(false)) }
          </DropdownItem>
        );
      })}
    </ul>
  );
};

export default Dropdown;
