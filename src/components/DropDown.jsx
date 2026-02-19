import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropDown = ({ title, description, children }) => {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du dropdown, de base isOpen est à false (faux)

    return (
        <div className="dropdown">
            <button
                className="dropdown-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}

                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`dropdown-arrow ${isOpen ? "open" : ""}`} // Si "isOpen" est true (vrai) parce que le boutton a été cliqué, alors on ajoute la classe "open", sinon on n'ajoute rien
                />
            </button>

            <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
                {
                    children ? children : description
                    // Si je passe du contenu entre les balises <DropDown> CONTENU </DropDown> alors j'affiche le "children"
                    // Sinon, j'affiche "description" du <DropDown description= "........" />.
                }
            </div>
        </div>
    );
};

export default DropDown;
