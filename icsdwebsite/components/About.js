import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">ABOUT ICSD CLUB</h2>
        <div className="about-content">
          <div className="about-image">
            <Image 
              src="/images/about.jpg" 
              alt="ICSD Club Activities" 
              width={500} 
              height={400} 
            />
          </div>
          <div className="about-text">
            <p>
              The Integrated Circuit and System Design (ICSD) Club at VIT Chennai is a vibrant community of passionate
              students dedicated to exploring the fascinating world of electronics, circuit design, and system
              architecture.
            </p>
            <p>
              Our club serves as a platform for students to enhance their technical skills, collaborate on innovative
              projects, and stay updated with the latest trends in semiconductor technology and embedded systems.
            </p>
            <p>
              Through workshops, seminars, competitions, and hands-on projects, we aim to bridge the gap between
              theoretical knowledge and practical application, preparing our members for successful careers in the
              electronics industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
