
import HBCard from "../../../Component/HBCard";
import Title from "../../../Component/Title";

const blogBox = [
  {
    img: "https://i.ibb.co/pnj66Tb/blog1-770x520.jpg",
    date: "September 25, 2017",
    classname: "Vocals",
    title: "We love children and teach them music",
    desc: "Nunc bibendum tincidunt mauris, at euismod velit porttitor ut. Mauris at mauris tincidunt, ...",
  },
  {
    img: "https://i.ibb.co/GJnNfJg/blog2-770x520.jpg",
    date: "September 21, 2017",
    classname: "Guitar lessons",
    title: "Everyone can play the guitar in just 3 months",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nisi, commodo et tortor sit ...",
  },
  {
    img: "https://i.ibb.co/c185cxL/blog3-770x520.jpg",
    date: "September 14, 2017",
    classname: "Drums",
    title: "We teach everyone who wants to become a musician",
    desc: "Vestibulum dui elit, lobortis id interdum vitae, sollicitudin non purus. Pellentesque sed mi erat. ...",
  },
];

const HomeBlogs = () => {
  return (
    <div style={{}} className="py-24">
      <div className="">
        <Title
          title={"Recent Posts"}
          subtitle={"It's Interesting"}
          noDesc={true}
        ></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {blogBox.map(({ img, date, classname, title, desc }) => (
          <HBCard
            key={title}
            img={img}
            title={title}
            date={date}
            classname={classname}
            desc={desc}
          ></HBCard>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;