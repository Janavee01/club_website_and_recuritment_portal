"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type ApplicationForm = {
  name: string
  registrationNumber: string
  email: string
  answers: Record<string, string>
}

interface RecruitmentFormProps {
  department?: string
  questions: string[]
}

export default function RecruitmentForm({ department, questions }: RecruitmentFormProps) {
  const [formData, setFormData] = useState<ApplicationForm>({
    name: "",
    registrationNumber: "",
    email: "",
    answers: {},
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ApplicationForm, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAnswerChange = (question: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [question]: value,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbx__Ua5s9VOjYnPcyTf4gL9P9Ov4c3fKP8ILS1IdcrvadyBvG9Xr1_uL2LN1HRYi0z4Eg/exec",
      {
        method: "POST",
        mode: "no-cors", // required for Google Sheets
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, department }),
      }
    )

    // since no-cors gives opaque response, you can't read res.json()
    alert("Application submitted successfully!")

    setFormData({
      name: "",
      registrationNumber: "",
      email: "",
      answers: {},
    })
  } catch (error) {
    alert("Error submitting application. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <section className="application-section">
      <div className="form-container">
        <div className="form-card glass-card form-gradient">
          <h2 className="form-title">Apply for {department}</h2>
          <p className="form-subtitle">
            We're excited to see your application!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  handleInputChange("name" as const, e.target.value)
                }
                required
                className="form-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="registrationNumber" className="form-label">
                Registration Number
              </label>
              <Input
                id="registrationNumber"
                type="text"
                placeholder="e.g., 21BCE0001"
                value={formData.registrationNumber}
                onChange={(e) =>
                  handleInputChange(
                    "registrationNumber" as const,
                    e.target.value
                  )
                }
                required
                className="form-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@vitstudent.ac.in"
                value={formData.email}
                onChange={(e) =>
                  handleInputChange("email" as const, e.target.value)
                }
                required
                className="form-field"
              />
            </div>

            {questions.map((question, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={`question-${index}`} className="form-label">
                  {question}
                </label>
                <Textarea
                  id={`question-${index}`}
                  placeholder="Your answer"
                  value={formData.answers[question] || ""}
                  onChange={(e) => handleAnswerChange(question, e.target.value)}
                  required
                  className="form-field textarea-field"
                />
              </div>
            ))}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="submit-button btn-primary"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}