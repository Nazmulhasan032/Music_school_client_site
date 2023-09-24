// import Title from "../../../shared/Title/Title";
import Title from "../../../../Component/Title";
import "./OurMedia.css";

const OurMedia = () => {
  return (
    <div className="mb-20">
      <div>
        <Title
          title={"Our Media"}
          subtitle={"See what our students can do"}
          desc={
            "Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus ligula."
          }
        ></Title>
      </div>
      <div className="">
        <div className="">
          <div className="text-center mt-12">
            <a
              className="img-video relative z-10 text-center inline-block mx-auto"
              href="https://www.youtube.com/watch?v=J56VVtlZCGE"
            >
              <img
                className="rounded-lg"
                src="https://i.ibb.co/R6CR8tj/video-img.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMedia;