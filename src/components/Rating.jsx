import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value }) => {
    const rating = Number(value);

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    className={star <= rating ? "star active" : "star"}
                />
            ))}
        </div>
    );
};

export default Rating;