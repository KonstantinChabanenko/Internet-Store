import { useSearchParams } from "react-router-dom";

const Swatches = ({ colors }) => {
    let [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (colorValue) => {
        setSearchParams({...Object.fromEntries([...searchParams]), color: colorValue});
    };

    return (
        <div className="swatches">
            <div className="swatches-label">Select Color</div>
            <div className="swatches-list">
                {colors.map((color) => (
                    <button 
                        className="swatch"
                        style={{ backgroundImage: `url(${color.imageURL})` }}
                        key={color._id}
                        onClick={() => handleClick(color._id)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Swatches;
