const BoxImg = ({
    src = "",
    alt = "image",
    width = "150px",
    height = "150px",
    onClick = () => {},
    className = "",
}) => {
    return (
        <div
            className={`box-img ${className}`}
            style={{ width, height }}
            onClick={onClick}
        >
            <img src={src} alt={alt} />
        </div>
    );
};

export default BoxImg;
