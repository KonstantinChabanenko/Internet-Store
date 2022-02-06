import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import PageContentStyled from './PageContentStyled';
import ProductSlider from '../productSlider/ProductSlider';
import { setProduct } from '../productSlice';
import getProduct from '../../../api/product';

const PageContent = () => {
    const currentProduct = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        (async () => {
            const search = location.search;
            const querystring = `?masterID=${params.masterID + (search ? '&' + search.slice(1) : '')}`;
            const product = await getProduct(querystring);

            dispatch(setProduct(product.data));
        })();
    }, [dispatch, location.search, params.masterID]);

    return (
        <Fragment>
            {currentProduct && (
                <PageContentStyled>
                    <ProductSlider images={currentProduct.images} />
                </PageContentStyled>
            )}
        </Fragment>
    );
};

export default PageContent;
