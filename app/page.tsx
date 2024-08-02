"use client";

// File: app/page.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import GeneralDetails from '@/components/GeneralDetails';
import EditApplicationQuestions from '@/components/EditApplicationQuestions';

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('questions');

  return (
    <div className="px-8 py-6">
      <h1 className="text-3xl font-bold mb-2">Edit your application</h1>
      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
      
      <div className="mb-6">
        <Button 
          variant={activeSection === 'general' ? 'default' : 'outline'} 
          className="mr-2"
          onClick={() => setActiveSection('general')}
        >
          General Details
        </Button>
        <Button 
          variant={activeSection === 'questions' ? 'default' : 'outline'}
          onClick={() => setActiveSection('questions')}
        >
          Edit Application Questions
        </Button>
      </div>

      {activeSection === 'general' ? <GeneralDetails /> : <EditApplicationQuestions />}
    </div>
  );
};

export default DashboardPage;