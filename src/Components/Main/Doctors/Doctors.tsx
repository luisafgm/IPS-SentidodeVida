import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <h3 className="text-4xl font-bold text-center mb-20">
        {DoctorsData.heading}
      </h3>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {DoctorsData.desc}
      </div>
      <img className="m-auto" src={DoctorsData.img} />
      
    </SectionWrapper>
  );
};

export default Doctors;
