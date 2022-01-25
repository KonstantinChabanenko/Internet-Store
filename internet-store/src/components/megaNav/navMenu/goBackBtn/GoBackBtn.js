import GoBackBtnStyled from './GoBackBtnStyled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const GoBackBtn = ({ handleClick }) => {

    return (
        <GoBackBtnStyled onClick={ handleClick }>
            <ArrowBackIosIcon />
        </GoBackBtnStyled>
    );
};

export default GoBackBtn;
