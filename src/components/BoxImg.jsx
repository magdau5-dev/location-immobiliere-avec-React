const BoxImg = ({
    src = "",
    alt = "image",
    width,
    height,
    onClick = () => {},
    className = "",
}) => {
    const style = () => {
        if (width && height) {
            return { width, height };
        } else {
            return undefined;
        }
    };

    return (
        <div
            className={`box-img ${className}`}
            style={style()}
            onClick={onClick}
        >
            <img src={src} alt={alt} />
        </div>
    );
};

export default BoxImg;
