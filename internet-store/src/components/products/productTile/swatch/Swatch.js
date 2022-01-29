import { Fragment } from 'react';
import SwatchStyled from './SwatchStyled';

const swatch = ({ bgimage }) => {
    return (
        <Fragment>
            <SwatchStyled bgimage={bgimage} />
        </Fragment>
    );
};

export default swatch;
