import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Page from '../../layouts/page/Page';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CategoryTile from '../../components/categories/categoryTile/CategoryTile';
import CategoryGridSkeleton from '../../components/categories/categoryGridSkeleton/CategoryGridSkeleton';

const Categories = () => {
    const params = useParams();
    const categories = useSelector(state => {
        return state.meganav.categories?.find((category) => category._id === params.cgid)?.subCategories;
    });

    return (
        <Page>
            <h1>Categories</h1>
            <Container>
                <Grid container spacing={2}>
                    {categories?.length ?
                        categories.map((category) => (
                            <Grid item xs={12} md={6} lg={4} key={category.categoryID}>
                                <CategoryTile category={category} />
                            </Grid>
                        )) : <CategoryGridSkeleton />}
                </Grid>
            </Container>
        </Page>
    );
};

export default Categories;
