import React from 'react';
import FeaturedEventCard from '../../components/featured_evernts_card/_component';
import { useNavigate } from 'react-router-dom';
import { GetEvents } from '../../api/event.service';
import { useQuery } from 'react-query';
import { Loader } from '../../components/loader/_component';

function AllEvents() {
   const navigate = useNavigate();

   const events = useQuery({
      retry: (count, err) => count < 3,
      refetchOnWindowFocus: false,
      queryKey: ['events'],
      queryFn: () => GetEvents().then((res) => res),
   });

   let allEvents = events && events.data && events.data.data;

   return (
      <div className="grid grid-cols-3 gap-3 mt-2 cursor-pointer max-sm:grid-cols-1 ">
         {events.isLoading ? (
            <div className="flex justify-center items-center z-[99]">
               <Loader />
            </div>
         ) : (
            <>
               {allEvents?.map((ev, i) => (
                  <div className="flex items-center justify-center" key={i} onClick={() => navigate(`/event-details/${ev.id}`)}>
                     <FeaturedEventCard otherClassNames={'w-[312px]'} img={ev.acf.event_image} footerImgs={ev.footerImgs} footerIconsWith={'w-[24px] mr-2'} date={ev.acf.event_date} header={ev.acf.event_name} location={ev.acf.event_location} desc={ev.desc} eventfooterDesc={'700+ members'} />
                  </div>
               ))}
            </>
         )}
      </div>
   );
}

export default AllEvents;
