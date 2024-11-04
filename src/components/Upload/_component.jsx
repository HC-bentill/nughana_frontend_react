import React from "react";
import fileImg from "../../assets/images/file.png";

function UploadFile() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [fileName, setFileName] = React.useState("");
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
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (file) => {
    console.log("file: ", file[0].name);
    setFileName(file[0].name);
  };

  const handleBrowseFiles = (e) => {
    const file = e.target.files;
    handleFiles(file);
  };
  return (
    <>
      <div
        className={`border-2 pt-20 border-dashed rounded-lg pb-8 text-center ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          id="fileInput"
          className="hidden"
          onChange={handleBrowseFiles}
        />
        <label htmlFor="fileInput" className="cursor-pointer">
          <div className="flex flex-col items-center">
            <img src={fileImg} className="w-[70px] h-[45px]" />
            <p className="text-gray-500">
              Drop your ad image here or{" "}
              <span className="text-blue-500">browse</span>
            </p>
            <p className="text-xs text-gray-400">Maximum size: 50MB</p>
          </div>
        </label>
      </div>
      <p className="flex justify-center text-[12px]">{fileName}</p>
    </>
  );
}

export default UploadFile;
