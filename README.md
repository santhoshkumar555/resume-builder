# Next.js Resume Builder Prototype

[cite_start]This is a high-fidelity frontend prototype for an AI-powered resume builder, developed as a submission for a technical trial task. The application is built with **Next.js** and **Tailwind CSS** and focuses on creating a dynamic, real-time resume customization experience.

**Live Demo Link:** `resume-builder-seven-beta.vercel.app
`

---

## Task Fulfillment

[cite_start]This project successfully fulfills the **Frontend Development (Option 1)** requirement by providing a modern UI for resume preview and customization[cite: 11]. [cite_start]It also incorporates elements from **UI/UX (Option 3)** and **AI/Automation (Option 4)** [cite: 13, 14] to demonstrate a complete and integration-ready module.

## Core Features

* **Landing Page:** A clean, professional landing page with a clear call-to-action that routes to the editor.
* **Real-Time Resume Editor:** A two-column layout (`/editor`) where all form inputs update the resume preview instantly using React state.
* **Dynamic Data Management:** Users can add, edit, and remove items from list-based sections (Experience, Projects, Education, and Skills).
* **Live Style Customization:**
    * **Multi-Template System:** Switch between three distinct resume layouts (Professional, Classic, and Sidebar).
    * **Accent Color Picker:** A global color picker that updates the theme (links, tags, borders, backgrounds) in real-time.
* [cite_start]**Simulated AI Feature:** A frontend simulation of the "AI Enhance" feature for the professional summary, complete with a loading state[cite: 14]. This demonstrates the UI/UX and logic for an API-driven feature.
* **Live Image Upload:** A local image uploader that generates an instant preview on the resume, with an option to remove the image.
* **"Download as PDF" Function:** A "Download" button that triggers the browser's print dialog, using a custom print-only stylesheet (`print.css`) to generate a perfect, A4-sized PDF.
* **Clean UI/UX:** All customization forms are nested in collapsible sections for a clean and manageable user interface.

## Technology Stack

* **Framework:** Next.js (App Router)
* **Library:** React 18
* **Styling:** Tailwind CSS
* **State Management:** React Hooks (`useState`)
* **Data:** Mock data (`lib/mock-data.js`) is used to simulate a decoupled backend, making the frontend ready for API integration.

## How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_URL]
    cd resume-builder-trial-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) to view the landing page.
    Open [http://localhost:3000/editor](http://localhost:3000/editor) to view the resume builder.
