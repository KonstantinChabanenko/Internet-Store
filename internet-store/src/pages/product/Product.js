import Page from "../../layouts/page/Page";
import Container from '@mui/material/Container';
import PageContent from '../../components/product/pageContent/PageContent';

const Product = () => (
    <Page>
        <h1>Product Details</h1>
        <Container>
            <PageContent />
        </Container>
    </Page>
);

export default Product;
