import { Department, ProcessStep } from '@/types'

export type Position = {
  id: string
  title: string
  description: string
  questions: string[] // always required, at least an empty array
}


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
    id: "design-and-creative",
    title: "Design & Creative",
    description: "Create posters, banners, and visual content.",
    questions: [
      "What inspires your creativity when designing?",
      "Which tools do you use most often for design and why?",
      "Share a project that reflects your style or skills best.",
      "How do you handle constructive feedback on your work?",
      "If we asked you to design a poster for an upcoming event, how would you approach it?"
    ]
  },
  {
    id: "operations",
    title: "Operations",
    description: "Coordinate people and ensure smooth workflows.",
    questions: [
      "How do you prioritize tasks when managing multiple responsibilities?",
      "Describe an event or activity you helped organize in the past.",
      "How would you handle unexpected challenges during a club event?",
      "What strategies do you use to keep a team motivated?",
      "Why do you want to be part of the operations team in our club?"
    ]
  },
  {
    id: "research",
    title: "Research",
    description: "Explore new technologies and produce insights.",
    questions: [
      "Which topics or areas interest you the most for research?",
      "How do you ensure the information you find is accurate and reliable?",
      "Describe a time when your research helped solve a problem.",
      "If you discovered a new trend that could benefit the club, how would you present it?",
      "What makes you excited about joining the research team?"
    ]
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Engage our audience and grow our online presence.",
    questions: [
      "Which platforms are you most skilled at and why?",
      "What type of content do you think engages students the most?",
      "Share an example of a creative post idea you would make for our club.",
      "How would you increase reach if engagement started dropping?",
      "Why are you interested in handling social media for the club?"
    ]
  },
  {
    id: "technical",
    title: "Technical",
    description: "Work on software, hardware, or problem solving.",
    questions: [
      "Which programming languages or tools are you confident in?",
      "Describe a technical project you’ve worked on and what you learned.",
      "How do you usually solve a difficult bug or problem?",
      "If you could build one new tool for the club, what would it be?",
      "Why do you want to be part of the technical team?"
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Create and edit videos for events and campaigns.",
    questions: [
      "Which editing tools are you comfortable with?",
      "Share a video project you’ve worked on that you’re proud of.",
      "How do you make sure your videos tell a clear story?",
      "What would you do if you had very little time to edit an important video?",
      "Why do you want to contribute as a video editor for our club?"
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build and maintain our websites.",
    questions: [
      "Which web frameworks or technologies have you used before?",
      "Share a website or web project you built or contributed to.",
      "How do you make sure a website is user-friendly and responsive?",
      "If asked to redesign our club website, what would you improve?",
      "What excites you most about working on web projects?"
    ]
  }
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
