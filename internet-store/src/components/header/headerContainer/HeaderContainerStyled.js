import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const HeaderContainerStyled = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    ${({ theme }) => theme.breakpoints.down('md')} {
        height: 70px;
    }
`;

export default HeaderContainerStyled;
