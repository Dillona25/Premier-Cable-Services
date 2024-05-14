import Splicing from "../../images/splicing2.png";

export const ServicesCard = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-3 rounded-2xl w-[380px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <img
        alt="image of fiberoptic splicing"
        src={Splicing}
        className="rounded-2xl"
      />
      <h1 className="text-[24px] leading-[24px] text-center">
        Fiberoptic Splicing
      </h1>
      <p className="text-center mb-5">
        Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc
        lacus vel facilisis volutpat est velitolm.
      </p>
    </div>
  );
};
