const Banner = ({
    className = "",
    backgroundUrl,
    overlayColor = "rgba(0, 0, 0, 0.6)",
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

            <p className="banner-text">Chez vous, partout et ailleurs</p>
        </div>
    );
};

export default Banner;
