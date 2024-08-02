import React from 'react';
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const hasQuestions = false; // This should be dynamically set based on your data

  return (
    <div className="px-8 py-6"> {/* Adjusted padding to align with header */}
      <h1 className="text-3xl font-bold mb-2">Edit your application</h1>
      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
      
      <div className="mb-6">
        <Button variant="outline" className="mr-2">General Details</Button>
        <Button variant="outline">Edit Application Questions</Button>
      </div>

      {hasQuestions ? (
        <div>
          {/* Question list will go here */}
          <Button className="mt-4">Add a question</Button>
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Let's add some questions to your applications</h2>
          <p className="text-gray-600 mb-4">Click the button below to get your survey up and running.</p>
          <Button>Add a question</Button>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;