import Carousel from 'react-material-ui-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductSlider = ({ images }) => {
    return (
        <Carousel
            autoPlay={false}
            className="product-carousel"
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{ className: 'carousel-nav-btn' }}
            activeIndicatorIconButtonProps={{ className: 'active-indicator-icon' }}
            onChange={() => {
                window.setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 300);
            }}
        >
            {
                images.map((image, i) => (
                    <div key={i}><img src={image} alt="test" className="product-carouse-image" /></div>
                ))
            }   
        </Carousel>
    );
};

export default ProductSlider;
