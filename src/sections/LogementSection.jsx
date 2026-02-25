import BoxImg from "../components/BoxImg";
import Carousel from "../components/Carousel";
import DropDown from "../components/DropDown";
import Rating from "../components/Rating";
import TagName from "../components/TagName";

const LogementSection = ({ logement }) => {
    return (
        <div className="logement-section-container">
            <Carousel pictures={logement.pictures} />

            <div className="logement-header">
                <div className="header-row">
                    <div className="title-block">
                        <h1>{logement.title}</h1>
                        <p className="location">{logement.location}</p>
                    </div>

                    <div className="host">
                        <p>{logement.host.name}</p>
                        <BoxImg
                            src={logement.host.picture}
                            alt={logement.host.name}
                            width="64px"
                            height="64px"
                            className="host-picture"
                        />
                    </div>
                </div>

                <div className="header-row">
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <TagName key={index} name={tag} />
                        ))}
                    </div>

                    <Rating value={logement.rating} />
                </div>
            </div>

            <div className="dropdown-container">
                <DropDown title="Description">{logement.description}</DropDown>

                <DropDown title="Equipements">
                    <ul className="equipment-list">
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </DropDown>
            </div>
        </div>
    );
};

export default LogementSection;
