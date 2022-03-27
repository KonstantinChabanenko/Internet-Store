import { useSearchParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Sizes = ({ sizes }) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const searchParamsObject = Object.fromEntries([...searchParams]);

    const handleChange = (e) => {
        setSearchParams({...searchParamsObject, size: e.target.value});
    };

    return (
        <div className="sizes">
            <FormControl fullWidth>
                <InputLabel id="sizes-label">Size</InputLabel>
                <Select
                    labelId="sizes-label"
                    id="sizes-select"
                    value={searchParamsObject.size}
                    defaultValue=""
                    label="Size"
                    onChange={handleChange}
                >
                    <MenuItem value={''}>Select Size</MenuItem>
                    {sizes.map((sizeItem) => (
                        <MenuItem value={sizeItem} key={sizeItem}>{sizeItem.toUpperCase()}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Sizes;
