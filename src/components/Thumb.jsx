const Thumb = ({ cover, title }) => {
    return (
        <div
            className="thumb-card"
            style={{ backgroundImage: `url(${cover})` }}
        >
            <h4 className="thumb-title">{title}</h4>
        </div>
    );
};

export default Thumb;
