import React from 'react';
import fileImg from '../../assets/images/file.png';
import { UploadImage } from '../../api/upload.service';
import toast from 'react-hot-toast';
import trash from '../../assets/icons/trash.svg';
import view from '../../assets/icons/view.svg';
import HtmlRenderer from '../html_renderer/HtmlRendrer';
import FsLightbox from 'fslightbox-react';
import Uploading from '../uploading/_component';

function UploadFile({ onUploadSuccess }) {
   const fileInputRef = React.useRef(null);
   const [isDragging, setIsDragging] = React.useState(false);
   const [isUploadDone, setIsUploadDone] = React.useState(false);
   const [isUploading, setIsUploading] = React.useState(false);
   const [previewImage, setPreviewImage] = React.useState('');
   const [toggler, setToggler] = React.useState(false);
   const [fileName, setFileName] = React.useState('');
   const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
   };

   const handleDragLeave = () => {
      setIsDragging(false);
   };

   const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      setIsUploading(true);
      const file = e.dataTransfer.files[0];
      const formData = new FormData();
      formData.append('file', file);
      let preview = URL.createObjectURL(file);
      setPreviewImage(preview);
      handleFiles(file);

      UploadImage(formData)
         .then((res) => {
            setIsUploading(false);
            setIsUploadDone(true);
            toast.success(<p className="text-[12px]">{<HtmlRenderer htmlContent={'Upload successful.'} />}</p>);

            if (onUploadSuccess) {
               onUploadSuccess(res?.data.id);
            }
         })
         .catch((err) => {
            setIsUploading(false);
            toast.error(<p className="text-[12px]">{<HtmlRenderer htmlContent={err.response?.data?.message} /> ?? 'An error occured. Please try again !'}</p>);
         });
   };

   const handleFiles = (file) => {
      setFileName(file && file.name);
   };

   const handleBrowseFiles = (e) => {
      setIsUploading(true);
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      let preview = URL.createObjectURL(file);
      setPreviewImage(preview);
      handleFiles(file);

      UploadImage(formData)
         .then((res) => {
            setIsUploadDone(true);
            setIsUploading(false);
            toast.success(<p className="text-[12px]">{<HtmlRenderer htmlContent={'Upload successful.'} />}</p>);
            if (onUploadSuccess) {
               onUploadSuccess(res?.data.id);
            }
         })
         .catch((err) => {
            setIsUploading(false);
            toast.error(<p className="text-[12px]">{<HtmlRenderer htmlContent={err.response?.data?.message} /> ?? 'An error occured. Please try again !'}</p>);
         });
   };

   const removeImage = () => {
      setPreviewImage(null);
      setFileName('');
      setIsUploadDone(false);
      if (fileInputRef.current) {
         fileInputRef.current.value = '';
      }
      if (onUploadSuccess) {
         onUploadSuccess(null);
      }
   };

   return (
      <>
         <FsLightbox toggler={toggler} sources={[previewImage]} />

         <div className="max-sm:w-[300px]">
            <div className={`border-2 pt-20 border-dashed rounded-lg pb-8 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
               <input type="file" multiple id="fileInput" className="hidden" ref={fileInputRef} onChange={handleBrowseFiles} />
               <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                     <img src={fileImg} className="w-[70px] h-[45px]" />
                     <p className="text-gray-500">
                        Drop your ad image here or <span className="text-blue-500">browse</span>
                     </p>
                     <p className="text-xs text-gray-400">Maximum size: 50MB</p>
                  </div>
               </label>
            </div>
            {isUploading ? (
               <>
                  <Uploading />
               </>
            ) : null}
            {isUploadDone && (
               <div className="flex items-center justify-center">
                  <p className="flex text-blue-500 mr-4 justify-center text-[12px]">{fileName}</p>
                  <img title="Remove Image" onClick={removeImage} src={trash} className="object-contain w-4 h-4 mr-2 cursor-pointer filter" alt="trash" />
                  <img src={view} title="Preview Image" onClick={() => setToggler(!toggler)} className="object-contain w-4 h-4 cursor-pointer" alt="trash" />
               </div>
            )}
         </div>
      </>
   );
}

export default UploadFile;
