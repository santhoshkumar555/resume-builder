// app/editor/page.js

'use client'; 

import { useState } from 'react';
import { MOCK_USER_DATA } from '../../lib/mock-data'; // Fixed path
import ResumePreview from '../../components/ResumePreview'; // Fixed path
import StyleControls from '../../components/StyleControls'; // Fixed path
import CollapsibleSection from '../../components/CollapsibleSection'; // Fixed path
import PersonalInfoForm from '../../components/PersonalInfoForm'; // Fixed path
import SummaryForm from '../../components/SummaryForm'; // Fixed path
import ExperienceForm from '../../components/ExperienceForm'; // Fixed path
import ProjectsForm from '../../components/ProjectsForm'; // Fixed path
import EducationForm from '../../components/EducationForm'; // Fixed path
import SkillsForm from '../../components/SkillsForm'; // Fixed path
import ImageUpload from '../../components/ImageUpload'; // Fixed path

// This is our "fake" AI-generated summary.
const AI_GENERATED_SUMMARY = `Dynamic and detail-oriented Full-Stack Developer, leveraging expertise in React, Node.js, and MongoDB to build robust applications like 'Streamify'. Proven ability in machine learning with Python, demonstrated through a 'Cyber Hacking Prediction' project. A quick learner and team player, committed to delivering high-quality, scalable software solutions.`;

export default function EditorPage() { // Renamed component
  const [resumeData, setResumeData] = useState(MOCK_USER_DATA);
  const [accentColor, setAccentColor] = useState('#2563eb');
  const [template, setTemplate] = useState('professional');
  const [imageUrl, setImageUrl] = useState(null);

  // --- Handlers ---
  const handlePersonalInfoChange = (newInfo) => {
    setResumeData(prevData => ({ ...prevData, personalInfo: newInfo }));
  };
  const handleSummaryChange = (newSummary) => {
    setResumeData(prevData => ({ ...prevData, summary: newSummary }));
  };
  
  const handleSummaryEnhance = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setResumeData(prevData => ({
          ...prevData,
          summary: AI_GENERATED_SUMMARY,
        }));
        resolve();
      }, 1500); // Simulate a 1.5 second API call
    });
  };

  const handleExperienceChange = (newExperience) => {
    setResumeData(prevData => ({ ...prevData, experience: newExperience }));
  };
  const handleProjectsChange = (newProjects) => {
    setResumeData(prevData => ({ ...prevData, projects: newProjects }));
  };
  const handleEducationChange = (newEducation) => {
    setResumeData(prevData => ({ ...prevData, education: newEducation }));
  };
  const handleSkillsChange = (newSkills) => {
    setResumeData(prevData => ({ ...prevData, skills: newSkills }));
  };
  const handlePrint = () => {
    window.print();
  };
  
  return (
    // Added gray background color here
    <main className="min-h-screen p-6 md:p-12" style={{ background: '#f0f2f5' }}>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Resume Builder</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* --- Column 1: Customization Panel --- */}
        <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-6 h-fit space-y-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Customize</h2>

          <CollapsibleSection title="Style & Template">
            <StyleControls
              accentColor={accentColor}
              template={template}
              onColorChange={setAccentColor}
              onTemplateChange={setTemplate}
            />
          </CollapsibleSection>
          
          <CollapsibleSection title="Personal Information">
            <div className="space-y-4">
              <ImageUpload imageUrl={imageUrl} onImageChange={setImageUrl} />
              <PersonalInfoForm 
                info={resumeData.personalInfo} 
                onChange={handlePersonalInfoChange} 
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Professional Summary">
            <SummaryForm
              summary={resumeData.summary}
              onChange={handleSummaryChange}
              onEnhance={handleSummaryEnhance} 
            />
          </CollapsibleSection>

          <CollapsibleSection title="Experience">
            <ExperienceForm
              experience={resumeData.experience}
              onChange={handleExperienceChange}
            />
          </CollapsibleSection>
          
          <CollapsibleSection title="Projects">
            <ProjectsForm
              projects={resumeData.projects}
              onChange={handleProjectsChange}
            />
          </CollapsibleSection> {/* <--- THIS IS THE FIX */}
          
          <CollapsibleSection title="Education">
            <EducationForm
              education={resumeData.education}
              onChange={handleEducationChange}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Skills">
            <SkillsForm
              skills={resumeData.skills}
              onChange={handleSkillsChange}
            />
          </CollapsibleSection>
        </div>

        {/* --- Column 2: Resume Preview --- */}
        <div className="md:col-span-2 space-y-6">
          <div className="text-right">
            <button
              onClick={handlePrint}
              className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Download as PDF
            </button>
          </div>
           <ResumePreview 
             data={resumeData} 
             accentColor={accentColor}
             template={template}
             imageUrl={imageUrl}
           />
        </div>

      </div>
    </main>
  );
}