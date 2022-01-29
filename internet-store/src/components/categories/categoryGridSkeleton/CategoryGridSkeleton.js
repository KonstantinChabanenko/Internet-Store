import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const CategoryGridSkeleton = () => {
    return (
        <Grid container spacing={2}>
            {[...Array(4)].map((el, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Skeleton variant="rectangular" height={350} width="100%" />
                </Grid>
            ))}
        </Grid>
    );
};

export default CategoryGridSkeleton;
