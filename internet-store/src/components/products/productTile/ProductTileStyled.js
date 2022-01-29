import { styled } from '@mui/material/styles';

const ProductTileStyled = styled('div')`
    .image {
        width: 100%;
        height: auto;
    }

    .swatches {
        display: flex;
    }

    .product-name {
        text-align: left;

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.black}
        }
    }

    .product-price {
        text-align: left;
        font-weight: 600;
        font-size: 20px;
    }

    & > * {
        margin-bottom: 20px;
    }
`;

export default ProductTileStyled;
