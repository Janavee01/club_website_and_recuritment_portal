"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Activities() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const activities = [
    {
      title: "Project Exhibition",
      image: "/images/carousel.jpg",
    },
    {
      title: "Technical Workshop",
      image: "/images/carousel2.jpg",
    },
    {
      title: "Projects Showcase",
      image: "/images/carousel3r.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [activities.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
  }

  return (
    <section className="activities">
      <div className="container">
        <h2 className="section-title">OUR ACTIVITIES</h2>
        <div className="carousel-container">
          <div className="carousel">
            <button className="carousel-btn prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="carousel-content">
              {activities.map((activity, index) => (
                <div key={index} className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
                  <div className="image-container">
                    <Image 
                      src={activity.image || "/placeholder.svg"} 
                      alt={activity.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "contain" }}
                      className="carousel-image-tag" 
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="carousel-text-content">
            <h3>{activities[currentSlide].title}</h3>
          </div>
          <div className="carousel-indicators">
            {activities.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}