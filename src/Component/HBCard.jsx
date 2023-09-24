const HBCard = ({ img, date, classname, title, desc }) => {
    return (
      <div className="card rounded-t-xl ">
        <div className="thumb overflow-hidden rounded-t-xl">
          <img
            className="w-full rounded-t-xl hover:scale-125 duration-500 transform"
            src={img}
            alt=""
          />
        </div>
        <div className="card-body px-0">
          <h1 className="text-lg text-[--primary] font-medium">
            {date} | <span className="text-[--secondary]"> {classname}</span>
          </h1>
          <h2 className="card-title text-2xl font-bold text-[#0c4b65] hover:text-[--secondary] duration-200">
            {title}
          </h2>
          <p>{desc}</p>
          <button className="inline w-fit font-medium text-[--secondary]">
            read more {"→"}
          </button>
        </div>
      </div>
    );
  };
  
  export default HBCard;