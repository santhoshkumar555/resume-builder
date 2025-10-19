import React from 'react';

// --- Main Router Component ---
// This component now decides which template to render
export default function ResumePreview({ data, accentColor, template, imageUrl }) {
  
  if (template === 'sidebar') {
    return <SidebarTemplate data={data} accentColor={accentColor} imageUrl={imageUrl} />;
  }
  
  if (template === 'classic') {
    return <ProfessionalTemplate data={data} accentColor={accentColor} imageUrl={imageUrl} templateType="classic" />;
  }
  
  // Default is 'professional'
  return <ProfessionalTemplate data={data} accentColor={accentColor} imageUrl={imageUrl} templateType="professional" />;
}


// -------------------------------------------------------------------
// --- Template 1 & 2: Professional (default) & Classic ---
// -------------------------------------------------------------------
function ProfessionalTemplate({ data, accentColor, imageUrl, templateType }) {
  const { personalInfo, summary, experience, projects, skills, education } = data;

  const layout = {
    classic: (
      <>
        <Education education={education} accentColor={accentColor} />
        <Skills skills={skills} accentColor={accentColor} />
      </>
    ),
    professional: (
      <>
        <Skills skills={skills} accentColor={accentColor} />
        <Education education={education} accentColor={accentColor} />
      </>
    )
  };

  return (
    <div id="resume-preview" className="bg-white shadow-lg rounded-lg overflow-hidden aspect-[210/297] max-w-[800px] mx-auto p-12">
      <div className="flex flex-col h-full">
        <DefaultPersonalInfo info={personalInfo} accentColor={accentColor} imageUrl={imageUrl} />
        <div className="mt-8">
          <DefaultSummary summary={summary} accentColor={accentColor} />
          <DefaultExperience experience={experience} accentColor={accentColor} />
          <DefaultProjects projects={projects} accentColor={accentColor} />
          {templateType === 'classic' ? layout.classic : layout.professional}
        </div>
      </div>
    </div>
  );
}

// --- Sub-components for Professional/Classic Template ---

function DefaultPersonalInfo({ info, accentColor, imageUrl }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-left">
        <h1 className="text-4xl font-bold text-gray-800">{info.name}</h1>
        <h2 className="text-2xl font-light" style={{ color: accentColor }}>{info.title}</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-600">
          <span>{info.email}</span><span>|</span><span>{info.phone}</span><span>|</span><span>{info.location}</span>
        </div>
        <div className="flex flex-wrap gap-6 mt-2 text-sm" style={{ color: accentColor }}>
          {info.links.map(link => <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>)}
        </div>
      </div>
      {imageUrl && <img src={imageUrl} alt="User" className="w-32 h-32 rounded-full object-cover ml-10 flex-shrink-0" />}
    </div>
  );
}

function DefaultSection({ title, accentColor, children }) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-700 border-b-2 pb-1 mb-3" style={{ borderColor: accentColor }}>
        {title.toUpperCase()}
      </h3>
      {children}
    </div>
  );
}

function DefaultSummary({ summary, accentColor }) {
  return (
    <DefaultSection title="Professional Summary" accentColor={accentColor}>
      <p className="text-sm text-gray-700 whitespace-pre-line">{summary}</p>
    </DefaultSection>
  );
}

function DefaultExperience({ experience, accentColor }) {
  return (
    <DefaultSection title="Professional Experience" accentColor={accentColor}>
      {experience.map(job => (
        <div key={job.id} className="mt-3">
          <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
          <div className="flex justify-between text-sm text-gray-600"><span>{job.company}</span><span>{job.startDate} - {job.endDate}</span></div>
          <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{job.description}</p>
        </div>
      ))}
    </DefaultSection>
  );
}

function DefaultProjects({ projects, accentColor }) {
  return (
    <DefaultSection title="Projects" accentColor={accentColor}>
      {projects.map(project => (
        <div key={project.id} className="mt-3">
          <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
          <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{project.description}</p>
        </div>
      ))}
    </DefaultSection>
  );
}

