import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Quantity = ({ maxQuantity }) => {
    let [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div className="quantity">
            <FormControl fullWidth>
                <InputLabel id="quantity-label">Quantity</InputLabel>
                <Select
                    labelId="quantity-label"
                    id="quantity-select"
                    value={quantity}
                    label="Quantity"
                    onChange={handleChange}
                >
                    {Array.from(Array(maxQuantity).keys()).map((item) => {
                        const itemValue = item + 1;

                        return <MenuItem value={itemValue} key={itemValue}>{itemValue}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
};

Quantity.defaultProps = {
    maxQuantity: 10
};

export default Quantity;
