import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Classes from "./Classes/Classes";
import GroupClass from "./GroupClass/GroupClass";
import Instructor from "./Instructor/Instructor";
import Slider from "./Slider/Slider";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const darkThemeStyle = {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
  };

  const lightThemeStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div style={theme === "dark" ? darkThemeStyle : lightThemeStyle}>
      <Helmet>
        <title>Academy | Home</title>
      </Helmet>
      <h2>Change Theme</h2>
      <button onClick={toggleTheme}><input type="checkbox" className="toggle" /></button>
      <Slider></Slider>
      <Classes></Classes>
      <Instructor></Instructor>
      <GroupClass></GroupClass>
      
    </div>
  );
};

export default Home;


