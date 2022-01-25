import { useDispatch } from 'react-redux';
import { toggleMegaNav } from '../../megaNav/meganavSlice';
import HamburgerBtnStyled from './HamburgerBtnStyled';
import MenuIcon from '@mui/icons-material/Menu';

const HamburgerBtn = () => {
    const dispatch = useDispatch();

    return (
        <HamburgerBtnStyled onClick={ () => dispatch(toggleMegaNav(true)) }>
            <MenuIcon />
        </HamburgerBtnStyled>
    );
};

export default HamburgerBtn;
