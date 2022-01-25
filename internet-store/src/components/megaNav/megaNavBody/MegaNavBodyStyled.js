import { styled } from '@mui/material/styles';

const MegaNavBodyStyled = styled('div')`
    .nav-menu {
        display: flex;
        justify-content: space-between;
        height: 60px;
        padding: 0 20px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey1}
    }

    .nav, .dropdown-menu {
        display: block;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .nav-link, .dropdown-link {
        position: relative;
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
    }

    .dropdown-toggle {
        &::after {
            content: "";
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid;
            position: absolute;
            right: 20px;
        }
    }

    .dropdown {
        .dropdown-menu {
            position: absolute;
            left: -100%;
            top: 0;
            display: block;
            width: 100%;
            height: 100vw;
            transition: left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            background-color: ${({ theme }) => theme.colors.white}
        }

        &.show > .dropdown-menu {
            left: 0;
        }
    }

    .top-category {
        .nav-link {
            font-weight: 600;
        }
    }
`;

export default MegaNavBodyStyled;
