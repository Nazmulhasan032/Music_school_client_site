import { Helmet } from "react-helmet-async";
import Classes from "./Classes/Classes";
import GroupClass from "./GroupClass/GroupClass";
import Instructor from "./Instructor/Instructor";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Nazmul Music Academy | Home</title>
            </Helmet>
            <Slider></Slider>
            <Classes></Classes>
            <Instructor></Instructor>
            <GroupClass></GroupClass>
        </div>
    );
};

export default Home;