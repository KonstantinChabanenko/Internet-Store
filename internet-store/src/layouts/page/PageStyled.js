import { styled } from '@mui/material/styles';

const PageStyled = styled('div')`
    ${({ theme }) => theme.breakpoints.up('md')} {
        padding-top: 80px;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        padding-top: 70px;
    }
`;

export default PageStyled;
