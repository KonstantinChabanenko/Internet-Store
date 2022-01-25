import { Link } from 'react-router-dom';
import LogoStyled from './LogoStyled';
import logoDesktop from '../../../images/logo-desktop.svg';
import logoMobile from '../../../images/logo-mobile.svg';

const Logo = () => {
    return (
        <LogoStyled>
            <Link to="/">
                <img src={ logoDesktop } alt="logo" className="logo-desktop" />
                <img src={ logoMobile } alt="logo" className="logo-mobile" />
            </Link>
        </LogoStyled>
    );
};

export default Logo;
