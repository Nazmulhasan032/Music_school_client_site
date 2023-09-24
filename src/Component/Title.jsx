const Title = ({ title, subtitle, desc, noDesc }) => {
    return (
      <div data-aos="zoom-out-down">
        <div className="w-11/12 md:w-5/6 xl:w-4/6 mx-auto flex flex-col text-center gap-5">
          <h3 className="text-[#c25934] text-2xl font-extrabold  capitalize">
            {title}
          </h3>
          <h3 className="text-[#0c4b65] text-3xl md:text-4xl lg:text-5xl -mt-4 font-extrabold capitalize">
            {subtitle}
          </h3>
          {!noDesc && (
            <p className="text-base text-justify md:text-center md:text-lg lg:text-xl mt-6">
              {desc
                ? desc
                : "Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus ligula."}
            </p>
          )}
        </div>
      </div>
    );
  };
  
  export default Title;