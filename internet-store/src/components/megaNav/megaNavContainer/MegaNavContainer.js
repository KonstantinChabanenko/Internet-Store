import MegaNavContainerStyled from './MegaNavContainerStyled';

const MegaNavContainer = ({ children }) => {
  return (
    <MegaNavContainerStyled>
        { children }
    </MegaNavContainerStyled>
  );
};

export default MegaNavContainer;
