import Banner from "../components/Banner";
import Thumb from "../components/Thumb";
import logement from "../json/logement.json";

const HomeSection = () => {
    return (
        <>
            <div>
                <Banner backgroundUrl="/src/assets/coastalCliff.png" />

                <div className="thumb-container">
                    {logement.map((item) => (
                        <Thumb
                            key={item.id}
                            id={item.id}
                            cover={item.cover}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
export default HomeSection;
