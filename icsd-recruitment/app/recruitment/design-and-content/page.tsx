"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { POSITIONS, PROCESS_STEPS, CLUB_INFO } from "@/lib/constants"

export default function RecruitmentPage() {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header-container glass-header">
        <div className="header-content">
          <div className="logo-section">
            <Image 
              src="/images/icsd-logo.png" 
              alt={`${CLUB_INFO.name} Logo`} 
              width={40} 
              height={40} 
              className="rounded-lg" 
            />
            <h1 className="logo-title">{CLUB_INFO.name}</h1>
          </div>
          <div className="header-buttons">
            <Button 
              className="btn-secondary" 
              onClick={() => window.open(CLUB_INFO.website, "_blank")}
            >
              Visit Us
            </Button>
          </div>
        </div>
      </header>

      {/* Open Positions Section */}
      <section className="positions-section">
        <div className="section-container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">Join our team in these exciting departments</p>

          <div className="positions-grid">
            {POSITIONS.map((position) => (
              <Card key={position.id} className="position-item position-card glass-card">
                <h3 className="position-title">{position.title}</h3>
                <p className="position-description">{position.description}</p>

                {/* Apply Now button links dynamically */}
                <Link href={`/recruitment/${position.id}`}>
                  <Button className="btn-primary mt-4">Apply Now</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="section-title">Recruitment Process</h2>
          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="process-item">
                <div className="process-number process-step">
                  <span>{step.step}</span>
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
