import { Department, Position, ProcessStep } from '@/types'

// Department constants
export const DEPARTMENTS: Department[] = [
  { id: 'webdev', value: 'webdev', label: 'Web Development', isActive: true },
  { id: 'technical', value: 'technical', label: 'Technical', isActive: true },
  { id: 'design', value: 'design', label: 'Design and Content', isActive: true },
  { id: 'operations', value: 'operations', label: 'Operations', isActive: true },
  { id: 'social', value: 'social', label: 'Social Media and Video Editing', isActive: true },
  { id: 'research', value: 'research', label: 'Research', isActive: true },
]

// Position constants
export const POSITIONS: Position[] = [
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Build and maintain web applications, work with modern frameworks and create user-friendly interfaces.',
    departmentId: 'webdev',
    isActive: true,
  },
  {
    id: 'technical',
    title: 'Technical',
    description: 'Handle technical infrastructure, system administration, and provide technical support for club activities.',
    departmentId: 'technical',
    isActive: true,
  },
  {
    id: 'design',
    title: 'Design and Content',
    description: 'Create visual designs, graphics, and written content for various club initiatives and communications.',
    departmentId: 'design',
    isActive: true,
  },
  {
    id: 'operations',
    title: 'Operations',
    description: 'Manage day-to-day operations, coordinate events, and ensure smooth functioning of club activities.',
    departmentId: 'operations',
    isActive: true,
  },
  {
    id: 'social',
    title: 'Social Media and Video Editing',
    description: 'Manage social media presence, create engaging content, and produce video content for the club.',
    departmentId: 'social',
    isActive: true,
  },
  {
    id: 'research',
    title: 'Research',
    description: 'Conduct research on emerging technologies, trends, and contribute to knowledge sharing within the club.',
    departmentId: 'research',
    isActive: true,
  },
]

// Process steps constants
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: '1',
    step: '01',
    title: 'Application',
    description: 'Submit your application through our online form with your preferences and experience.',
    order: 1,
  },
  {
    id: '2',
    step: '02',
    title: 'Review',
    description: 'Our team will review your application and assess your fit for the selected departments.',
    order: 2,
  },
  {
    id: '3',
    step: '03',
    title: 'Interview',
    description: 'Selected candidates will be invited for an interview to discuss their interests and goals.',
    order: 3,
  },
]

// Club information
export const CLUB_INFO = {
  name: 'ICSD Club',
  website: 'https://icsd-club.com',
  email: 'contact@icsd-club.com',
  description: 'Join ICSD Club and be part of our innovative team.',
}

// Form validation rules
export const VALIDATION_RULES = {
  name: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
  },
  registrationNumber: {
    required: 'Registration number is required',
    pattern: { value: /^[A-Z0-9]+$/, message: 'Invalid registration number format' },
  },
  email: {
    required: 'Email is required',
    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' },
  },
  firstPreference: {
    required: 'First preference is required',
  },
  firstPreferenceReason: {
    required: 'Please explain your interest in the first preference department',
    minLength: { value: 50, message: 'Please provide at least 50 characters' },
  },
  secondPreferenceReason: {
    required: 'Please explain your interest in the second preference department',
    minLength: { value: 50, message: 'Please provide at least 50 characters' },
  },
  previousExperience: {
    required: 'Previous experience is required',
    minLength: { value: 100, message: 'Please provide at least 100 characters' },
  },
}
