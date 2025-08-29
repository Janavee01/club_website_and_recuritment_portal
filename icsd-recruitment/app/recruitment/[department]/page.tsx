"use client"

import { useParams } from "next/navigation"
import RecruitmentForm from "@/components/RecruitmentForm"
import { POSITIONS } from "@/lib/constants"

export default function DepartmentPage() {
  const params = useParams()
  const department = params?.department as string

  // Find the department in POSITIONS
  const position = POSITIONS.find((pos) => pos.id === department)

  if (!position) {
    return <div className="p-8 text-red-500">⚠️ Invalid department selected.</div>
  }

  return (
    <RecruitmentForm
      department={position.title}
      questions={position.questions || []}
    />
  )
}
