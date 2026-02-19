import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures }) => {
    // Index de l'image affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    // Image suivante
    const nextImage = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0); // si on est à la dernière => on revient au début
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Image précédente
    const previousImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1); // si on est au début => on va à la dernière
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="carousel">
            <img
                src={pictures[currentIndex]}
                alt="logement"
                className="carousel-image"
            />

            {/* J'afficheles flèches seulement si il y a + d'une image */}
            {pictures.length > 1 && (
                <>
                    <button
                        className="carousel-button left"
                        onClick={previousImage}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                        className="carousel-button right"
                        onClick={nextImage}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    <p className="carousel-counter">
                        {currentIndex + 1}/{pictures.length}
                    </p>
                </>
            )}
        </div>
    );
};

export default Carousel;
