import React, { useState } from 'react';
import { FaExclamationCircle, FaShareAlt, FaArrowUp } from 'react-icons/fa'; // Import icons from react-icons
import Navbar from './Navbar';

const AccordionItem = ({ isOpen, onClick, title, icon, content }) => (
  <div 
    className="bg-white border border-gray-300 p-4 mt-2 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-200" 
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="text-red-500 mr-3">{icon}</div>
      <div className="font-semibold text-gray-800">{title}</div>
    </div>
    {isOpen && <div className="mt-2 text-sm text-gray-700">{content}</div>}
  </div>
);

const ResumeReviewResult = () => {
  const [activeTab, setActiveTab] = useState('competencies');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const items = [
    { title: "Bullets", icon: <FaExclamationCircle className="text-red-500" />, content: "We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it’s not readable by ATS." },
    { title: "Bullets", icon: <FaExclamationCircle className="text-red-500" />, content: "We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it’s not readable by ATS." },
    { title: "Dates", icon: <FaExclamationCircle className="text-red-500" />, content: "Dates: We could not detect any Dates. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it’s not readable by ATS." },
    { title: "Bullets", icon: <FaExclamationCircle className="text-red-500" />, content: "We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it’s not readable by ATS." },
    { title: "Bullets", icon: <FaExclamationCircle className="text-red-500" />, content: "We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it’s not readable by ATS." },
    { title: "Bullets", icon: <FaExclamationCircle className="text-red-500" />, content: "We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets, it’s not readable by ATS." },
  ];

  return (
    <div className="flex-grow p-6">
      {/* Percentage Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
            <span className="text-red-600 text-3xl font-bold">40%</span>
          </div>
          <div className="ml-4 text-gray-800">
            <div className="text-red-600 font-semibold">Ohh No !! Needs improvement.</div>
            <div>Your resume just scored 14 out of 100. You need 21 points to reach orange zone at least.</div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="p-2 bg-yellow-100 rounded-full text-yellow-500"><FaShareAlt /></button>
          <button className="p-2 bg-yellow-100 rounded-full text-yellow-500"><FaArrowUp /></button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded flex items-center space-x-2 ${activeTab === 'competencies' ? 'bg-orange-200 text-orange-600' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => setActiveTab('competencies')}
        >
          <FaExclamationCircle className="text-lg" />
          <span>Competencies</span>
        </button>
        <button
          className={`px-4 py-2 rounded flex items-center space-x-2 ${activeTab === 'information' ? 'bg-orange-200 text-orange-600' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => setActiveTab('information')}
        >
          <FaExclamationCircle className="text-lg" />
          <span>Information</span>
        </button>
        <button
          className={`px-4 py-2 rounded flex items-center space-x-2 ${activeTab === 'presentation' ? 'bg-orange-200 text-orange-600' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => setActiveTab('presentation')}
        >
          <FaExclamationCircle className="text-lg" />
          <span>Presentation</span>
        </button>
        <button
          className={`px-4 py-2 rounded flex items-center space-x-2 ${activeTab === 'personalDetails' ? 'bg-orange-200 text-orange-600' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => setActiveTab('personalDetails')}
        >
          <FaExclamationCircle className="text-lg" />
          <span>Personal Details</span>
        </button>
      </div>

      {/* Accordion Items */}
      <div className="mt-6">
        {activeTab === 'competencies' && (
          <div>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                isOpen={openItems[index]}
                onClick={() => toggleItem(index)}
                title={item.title}
                icon={item.icon}
                content={item.content}
              />
            ))}
          </div>
        )}
        {activeTab === 'information' && (
          <div>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                isOpen={openItems[index]}
                onClick={() => toggleItem(index)}
                title={`Information ${index + 1}`}
                icon={item.icon}
                content={`Information Content ${index + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
              />
            ))}
          </div>
        )}
        {activeTab === 'presentation' && (
          <div>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                isOpen={openItems[index]}
                onClick={() => toggleItem(index)}
                title={`Presentation ${index + 1}`}
                icon={item.icon}
                content={`Presentation Content ${index + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
              />
            ))}
          </div>
        )}
        {activeTab === 'personalDetails' && (
          <div>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                isOpen={openItems[index]}
                onClick={() => toggleItem(index)}
                title={`Personal Details ${index + 1}`}
                icon={item.icon}
                content={`Personal Details Content ${index + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeReviewResult;
