import { Link } from "react-router-dom";

const Thumb = ({ id, cover, title }) => {
    return (
        <Link to={`/logement/${id}`} className="thumb-link">
            <div
                className="thumb-card"
                style={{ backgroundImage: `url(${cover})` }}
            >
                <h4 className="thumb-title">{title}</h4>
            </div>
        </Link>
    );
};

export default Thumb;
