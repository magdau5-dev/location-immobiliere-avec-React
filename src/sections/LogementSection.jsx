import Carousel from "../components/Carousel";
import DropDown from "../components/DropDown";

const LogementSection = ({ logement }) => {
    return (
        <div>
            <Carousel pictures={logement.pictures} />

            <DropDown title="Description">{logement.description}</DropDown>
        </div>
    );
};

export default LogementSection;
