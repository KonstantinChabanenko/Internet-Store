import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useLocation } from "react-router-dom";
import { toggleMegaNav, setMegaNav } from './meganavSlice';
import getCategories from '../../api/categories';
import MegaNavStyled from './MegaNavStyled';
import MegaNavContainer from './megaNavContainer/MegaNavContainer';
import MegaNavHeader from './megaNavHeader/MegaNavHeader';
import MegaNavBody from './megaNavBody/MegaNavBody';
import MegaNavFooter from './megaNavFooter/MegaNavFooter';

const MegaNav = () => {
  const { open, categories } = useSelector(state => state.meganav);
  const dispatch = useDispatch();
  const location = useLocation();

  const showOrHideDialog = useCallback((show) => {
    dispatch(toggleMegaNav(show));
  }, [dispatch]);

  useEffect(() => {
    showOrHideDialog(false);

    if (!categories.length) {
      (async () => {
          const response = await getCategories();

          if (response?.data?.categories) {
              dispatch(setMegaNav(response.data.categories));
          }
      })();
    }
  }, [dispatch, categories.length, showOrHideDialog, location]);

  return (
    <MegaNavStyled open={ open }>
      <MegaNavContainer>
        <MegaNavHeader />
        <MegaNavBody />
        <MegaNavFooter />
      </MegaNavContainer>
    </MegaNavStyled>
  );
};

export default MegaNav;
