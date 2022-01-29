import { styled } from '@mui/material/styles';

const SwatchStyled = styled('div')`
    width: 28px;
    height: 28px;
    margin-right: 10px;
    background-image: url(${({ bgimage }) => bgimage});
    background-position: center;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.grey2}
`;

export default SwatchStyled;
