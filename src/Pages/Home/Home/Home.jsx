// import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Classes from "./Classes/Classes";
import GroupClass from "./GroupClass/GroupClass";
import Instructor from "./Instructor/Instructor";
import Slider from "./Slider/Slider";
import AboutSchool from "./AboutSchool";
import Testimony from "./Testimony";
import OurMedia from "./ourMedia/OurMedia";
import Notes from "./Notes";
import HomeBlogs from "./HomeBlogs";

const Home = () => {
  // const [theme, setTheme] = useState("light");

  // const darkThemeStyle = {
  //   backgroundColor: "#1a1a1a",
  //   color: "#ffffff",
  // };

  // const lightThemeStyle = {
  //   backgroundColor: "#ffffff",
  //   color: "#000000",
  // };

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  return (
    <div>
      {/* <div style={theme === "dark" ? darkThemeStyle : lightThemeStyle}> */}
        <Helmet>
          <title>Academy | Home</title>
        </Helmet>
        {/* <h2>Change Theme</h2> */}
        {/* <button onClick={toggleTheme}><input type="checkbox" className="toggle" /></button> */}
        <Slider></Slider>
        <Notes></Notes>
        <AboutSchool></AboutSchool>
        <HomeBlogs></HomeBlogs>
        <Classes></Classes>
        <Instructor></Instructor>
        <Testimony></Testimony>
        <GroupClass></GroupClass>
        <OurMedia></OurMedia>

      </div>
    // </div>
  );
};

export default Home;