function Skills({ skills, accentColor }) {
  return (
    <DefaultSection title="Skills" accentColor={accentColor}>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => <span key={skill.id} className="text-white text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: accentColor }}>{skill.name}</span>)}
      </div>
    </DefaultSection>
  );
}

function Education({ education, accentColor }) {
  return (
    <DefaultSection title="Education" accentColor={accentColor}>
      {education.map(edu => (
        <div key={edu.id} className="mt-3">
          <h4 className="text-lg font-semibold text-gray-800">{edu.school}</h4>
          <div className="flex justify-between text-sm text-gray-600"><span>{edu.degree}</span><span>{edu.startDate} - {edu.endDate}</span></div>
        </div>
      ))}
    </DefaultSection>
  );
}


// -------------------------------------------------------------------
// --- Template 3: Sidebar (New Two-Column Layout) ---
// -------------------------------------------------------------------
function SidebarTemplate({ data, accentColor, imageUrl }) {
  const { personalInfo, summary, experience, projects, skills, education } = data;
  
  return (
    <div id="resume-preview" className="bg-white shadow-lg rounded-lg overflow-hidden aspect-[210/297] max-w-[800px] mx-auto">
      <div className="flex h-full">
        
        {/* --- Sidebar (Left Column) --- */}
        <aside className="w-1/3 p-8 text-white" style={{ backgroundColor: accentColor }}>
          <SidebarPersonalInfo info={personalInfo} imageUrl={imageUrl} />
          <div className="mt-8 space-y-6">
            <SidebarSection title="Contact">
              <p className="truncate">{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
              {personalInfo.links.map(link => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="block truncate underline">{link.name}</a>
              ))}
            </SidebarSection>
            <SidebarSkills skills={skills} />
            <SidebarEducation education={education} />
          </div>
        </aside>

        {/* --- Main Content (Right Column) --- */}
        <main className="w-2/3 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold text-gray-800">{personalInfo.name}</h1>
          <h2 className="text-2xl font-light mb-6" style={{ color: accentColor }}>{personalInfo.title}</h2>
          
          <MainSection title="Professional Summary">
            <p className="text-sm text-gray-700 whitespace-pre-line">{summary}</p>
          </MainSection>
          
          <MainSection title="Professional Experience">
            {experience.map(job => (
              <div key={job.id} className="mt-3">
                <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
                <div className="flex justify-between text-sm text-gray-600"><span>{job.company}</span><span>{job.startDate} - {job.endDate}</span></div>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{job.description}</p>
              </div>
            ))}
          </MainSection>

          <MainSection title="Projects">
            {projects.map(project => (
              <div key={project.id} className="mt-3">
                <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{project.description}</p>
              </div>
            ))}
          </MainSection>
        </main>
      </div>
    </div>
  );
}

// --- Sub-components for Sidebar Template ---

function SidebarPersonalInfo({ info, imageUrl }) {
  return (
    <div className="text-center">
      {imageUrl && (
        <img src={imageUrl} alt="User" className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white" />
      )}
    </div>
  );
}

function SidebarSection({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-semibold uppercase border-b-2 border-white pb-1 mb-3">
        {title}
      </h3>
      <div className="text-sm space-y-1">
        {children}
      </div>
    </div>
  );
}

function SidebarSkills({ skills }) {
  return (
    <SidebarSection title="Skills">
      {skills.map(skill => (
        <span key={skill.id} className="block text-sm">
          {skill.name}
        </span>
      ))}
    </SidebarSection>
  );
}

function SidebarEducation({ education }) {
  return (
    <SidebarSection title="Education">
      {education.map(edu => (
        <div key={edu.id} className="mt-2">
          <h4 className="text-sm font-semibold">{edu.school}</h4>
          <p className="text-xs italic">{edu.degree}</p>
          <p className="text-xs">{edu.startDate} - {edu.endDate}</p>
        </div>
      ))}
    </SidebarSection>
  );
}

function MainSection({ title, children }) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-gray-700 uppercase pb-1 mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}