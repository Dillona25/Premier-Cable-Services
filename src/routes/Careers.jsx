import CareersImage from "../images/ContactImage.png";

export const Careers = () => {
  return (
    <section>
      <div className="mt-[50px] flex flex-col gap-4 border-b-[1px] border-[#757575] pb-7">
        <h1 className="text-[50px]">Careers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.{" "}
        </p>
        <img
          alt="Careers image"
          src={CareersImage}
          className="rounded-[10px]"
        />
      </div>
    </section>
  );
};
