import { HeroDesktop } from "./Desktop";
import { HeroMobile } from "./Mobile";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
    </div>
  );
};
