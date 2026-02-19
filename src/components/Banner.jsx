const Banner = ({
    className = "",
    backgroundUrl,
    overlayColor = "rgba(0, 0, 0, 0.5)",
    text,
}) => {
    return (
        <div
            className={`banner-container ${className}`}
            style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
            <div
                className="banner-overlay"
                style={{ backgroundColor: overlayColor }}
            ></div>

            {text && <p className="banner-text">{text}</p>}
        </div>
    );
};

export default Banner;
