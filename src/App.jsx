import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/_page';
import Login from './pages/login/_page';
import Signup from './pages/signup/_page';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Connections from './pages/connections/Connections';
import Communities from './pages/communities/Communities';
import ViewCommunities from './pages/communities/ViewCommunities';
import MarketPlace from './pages/marketplace/MarketPlace';
import MarketCategory from './pages/marketplace/MarketCategory';
import MarketAdDetails from './pages/marketplace/MarketAdDetails';
import 'flatpickr/dist/flatpickr.css';
import Event from './pages/event/Event';
import EventDetails from './pages/event/EventDetails';
import ResourceCenter from './pages/resource_center/ResourceCenter';
import BusinessDirectory from './pages/business/BusinessDirectory';
import BusinessDetails from './pages/business/BusinessDetails';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
import PhotoGallery from './pages/photo_gallery/PhotoGallery';
import { useSelector } from 'react-redux';
import CommunityDetails from './pages/communities/CommunityDetails';
import Posts from './pages/posts/Posts';
import Notifications from './pages/notifications/Notifications';

function App() {
   const user = useSelector((state) => state.user.user);

   return (
      <>
         <Routes>
            <Route path="*" element={<p>page not found 404</p>} />
            {user ? (
               <>
                  <Route element={<DashboardLayout />}>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/connections" element={<Connections />} />
                     <Route path="/communities" element={<Communities />} />
                     <Route path="/view-communities" element={<ViewCommunities />} />
                     <Route path="/marketplace" element={<MarketPlace />} />
                     <Route path="/market-ad-details/:id" element={<MarketAdDetails />} />
                     <Route path="/market-category/:id" element={<MarketCategory />} />
                     <Route path="/events" element={<Event />} />
                     <Route path="/event-details/:id" element={<EventDetails />} />
                     <Route path="/community-details/:id" element={<CommunityDetails />} />
                     <Route path="/resource-center" element={<ResourceCenter />} />
                     <Route path="/business-directory" element={<BusinessDirectory />} />
                     <Route path="/business-details/:id" element={<BusinessDetails />} />
                     <Route path="/my-profile/:id" element={<Profile />} />
                     <Route path="/others-profile/:id" element={<Profile />} />
                     <Route path="/edit-profile" element={<EditProfile />} />
                     <Route path="/photo-gallery" element={<PhotoGallery />} />
                     <Route path="/posts" element={<Posts />} />
                     <Route path="/notifications" element={<Notifications />} />
                  </Route>
               </>
            ) : (
               <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/" element={<Homepage />}></Route>
               </>
            )}
         </Routes>
      </>
   );
}

export default App;
