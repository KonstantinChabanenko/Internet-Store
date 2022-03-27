import { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import PageContentStyled from './PageContentStyled';
import ProductSlider from '../productSlider/ProductSlider';
import Swatches from '../swatches/Swatches';
import Sizes from '../sizes/Sizes';
import Quantity from '../quantity/Quantity';
import Grid from '@mui/material/Grid';
import Backdrop from '../../backdrop/Backdrop';
import { setProduct } from '../productSlice';
import getProduct from '../../../api/product';

const PageContent = () => {
    const [loaded, setLoaded] = useState(true);
    const currentProduct = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    const params = useParams();
    let [searchParams] = useSearchParams();

    useEffect(() => {
        (async () => {
            setLoaded(false);
            let querystring = `?masterID=${params.masterID}`;

            for (const entry of searchParams.entries()) {
                const [param, value] = entry;

                querystring += `&${param}=${value}`;
            }

            const product = await getProduct(querystring);

            dispatch(setProduct(product.data));
            setLoaded(true);
        })();
    }, [dispatch, searchParams, params.masterID]);

    return (
        <Fragment>
            {currentProduct && loaded ? (
                <PageContentStyled>
                    <ProductSlider images={currentProduct.images} />
                    <div className="details">
                        {currentProduct?.variationAttrs?.colors?.length && <Swatches colors={currentProduct.variationAttrs.colors} />}
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                {currentProduct?.variationAttrs?.sizes?.length && <Sizes sizes={currentProduct.variationAttrs.sizes} />}
                            </Grid>
                            <Grid item xs={4}>
                                <Quantity maxQuantity={currentProduct.availabilityModel.ATS < 10 ? currentProduct.availabilityModel.ATS : 10} />
                            </Grid>
                        </Grid>
                        <div className="availability-block">
                            <span className="availability-label">Availability:&nbsp;</span>
                            <span className="availability-value">{currentProduct.availabilityModel.inStock ? 'In Stock' : 'Out Of Stock'}</span>
                        </div>
                        <div className="product-details-cta">
                            <div className="price-value">{'$' + currentProduct.price.toString()}</div>
                            <Button variant="contained" size="large">
                                <AddShoppingCartIcon />&nbsp;Add to cart
                            </Button>
                        </div>
                    </div>
                    <Grid container spacing={2} className="description-block">
                        <Grid item md={3}>
                            <span className="description-label">Description</span>
                        </Grid>
                        <Grid item md={9}>
                            <span className="description-value">{currentProduct.description}</span>
                        </Grid>
                    </Grid>
                </PageContentStyled>
            ) : <Backdrop />}
        </Fragment>
    );
};

export default PageContent;
