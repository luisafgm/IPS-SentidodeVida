import { AboutUsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';

const AboutUs = () => {
  return (
    <SectionWrapper id="nosotros">
      <h3 className="text-4xl font-bold text-center mb-20">
        {AboutUsData.heading}
      </h3>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {AboutUsData.desc}
      </div>
      <img className="m-auto" src={AboutUsData.img} />
      
    </SectionWrapper>
  );
};

export default AboutUs;
