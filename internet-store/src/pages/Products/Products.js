import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../components/products/productsSlice';
import { useParams } from 'react-router-dom';
import Page from '../../layouts/page/Page';
import Pagination from '../../components/products/pagination/Pagination';
import ProductGridSkeleton from '../../components/products/productGridSkeleton/ProductGridSkeleton';
import ProductTile from '../../components/products/productTile/ProductTile';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import getProducts from '../../api/products';

const Products = () => {
    const [ paginationCount, setPaginationCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ isLoading, setIsLoading ] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const { productItems } = useSelector(state => state.products);
    const productsAmount = 12;

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await getProducts({...params, 'productIndex': (currentPage - 1) * productsAmount});
            const responseCategory = response.data.category;

            dispatch(setProducts(response.data));
            setPaginationCount(Math.ceil(responseCategory?.products?.length / productsAmount));
            setIsLoading(false);
        })();
    }, [dispatch, params, currentPage]);

    return (
        <Page>
            <h1>Products</h1>
            <Container>
                {isLoading || !productItems?.length ?
                    <ProductGridSkeleton /> :
                    <Grid container spacing={2}>
                        {productItems.map((product) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                <ProductTile product={product} />
                            </Grid>
                        ))}
                    </Grid>
                }
                {paginationCount ? <Pagination count={paginationCount} handleChange={(e, page) => setCurrentPage(page)} /> : ''}
            </Container>
        </Page>
    );
};

export default Products;
