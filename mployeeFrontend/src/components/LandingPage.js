import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ResumeReviewResult from './ResumeReviewResult'
import PdfRender from './PdfRender'

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-grow">
          <ResumeReviewResult />
          <PdfRender />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
