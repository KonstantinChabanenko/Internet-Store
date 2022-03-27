import { styled } from '@mui/material/styles';

const PageContentStyled = styled('div')`
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;

    .product-carousel {
        flex-basis: 100%;

        ${({ theme }) => theme.breakpoints.up('md')} {
            flex-basis: 600px;
        }
    }

    .product-carouse-image {
        width: 100%;
        height: 100%;
    }

    .carousel-nav-btn {
        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    .active-indicator-icon {
        color: ${({ theme }) => theme.colors.black};
    }

    .details {
        ${({ theme }) => theme.breakpoints.up('md')} {
            margin-left: 40px;
        }

        flex-grow: 1;
    }

    .swatches-list {
        display: flex;
    }

    .swatches-label {
        margin-bottom: 10px;
    }

    .swatch {
        cursor: pointer;
    }

    .swatch {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.grey1};
    }

    .sizes, .quantity {
        margin-top: 20px;
    }

    .availability-block {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        font-size: 24px;
    }

    .availability-value {
        font-weight: 600;
    }

    .price-value {
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 600;
    }

    .product-details-cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }

    .description-block {
        margin-top: 40px;
    }

    .description-label {
        font-size: 32px;
        line-height: 24px;
    }
`;

export default PageContentStyled;
