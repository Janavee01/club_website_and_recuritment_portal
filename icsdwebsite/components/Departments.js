'use client';
import { useState } from "react";

export default function Departments() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const departments = [
    {
      title: "Technical",
      head: "Tinu Matthew",
      description:
        "Leading technical workshops, project development, and hands-on learning experiences in circuit design and embedded systems.",
      image: "/Technical.png",
    },
    {
      title: "Design and Content",
      head: "Noel Jose",
      description:
        "Creating engaging visual content, managing club publications, and designing promotional materials for events.",
      image: "/Design.png",
    },
    {
      title: "Operations",
      head: "Joseph Santhosh",
      description:
        "Managing club logistics, event coordination, resource allocation, and ensuring smooth functioning of all activities.",
      image: "/operations.png",
    },
    {
      title: "Social Media and Video Editing",
      head: "Noel Jose",
      description:
        "Managing online presence, creating engaging video content, and promoting club activities across digital platforms.",
      image: "/socialmedia.png",
    },
    {
      title: "Research",
      head: "Drahvidan Chittarasan",
      description:
        "Conducting cutting-edge research in IC design, exploring emerging technologies, and publishing technical papers.",
      image: "/research.png",
    },
    {
      title: "Web Development",
      head: "V Janavee",
      description:
        "Developing and maintaining club websites, creating digital tools, and managing online platforms for the community.",
      image: "/Webdev.png",
    },
  ];

  return (
    <section id="departments" className="departments">
      <div className="container">
        <h2 className="section-title">OUR DEPARTMENTS</h2>

        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="department-card relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card-background"
                style={{ backgroundImage: `url(${dept.image})` }}
              ></div>

              {/* Dark overlay on hover */}
              <div
                className={`absolute inset-0 transition-opacity duration-200 pointer-events-none ${
                  hoveredIndex === index
                    ? "bg-black/70 opacity-100"
                    : "bg-black/0 opacity-0"
                }`}
                aria-hidden="true"
              />

              <div className="card-content flex items-center justify-center h-full w-full">
                {hoveredIndex === index ? (
                  <div className="w-full flex flex-col items-center">
                    <div className="text-base text-white mb-2">
                      Department Head: {dept.head}
                    </div>
                    <p className="card-description text-center text-base text-white px-2 transition-opacity duration-200 opacity-100">
                      {dept.description}
                    </p>
                  </div>
                ) : (
                  <h3 className="card-title text-2xl font-semibold text-white transition-opacity duration-200 opacity-100">
                    {dept.title}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* JOIN US button under departments */}
        <div className="mt-10 text-center">
          <a
            id="actionBtn"
            className="link-btn"
            href="https://icsd-recruitment-lt1qtf6es-janavee01s-projects.vercel.app/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN US!
          </a>
        </div>
      </div>
    </section>
  );
}

