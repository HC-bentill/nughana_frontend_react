import React from 'react';
import Messages from '../connections/Messages';
import { Loader } from '../../components/loader/_component';
import { GetNotifications } from '../../api/notifications.service';
import { getItem } from '../../api/storage.service';
import { useQuery } from 'react-query';
import NotificationCard from './notificationCard';

const Notifications = () => {
   const getNotifications = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['getNotifications'],
      refetchOnWindowFocus: false,
      queryFn: () => GetNotifications(getItem('u_id')).then((res) => res?.data),
   });

   return (
      <>
         {getNotifications?.isLoading || getNotifications?.isFetching ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <div className="md:flex justify-between md:ml-4 md:px-0 gap-10">
               <div className="flex-1">
                  <h1 className="text-[15px] md:ml-0 ml-4 font-semibold">Notifications</h1>
                  <div className="mt-5 md:space-y-2">
                     {getNotifications?.data?.length > 0 ? (
                        getNotifications?.data?.map((item, i) => (
                           <NotificationCard
                              key={i}
                              img={item?.avatar_urls?.full}
                              description={item?.description?.rendered}
                              time={item?.date}
                           />
                        ))
                     ) : (
                        <p className="text-center">No notifications</p>
                     )}
                  </div>
               </div>
               <div className="hidden xl:block">
                  <Messages />
               </div>
            </div>
         )}
      </>
   );
};

export default Notifications;
