import { styled } from '@mui/material/styles';

const CloseMenuBtnStyled = styled('button')`
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
`;

export default CloseMenuBtnStyled;
