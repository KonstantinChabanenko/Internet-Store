import { styled } from '@mui/material/styles';

const MegaNavHeaderStyled = styled('div')`
    display: flex;
    justify-content: flex-end;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey1}
`;

export default MegaNavHeaderStyled;
