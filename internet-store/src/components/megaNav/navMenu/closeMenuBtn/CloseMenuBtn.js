import { useDispatch } from 'react-redux';
import { toggleMegaNav } from '../../meganavSlice';
import CloseMenuBtnStyled from './CloseMenuBtnStyled';
import CloseIcon from '@mui/icons-material/Close';

const CloseMenuBtn = () => {
    const dispatch = useDispatch();

    return (
        <CloseMenuBtnStyled onClick={ () => dispatch(toggleMegaNav(false)) }>
            <CloseIcon />
        </CloseMenuBtnStyled>
    );
};

export default CloseMenuBtn;
