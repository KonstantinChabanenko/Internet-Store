import HeaderStyled from './HeaderStyled';
import HeaderContainer from './headerContainer/HeaderContainer';
import HambugerBtn from './hamburgerBtn/HamburgerBtn';
import Logo from './logo/Logo';

const Header = () => {
  return (
    <HeaderStyled>
        <HeaderContainer>
            <HambugerBtn />
            <Logo />
            <div className="cart-icon">Cart</div>
        </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
