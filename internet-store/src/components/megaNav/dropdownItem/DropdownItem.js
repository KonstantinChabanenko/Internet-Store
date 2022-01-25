import { Link } from "react-router-dom";

const DropdownItem = ({ category, children, show, setShow }) => {
  const categoryID = category.categoryID;
  const hasSubCategories = !!category?.subCategories?.length;

  const handleClick = (e) => {
    if (e.currentTarget.classList.contains('dropdown-toggle')) {
      e.preventDefault();

      setShow(true);
    }
  };

  return (
    <li
      key={categoryID}
      className={`dropdown-item ${hasSubCategories ? 'dropdown' : ''} ${show ? 'show' : ''}`}
    >
      <Link
        to={`/products/${categoryID}`}
        className={`dropdown-link ${hasSubCategories ? 'dropdown-toggle' : ''}`}
        onClick={ handleClick }
      >
        {category.name}
      </Link>
      { children }
    </li>
  );
};

export default DropdownItem;
