import { ServicesData } from '@/Components/Shared/Consts';
import Service from './Service';
import { useState } from 'react';
import { SelectedService } from '@/Components/Shared/Types';
import ListItem from './ListItem';
import MissionBanner from './MissionBanner';
import SectionWrapper from '../SectionWrapper';

const Services = () => {
  const [SelectService, setSelectService] = useState<SelectedService>(
    SelectedService.Cardiology
  );

  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );
  return (
    <SectionWrapper id="servicios">
      <h2 className="text-4xl font-bold text-center mb-10">Servicios</h2>
      <div className=" flex flex-col justify-between lg:flex-row gap-10 lg:gap-5">
        <div className="grid grid-cols-3 gap-5">
          {ServicesData?.map((service, index) => (
            <Service
              key={index}
              service={service}
              SelectService={SelectService}
              setSelectService={setSelectService}
            />
          ))}
        </div>
        <div className="lg:min-w-[345px]">
          <h3 className="text-xl xs:text-2xl font-bold mb-6">
            {selectedServiceData?.heading}
          </h3>
          <ul className=" lg:ml-5 min-h-[310px] sm:min-h-[225px] md:min-h-[190px] lg:min-h-[375px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
            {selectedServiceData?.texts.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>

        </div>
      </div>
      <MissionBanner />
    </SectionWrapper>
  );
};

export default Services;
