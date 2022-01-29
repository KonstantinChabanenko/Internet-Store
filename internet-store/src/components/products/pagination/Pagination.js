import { Fragment } from 'react';
import PaginationStyled from './PaginationStyled';

const Pagination = ({ count, handleChange }) => {
    return (
        <Fragment>
            <PaginationStyled count={count} onChange={handleChange} />
        </Fragment>
    );
};

export default Pagination;
