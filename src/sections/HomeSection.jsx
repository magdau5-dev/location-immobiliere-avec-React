import Banner from "../components/Banner";
import TagName from "../components/TagName";
import Thumb from "../components/Thumb";

const HomeSection = () => {
    return (
        <>
            <h2>Home Section Component</h2>
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

                <TagName />
            </div>
        </>
    );
};
export default HomeSection;
