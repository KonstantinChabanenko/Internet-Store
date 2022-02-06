import { styled } from '@mui/material/styles';

const PageContentStyled = styled('div')`
    display: flex;

    .product-carousel {
        flex-basis: 400px;
    }

    .product-carouse-image {
        min-height: 400px;
    }

    .carousel-nav-btn {
        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    .active-indicator-icon {
        color: ${({ theme }) => theme.colors.black};
    }
`;

export default PageContentStyled;
