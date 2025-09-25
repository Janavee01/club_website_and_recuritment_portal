# ICSD Student Club - Official Website & Recruitment Portal

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Tech](https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20Tailwind-blue)

This repository contains the complete web presence for the ICSD (Integrated Circuits and System Design) student club. It is structured as a monorepo containing two separate Next.js applications: the main informational website and a functional recruitment portal.

---

### ✨ Live Demos

**Official Website:** [https://site-eight-red-75.vercel.app/](https://site-eight-red-75.vercel.app/)  
**Recruitment Portal:** [https://icsd-recruitment.vercel.app/](https://icsd-recruitment.vercel.app/)

---

## 🚀 Projects Overview

This repository houses two distinct projects:

1.  **🌐 ICSD Official Website (`/icsdwebsite`)**: A visually engaging, single-page informational site that serves as the main digital hub for the club. It details the club's mission, departments, and activities.
2.  **📝 ICSD Recruitment Portal (`/icsd-recruitment`)**: A full-stack application designed to streamline the club's seasonal recruitment drives. It features dynamic forms and a serverless backend for collecting and managing applications.

---

## 🌐 ICSD Official Website

The main website provides a comprehensive overview of the ICSD club, designed to be informative and visually appealing.

| Main Page Screenshot |
| :------------------: |
<img width="1895" height="900" alt="image" src="https://github.com/user-attachments/assets/1850c14b-762f-4fa8-ae06-9834d6e1ae3b" />


### Key Features

* **Interactive Particle Background:** A dynamic, animated background built with the `ogl` WebGL library, providing an engaging user experience.
* **Hide-on-Scroll Navigation:** The navbar smoothly hides when scrolling down and reappears when scrolling up, maximizing viewport space.
* **Smooth Single-Page Experience:** Implements seamless smooth-scrolling navigation between different sections of the single-page layout.
* **Fully Responsive Design:** The layout is optimized for a seamless experience across all devices, from mobile phones to desktops.

### Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js (v15) |
| **Language** | TypeScript, JavaScript |
| **Core Library** | React (v19) |
| **Styling** | Tailwind CSS |
| **Animation** | OGL (WebGL) |

---

## 📝 ICSD Recruitment Portal

A purpose-built application to handle the club's recruitment process efficiently.

### Key Features

* **Dynamic Department Forms:** Dynamically generates recruitment forms based on the department selected by the applicant, with unique questions for each role.
* **Robust Form Handling:** Employs `React Hook Form` for efficient form state management and `Zod` for client-side schema validation to ensure data integrity.
* **Serverless Data Submission:** Applicant data is sent directly to a Google Sheet via a Google Apps Script webhook, demonstrating a clever and cost-effective serverless backend.
* **Modern & Accessible UI:** Built with **shadcn/ui**, ensuring a clean, modern, and fully accessible user interface.

### Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js (v15) |
| **Language** | TypeScript |
| **UI Components** | shadcn/ui, Radix UI |
| **Styling** | Tailwind CSS |
| **Form Management**| React Hook Form, Zod |
| **Backend** | Google Apps Script |

---

## 📂 Local Development

To run these projects locally, first clone the repository, then follow the instructions for the specific project you wish to run.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate to the project you want to run:**

    * For the **main website**:
        ```bash
        cd your-repo-name/icsdwebsite
        ```
    * For the **recruitment portal**:
        ```bash
        cd your-repo-name/icsd-recruitment
        ```

3.  **Install dependencies and run:**
    *(This project uses pnpm, but npm or yarn will also work)*
    ```bash
    # Install dependencies
    pnpm install

    # Run the development server
    pnpm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
