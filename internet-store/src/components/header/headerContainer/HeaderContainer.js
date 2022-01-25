import HeaderContainerStyled from './HeaderContainerStyled';

const HeaderContainer = ({ children }) => {
  return (
    <HeaderContainerStyled>{ children }</HeaderContainerStyled>
  );
};

export default HeaderContainer;
