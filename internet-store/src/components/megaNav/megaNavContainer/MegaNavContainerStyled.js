import { styled } from '@mui/material/styles';

const MegaNavContainerStyled = styled('nav')`
    postition: absolute;
    background-color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 100vw;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        width: 600px;
    }
`;

export default MegaNavContainerStyled;
