import { styled } from '@mui/material/styles';

const LogoStyled = styled('div')`
    img {
        width: 100%;
        height: 100%;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        width: 226px;

        .logo-mobile {
            display: none;
        }
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 64px;

        .logo-desktop {
            display: none;
        }
    }
`;

export default LogoStyled;
