import { OurServicesDesktop } from "./Desktop";
import { OurServicesMobile } from "./Mobile";

export const OurServices = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="md:hidden">
        <OurServicesMobile />
      </div>
      <div className="hidden md:block">
        <OurServicesDesktop />
      </div>
    </div>
  );
};
