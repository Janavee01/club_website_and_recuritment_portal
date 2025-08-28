"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { ApplicationForm } from "@/types"
import { DEPARTMENTS, POSITIONS, PROCESS_STEPS, CLUB_INFO } from "@/lib/constants"

export default function RecruitmentPage() {
  // Form state - ready for backend integration
  const [formData, setFormData] = useState<ApplicationForm>({
    name: "",
    registrationNumber: "",
    email: "",
    firstPreference: "",
    secondPreference: "",
    firstPreferenceReason: "",
    secondPreferenceReason: "",
    previousExperience: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form handlers - ready for backend integration
  const handleInputChange = (field: keyof ApplicationForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Integrate with Supabase backend
      // const { data, error } = await supabase
      //   .from('applications')
      //   .insert([formData])
      
      console.log('Form submitted:', formData)
      
      // Reset form after successful submission
      setFormData({
        name: "",
        registrationNumber: "",
        email: "",
        firstPreference: "",
        secondPreference: "",
        firstPreferenceReason: "",
        secondPreferenceReason: "",
        previousExperience: "",
      })
      
      alert('Application submitted successfully!')
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Error submitting application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToApplication = () => {
    document.getElementById("application")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header-container glass-header">
        <div className="header-content">
          <div className="logo-section">
            <Image src="/images/icsd-logo.png" alt={`${CLUB_INFO.name} Logo`} width={40} height={40} className="rounded-lg" />
            <h1 className="logo-title">{CLUB_INFO.name}</h1>
          </div>
          <div className="header-buttons">
            <Button className="btn-secondary" onClick={() => window.open(CLUB_INFO.website, "_blank")}>
              Visit Us
            </Button>
            <Button className="btn-primary" onClick={scrollToApplication}>
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Application Form */}
      <section id="application" className="application-section">
        <div className="form-container">
          <Card className="form-card form-gradient glass-card">
            <h2 className="form-title">Join {CLUB_INFO.name}</h2>
            <p className="form-subtitle">Apply for your preferred department</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <Input 
                  type="text" 
                  className="form-field form-input" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Registration Number</label>
                <Input 
                  type="text" 
                  className="form-field form-input" 
                  placeholder="Enter your registration number"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <Input 
                  type="email" 
                  className="form-field form-input" 
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">First Preference Department</label>
                <Select value={formData.firstPreference} onValueChange={(value) => handleInputChange('firstPreference', value)}>
                  <SelectTrigger className="form-field form-input">
                    <SelectValue placeholder="Select your first preference" />
                  </SelectTrigger>
                  <SelectContent className="select-content">
                    {DEPARTMENTS.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value} className="select-item">
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="form-group">
                <label className="form-label">Second Preference Department</label>
                <Select value={formData.secondPreference} onValueChange={(value) => handleInputChange('secondPreference', value)}>
                  <SelectTrigger className="form-field form-input">
                    <SelectValue placeholder="Select your second preference" />
                  </SelectTrigger>
                  <SelectContent className="select-content">
                    {DEPARTMENTS.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value} className="select-item">
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="form-group">
                <label className="form-label">Why do you want to join your first preference department?</label>
                <Textarea
                  className="form-field form-input textarea-field"
                  placeholder="Explain your interest in your first preference department..."
                  value={formData.firstPreferenceReason}
                  onChange={(e) => handleInputChange('firstPreferenceReason', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Why do you want to join your second preference department?</label>
                <Textarea
                  className="form-field form-input textarea-field"
                  placeholder="Explain your interest in your second preference department..."
                  value={formData.secondPreferenceReason}
                  onChange={(e) => handleInputChange('secondPreferenceReason', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Previous Experience</label>
                <Textarea
                  className="form-field form-input textarea-large"
                  placeholder="Describe any relevant previous experience, projects, or skills..."
                  value={formData.previousExperience}
                  onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="submit-button btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </Card>
        </div>
      </section>

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
