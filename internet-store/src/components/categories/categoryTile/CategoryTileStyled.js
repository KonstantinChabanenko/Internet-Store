import { styled } from '@mui/material/styles';

const CategoryTileStyled = styled('div')`
    .category-tile {
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .category-name {
        position: absolute;
        bottom: 15%;
        left: 10%;
        margin: 0;
        color: ${({ theme }) => theme.colors.white}
    }
`;

export default CategoryTileStyled;
