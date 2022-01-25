import { styled } from '@mui/material/styles';

const HeaderStyled = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.white}
`;

export default HeaderStyled;
