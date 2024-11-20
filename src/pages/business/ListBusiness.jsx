import React from 'react';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import { countryCode } from '../../assets/core/data';
import Button from '../../components/button/_component';
import UploadFile from '../../components/Upload/_component';

function ListBusiness({ cancelModal }) {
   const fp = React.useRef(null);
   const [selectCode, setSelectedCode] = React.useState(null);

   const handleCountryCodeChange = (option) => {
      setSelectedCode(option);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <>
         <form className="w-[668px]" onSubmit={handleSubmit}>
            <div className="p-8 bg-white rounded-t-[16px]">
               <h3 className="font-bold flex mt-2 mb-8 justify-center text-[18px] text-[#1F2937]">List a Business</h3>

               <UploadFile />
               <div className="flex items-center justify-between mt-9">
                  <div className="flex flex-col">
                     <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">Business Name</label>
                     <input type="text" placeholder="Ad Name" className="w-[268px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                  </div>
                  <div className="flex flex-col">
                     <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">Select Category</label>
                     <Select className="w-[268px]" defaultValue={selectCode} onChange={handleCountryCodeChange} options={countryCode} placeholder="Select category" />
                  </div>
               </div>
               <div className="flex justify-between mt-8">
                  <div>
                     <label className="font-semibold text-[14px] text-[#1F2937]">Address</label>
                     <input type="text" placeholder="Business address" className="w-full text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400" />
                  </div>
                  <div className="flex flex-col">
                     <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">Email</label>
                     <input type="text" placeholder="Email address" className="w-[268px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                  </div>
               </div>
               <div className="flex flex-col mt-8">
                  <label className="font-semibold text-[14px] text-[#1F2937]">Google map link to your business</label>
                  <input type="text" placeholder="Google map link" className="w-full text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400" />
               </div>
               <div className="flex justify-between mt-8">
                  <div className="">
                     <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">Whatsapp number</label>
                     <input type="number" placeholder="Amount in GHS" className="w-[268px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                  </div>

                  <div className="flex flex-col mr-9">
                     <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">Phone number</label>
                     <input type="number" placeholder="Amount in GHS" className="w-[268px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400" />
                  </div>
               </div>
            </div>
            <div className="flex justify-end w-full bg-[#E5E7EB] rounded-b-[16px] p-4">
               <div onClick={cancelModal} className="cursor-pointer border-[2px] h-[38px] py-[10px] px-[12px] bg-white mr-3 w-[75px] flex justify-center text-center items-center font-semibold text-[12px] border-[#E5E7EB] rounded-[40px]">
                  Cancel
               </div>
               <Button classNames="text-white text-[12px] h-[38px] py-[6px] px-[36px] bg-black w-[114px]" name={'Create'} />
            </div>
         </form>
      </>
   );
}

export default ListBusiness;
