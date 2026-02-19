import Banner from "../components/Banner";
import DropDown from "../components/DropDown";

const AboutSection = () => {
    return (
        <>
            <div>
                <Banner backgroundUrl="/src/assets/montagneAndForest.png" />

                <div className="about-dropdowns">
                    <DropDown
                        title="Fiabilité"
                        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                    <DropDown
                        title="Respect"
                        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <DropDown
                        title="Service"
                        description="La qualité du service est au cœur de notre engagement. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                    />
                    <DropDown
                        title="Sécurité"
                        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>
            </div>
        </>
    );
};
export default AboutSection;
