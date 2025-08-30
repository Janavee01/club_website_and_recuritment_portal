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
import { useRouter } from "next/navigation" 
import Link from "next/link";
import Header from "@/components/Header";

export default function RecruitmentPage() {
  const router = useRouter()
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
      <Header />

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
                {/* Apply Now button */}
                <Link href={`/recruitment/${position.id}`}>
                  <Button className="btn-primary mt-4">
                    Apply Now
                  </Button>
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
