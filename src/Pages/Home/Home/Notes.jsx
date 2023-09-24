// import ButtonAwesome from "../../../shared/ButtonAwesome/ButtonAwesome";
import { motion } from "framer-motion";

const Notes = () => {
  const bounceAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      animate={bounceAnimation}
      className="xl:p-[100px] lg:p-[70px] md:p-12 p-4 max-w-screen-xl mx-auto rounded-lg bg-center bg-no-repeat bg-[#efcf4f]"
      style={{ backgroundImage: `url('https://i.ibb.co/mRb70NJ/notes.png')` }}
    >
      <div className="text-center font-extrabold flex flex-col gap-5 w-full md:w-11/12 xl:w-9/12 mx-auto">
        <h3 className="text-[#c25934] text-2xl capitalize">opening offer</h3>
        <h1
          className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl  uppercase"
          style={{ textShadow: "6px 8px 0px rgba(0,0,0,.05)" }}
        >
          get a free lesson
        </h1>
        <p
          style={{ lineHeight: "1.5" }}
          className="text-lg text-justify md:text-center md:text-2xl  text-[#0c4b65]"
        >
          Bring your children to a trial lesson to find out how much they enjoy
          doing music or singing
        </p>
        {/* <div
          data-aos="zoom-in-up"
          className="flex flex-col md:flex-row md:items-center justify-center font-extrabold gap-8 mt-8"
        >
          <ButtonAwesome
            link={"/instructors"}
            text={"GET STARTED"}
          ></ButtonAwesome>
          <ButtonAwesome
            link={"/classes"}
            text={"CHOOSE CLASS"}
            type={"danger"}
          ></ButtonAwesome>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Notes;