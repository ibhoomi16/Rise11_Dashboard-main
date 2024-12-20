import React from "react";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import FormSection from "./components/FormSection";
import { FiBell, FiUser } from "react-icons/fi";

function App() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}

      <div className="hidden md:block w-64 bg-gray-100 shadow-lg h-full">
        <Sidebar />
      </div>

      {/* Main Content */}

      <div className="flex-1 flex flex-col bg-white relative">


        {/* Top-Right Corner Icons */}

        <div className="absolute top-0 right-0 flex space-x-4">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <FiBell className="text-blue-500 text-xl" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="w-10 h-10 flex items-center justify-center">
            <FiUser className="text-blue-500 text-xl" />
          </div>
        </div>

        {/* ProgressBar */}
        <div className="p-4 mt-2">
          <ProgressBar />
        </div>

        {/* Form Section */}
        <div className="flex-1 p-4 overflow-y-auto">
          <FormSection />
        </div>
      </div>
    </div>
  );
}

export default App;
