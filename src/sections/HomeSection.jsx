import Banner from "../components/Banner";
import Thumb from "../components/Thumb";

const HomeSection = () => {
    return (
        <>
            <div>
                <Banner />
                <div className="thumb-container">
                    <Thumb />
                    <Thumb />
                    <Thumb />
                    <Thumb />
                    <Thumb />
                    <Thumb />
                </div>
            </div>
        </>
    );
};
export default HomeSection;
