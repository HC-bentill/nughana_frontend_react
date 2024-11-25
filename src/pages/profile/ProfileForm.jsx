import React from 'react';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import { countryCode } from '../../assets/core/data';
import { useForm } from 'react-hook-form';
import { UpdateUserProfile } from '../../api/profile.service';
import link from '../../assets/icons/Link.png';
import profilePic from '../../assets/images/profile.png';
import profileBanner from '../../assets/images/profile-banner.png';
import Button from '../../components/button/_component';

function ProfileForm() {
   const fp = React.useRef(null);
   const [selectCode, setSelectedCode] = React.useState(null);
   const [loading, setLoading] = React.useState(false);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
   } = useForm();

   const handleCountryCodeChange = (option) => {
      setSelectedCode(option);
   };

   const onSubmit = (data) => {
      console.log('data: ', data);
      // UpdateUserProfile()
      //    .then((res) => {
      //       if (res.status === 201) {
      //          setLoading(false);
      //          toast.success(<p className="text-[12px]">{<HtmlRenderer htmlContent={'Event created successfully'} />}</p>);
      //          reset();
      //       } else {
      //          setLoading(false);
      //          toast.error(<p className="text-[12px]">An error occurred</p>);
      //       }
      //    })
      //    .catch((err) => {
      //       console.log(err);
      //    });
   };

   const triggerFormSubmit = (e) => {
      e.preventDefault();
      let form = document.getElementById('edit-profile-form');
      if (form) {
         handleSubmit(onSubmit)();
      }
   };

   return (
      <>
         <div className="flex items-center justify-between ml-2">
            <div className="flex items-center">
               <img onClick={() => navigate('/profile')} src={link} alt="" className="w-[40px] cursor-pointer h-[40px] mr-5" />
               <h3 className="text-[14px] font-semibold text-[#1A314D]">Edit Profile</h3>
            </div>
            <Button onClick={(e) => triggerFormSubmit(e)} classNames="bg-black mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs" name={'Save Changes'} />
         </div>
         <div className="flex justify-center text-center ml-5 py-8 w-[973px] h-[190px]">
            <div className="relative flex items-center">
               <img src={profileBanner} className="border-[7px] mt-4 w-[955px] h-[181px] border-white rounded-[15px] " alt="" />
               <div className="absolute left-0 flex items-center justify-center px-3 py-1 rounded-full top-3">
                  <img className="w-[114px] h-[114px] mx-6 border-[5px] border-white rounded-full" src={profilePic} alt="bullet" />
                  <div className="flex">
                     <Button
                        //   onClick={() => setChangeProfileImageModal(true)}
                        classNames={'font-semibold border-[1px] border-white mr-5 !rounded-[10px] flex items-center w-[164px] h-[38px] border-[1px] border-[#17172580] !px-2 text-[10px] bg-[#17172580]'}
                        name={'Change Profile Image'}
                     />
                     <Button
                        //   onClick={() => setChangeBannerImageModal(true)}
                        classNames={'font-semibold border-[1px] border-white !rounded-[10px] flex items-center w-[164px] h-[38px] border-[1px] border-[#17172580] !px-[6px] text-[10px] bg-[#17172580]'}
                        name={'Change Banner Image'}
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="m-8 text-[14px] bg-white rounded-[15px]">
            <form id="edit-profile-form" onSubmit={handleSubmit(onSubmit)}>
               <h3 className="font-medium text-[#171725] py-6 px-8">Personal details</h3>
               <hr className="border-[1px] !px-0 border-[#E6E8EE]" />
               <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">First Name</label>
                     <input {...register('first_name', { required: true })} type="text" placeholder="First Name" name="first_name" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.first_name && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>
                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Last Name</label>
                     <input {...register('last_name', { required: true })} type="text" placeholder="Last Name" name="last_name" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.last_name && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>
                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Other Names</label>
                     <input {...register('other_names', { required: true })} type="text" placeholder="Other Names" name="other_names" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.other_names && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>
                  <div className="flex flex-col">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Select Category</label>
                     <Select className="!w-[408px] !h-[49px] !rounded-full " defaultValue={selectCode} onChange={handleCountryCodeChange} options={countryCode} placeholder="Select category" />
                  </div>

                  <div className="">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Date of Birth</label>
                     <Flatpickr className="bg-gray-50 mr-2 cursor-pointer border outline-0 border-gray-300 text-gray-900 text-sm rounded-full block w-[400px] py-[14px] px-[16px]" placeholder="Select date" ref={fp} name="start_date" />
                     <button
                        type="button"
                        className="text-xs"
                        onClick={() => {
                           if (!fp?.current?.flatpickr) return;
                           fp.current.flatpickr.clear();
                        }}
                     >
                        Clear
                     </button>
                  </div>
                  <div className="flex flex-col">
                     <label className="font-semibold text-[12px] text-[#1F2937]">Nationality</label>
                     <Select className="!w-[409px] !h-[49px] !rounded-full" defaultValue={selectCode} onChange={handleCountryCodeChange} options={countryCode} placeholder="Select country" />
                  </div>
               </div>

               {/* profile details */}
               <h3 className="font-medium text-[#171725] py-6 px-8">Profile Details</h3>
               <hr className="border-[1px] border-[#E6E8EE]" />
               <div className="flex flex-col px-8 py-6 mt-8">
                  <label className="font-semibold text-[12px] text-[#1F2937]">Write your description here</label>
                  <input {...register('description', { required: true })} type="text" name="description" placeholder="Group Description" className="w-full text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400" />
                  {errors.description && <span className="text-red-500 text-[11px]">This field is required</span>}
               </div>

               <h3 className="font-medium text-[#171725] py-6 px-8">Contact Details</h3>
               <hr className="border-[1px] border-[#E6E8EE]" />
               <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Mobile Number</label>
                     <input {...register('mobile_number', { required: true })} type="number" placeholder="0000" name="mobile_number" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.mobile_number && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>
                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Email</label>
                     <input {...register('email', { required: true })} type="email" placeholder="Email" name="email" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.email && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>

                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">City</label>
                     <input {...register('city', { required: true })} type="text" placeholder="Accra, Ghana" name="city" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.city && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>

                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Website</label>
                     <input {...register('website', { required: true })} type="text" placeholder="Website link" name="website" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.website && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>

                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Snapchat</label>
                     <input {...register('snapchat', { required: true })} type="text" placeholder="Snapcat link" name="snapchat" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.snapchat && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>

                  <div className="flex flex-col mr-4">
                     <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">Instagram</label>
                     <input {...register('instagram', { required: true })} type="text" placeholder="Instagram link" name="instagram" className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                     {errors.instagram && <span className="text-red-500 text-[11px]">This field is required</span>}
                  </div>
               </div>
            </form>
         </div>
      </>
   );
}

export default ProfileForm;
