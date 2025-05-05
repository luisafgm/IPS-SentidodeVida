import { MissionBannerData } from '@/Components/Shared/Consts';
import ListItem from './ListItem';

const MissionBanner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20">
      <div className="max-w-xs md:max-w-md">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {MissionBannerData.heading}

        </h3>
        <ul className="text-sm md:ml-5 gap-2 md:gap-5 flex flex-col">
          {MissionBannerData.texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <div className="max-w-xs md:max-w-md">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {MissionBannerData.heading2}

        </h3>
        <ul className="text-sm md:ml-5 gap-2 md:gap-5 flex flex-col">
          {MissionBannerData.texts2.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MissionBanner;
