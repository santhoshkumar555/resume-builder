// app/page.js

import Link from 'next/link'; // Import the Link component

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* --- Header --- */}
      <header className="w-full shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Resume<span className="text-blue-600">Builder</span>
          </div>
          <div>
            <Link href="/editor" className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* --- Hero Section --- */}
      <main className="flex-grow flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Land your dream job with an
            <span className="block text-blue-600">AI-powered resume.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Create, edit, and download professional resumes with ease. Our AI-powered
            assistant helps you craft the perfect summary and highlight your skills.
          </p>
          <div className="mt-10">
            <Link href="/editor" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Start Building Now
            </Link>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
      </footer>
    </div>
  );
}