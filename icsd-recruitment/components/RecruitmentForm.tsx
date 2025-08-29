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
    <main className="px-4 py-16">
      <Card className="card-themed max-w-3xl mx-auto p-8 md:p-10">
        <h1 className="h1-hero">Join ICSD Club</h1>
        <p className="subtle mt-3">Apply for your preferred department</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <label className="label">Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name" as const, e.target.value)}
              required
              className="input-themed"
            />
          </div>

          <div className="space-y-2">
            <label className="label">Registration Number</label>
            <Input
              type="text"
              placeholder="Enter your registration number"
              value={formData.registrationNumber}
              onChange={(e) => handleInputChange("registrationNumber" as const, e.target.value)}
              required
              className="input-themed"
            />
          </div>

          <div className="space-y-2">
            <label className="label">Email</label>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email" as const, e.target.value)}
              required
              className="input-themed"
            />
          </div>

          {questions.map((question, index) => (
            <div key={index} className="space-y-2">
              <label className="label">{question}</label>
              <Textarea
                placeholder="Type your answer here..."
                value={formData.answers[question] || ""}
                onChange={(e) => handleAnswerChange(question, e.target.value)}
                required
                className="input-themed min-h-28"
              />
            </div>
          ))}

          <Button type="submit" disabled={isSubmitting} className="btn-primary w-full">
            {isSubmitting ? "Submitting..." : `Submit Application${department ? ` — ${department}` : ""}`}
          </Button>
        </form>
      </Card>
    </main>
  )
}