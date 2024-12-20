import React, { useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { BsCurrencyDollar, BsGeoAlt, BsGlobe } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

const FormSection = () => {
  const statementInputRef = useRef(null);
  const contractInputRef = useRef(null);
  const agreementInputRef = useRef(null);
  const additionalDocInputRef = useRef(null);

  const handleUploadClick = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-md max-w-screen-xl mx-auto">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        File your Claim
        <span className="text-gray-500 text-sm ml-2">(Approx 5 Minutes)</span>
      </h2>

      {/* Separator */}
      <hr className="border-t-2 border-gray-300 mb-6" />

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Claim Value */}
        <div className="space-y-4">
          <label className="flex items-center text-sm font-bold text-gray-700">
            <BsCurrencyDollar className="text-blue-400 mr-2 text-lg" />
            Claim Value
          </label>
          <div>
            <label className="block text-gray-500 text-xs mb-1">Contract Value</label>
            <div className="relative">
              <input
                type="number"
                defaultValue="100000"
                className="w-full p-2 bg-gray-100 text-gray-800 rounded border focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs pr-10"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 font-bold text-xs text-gray-700">
                USD
              </span>
            </div>
          </div>
          <div>
            <label className="block text-gray-500 text-xs mb-1">Claim Value</label>
            <div className="relative">
              <input
                type="number"
                defaultValue="150000"
                className="w-full p-2 bg-gray-100 text-gray-800 rounded border focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs pr-10"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 font-bold text-xs text-gray-700">
                USD
              </span>
            </div>
            <p className="text-xs text-orange-500 mt-1 font-medium">150% of Contract Value</p>
          </div>
        </div>

        {/* Place */}
        <div className="space-y-4">
          <label className="flex items-center text-sm font-bold text-gray-700">
            <BsGeoAlt className="text-blue-400 mr-2 text-lg" />
            Place
          </label>
          <input
            type="text"
            placeholder="Select the Place for proceedings"
            className="w-full p-2 bg-gray-100 text-gray-800 rounded border focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs"
          />
          <div className="text-xs text-gray-500">
            Is the place for the proceedings mentioned in the agreement?
            <div className="flex space-x-2 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="place"
                  className="form-radio text-blue-500"
                />
                <span className="ml-1">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="place"
                  className="form-radio text-blue-500"
                />
                <span className="ml-1">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="space-y-4">
          <label className="flex items-center text-sm font-bold text-gray-700">
            <BsGlobe className="text-blue-400 mr-2 text-lg" />
            Language
          </label>
          <input
            type="text"
            placeholder="Select the Language for proceedings"
            className="w-full p-2 bg-gray-100 text-gray-800 rounded border focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs"
          />
          <div className="text-xs text-gray-500">
            Is the language for the proceedings mentioned in the agreement?
            <div className="flex space-x-2 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="language"
                  className="form-radio text-blue-500"
                />
                <span className="ml-1">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="language"
                  className="form-radio text-blue-500"
                />
                <span className="ml-1">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/*Separator*/}
      <hr className="border-t-2 border-gray-300 mb-6" />

      {/* Upload Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Statement Section */}
  <div className="space-y-4">
    <label className="flex items-center text-sm font-bold text-gray-700">
      <HiOutlineDocumentText className="text-blue-400 mr-2 text-lg" />
      Statement
    </label>
    <div
      className="border border-dashed border-blue-400 rounded h-28 bg-gray-100 p-3 flex flex-col justify-center items-center text-center cursor-pointer"
      onClick={() => handleUploadClick(statementInputRef)}
    >
      <FiUpload className="text-blue-500 text-2xl mb-2" />
      <p className="text-xs text-gray-600 mb-1">Write your Statement Here</p>
      <p className="text-xs text-gray-400">or</p>
      <button className="text-blue-500 font-semibold text-xs">Upload a PDF</button>
      <input
        type="file"
        ref={statementInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  </div>

  {/* Agreement Section */}
  <div className="space-y-4">
    <label className="flex items-center text-sm font-bold text-gray-700">
      <HiOutlineDocumentText className="text-blue-400 mr-2 text-lg" />
      Agreement under Disputes
    </label>
    <div className="grid grid-cols-2 gap-3">
      <div
        className="border border-dashed border-blue-400 rounded h-28 bg-gray-100 flex flex-col justify-center items-center cursor-pointer"
        onClick={() => handleUploadClick(contractInputRef)}
      >
        <FiUpload className="text-blue-500 text-2xl mb-1" />
        <button className="text-blue-500 font-semibold text-xs">Upload Contract</button>
        <input
          type="file"
          ref={contractInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div
        className="border border-dashed border-blue-400 rounded h-28 bg-gray-100 flex flex-col justify-center items-center cursor-pointer"
        onClick={() => handleUploadClick(agreementInputRef)}
      >
        <FiUpload className="text-blue-500 text-2xl mb-1" />
        <button className="text-blue-500 font-semibold text-xs">Upload Agreement</button>
        <input
          type="file"
          ref={agreementInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  </div>

  {/* Additional Documentation */}
  <div className="space-y-4">
    <label className="flex items-center text-sm font-bold text-gray-700">
      <HiOutlineDocumentText className="text-blue-400 mr-2 text-lg" />
      Additional Documentation
    </label>
    <div
      className="flex items-center space-x-3 cursor-pointer"
      onClick={() => handleUploadClick(additionalDocInputRef)}
    >
      <div className="border border-dashed border-blue-400 rounded h-28 w-48 bg-gray-100 flex flex-col justify-center items-center cursor-pointer">
        <FiUpload className="text-blue-500 text-2xl mb-1" />
        <button className="text-blue-500 font-semibold text-xs">Upload Document</button>
        <input
          type="file"
          ref={additionalDocInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <button className="w-12 h-12 border border-gray-300 rounded-full bg-gray-100 flex items-center justify-center">
        <span className="text-blue-500 text-lg font-bold">+</span>
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default FormSection;

