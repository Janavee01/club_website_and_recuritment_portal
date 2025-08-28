// Application form types
export interface ApplicationForm {
  id?: string
  name: string
  registrationNumber: string
  email: string
  firstPreference: string
  secondPreference: string
  firstPreferenceReason: string
  secondPreferenceReason: string
  previousExperience: string
  status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
  createdAt?: string
  updatedAt?: string
}

// Department types
export interface Department {
  id: string
  value: string
  label: string
  description?: string
  isActive?: boolean
}

// Position types
export interface Position {
  id: string
  title: string
  description: string
  departmentId?: string
  requirements?: string[]
  isActive?: boolean
}

// Process step types
export interface ProcessStep {
  id: string
  step: string
  title: string
  description: string
  order?: number
}

// API response types
export interface ApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}

// Form validation types
export interface FormErrors {
  [key: string]: string
}

// Supabase database types (for future integration)
export interface Database {
  public: {
    Tables: {
      applications: {
        Row: ApplicationForm
        Insert: Omit<ApplicationForm, 'id' | 'createdAt' | 'updatedAt'>
        Update: Partial<Omit<ApplicationForm, 'id' | 'createdAt' | 'updatedAt'>>
      }
      departments: {
        Row: Department
        Insert: Omit<Department, 'id'>
        Update: Partial<Omit<Department, 'id'>>
      }
      positions: {
        Row: Position
        Insert: Omit<Position, 'id'>
        Update: Partial<Omit<Position, 'id'>>
      }
    }
  }
}
