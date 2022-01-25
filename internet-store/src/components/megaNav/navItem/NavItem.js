import { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import Dropdown from '../dropdown/Dropdown';

const NavItem = ({ category }) => {
  const [show, setShow] = useState(false);
  const categoryID = category._id;
  const hasSubCategories = !!category?.subCategories?.length;

  const renderDropdownItems = (topCategory, hidePreviousDropdown) => (
    <Fragment>
      <Dropdown topCategory={ topCategory } renderDropdownItems={renderDropdownItems} hidePreviousDropdown={hidePreviousDropdown} />
    </Fragment>
  );

  const handleClick = (e) => {
    e.preventDefault();

    if (e.currentTarget.classList.contains('dropdown-toggle')) {
      setShow(true);
    }
  };

  return (
    <li
      key={categoryID}
      className={`nav-item ${hasSubCategories ? 'dropdown' : ''} ${show ? 'show' : ''}`}
    >
      <Link
        to={`/products/${categoryID}`}
        className={`nav-link ${hasSubCategories ? 'dropdown-toggle' : ''}`}
        onClick={ handleClick }
      >
        {category.name}
      </Link>
      {hasSubCategories && renderDropdownItems(category, () => setShow(false))}
    </li>
  );
};

export default NavItem;
