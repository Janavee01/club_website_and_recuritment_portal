# ICSD Club Recruitment Portal

A modern, responsive recruitment portal for ICSD Club built with Next.js 15, TypeScript, and pure CSS.

## Features

- 🎨 **Modern Design**: Glass morphism effects with gradient backgrounds
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance
- 🔒 **Type Safe**: Full TypeScript support
- 🎯 **Ready for Backend**: Structured for easy Supabase integration

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Pure CSS (no Tailwind)
- **UI Components**: Custom components with Radix UI primitives
- **State Management**: React hooks
- **Backend Ready**: Supabase integration ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd icsd-recruitment
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
icsd-recruitment/
├── app/
│   ├── globals.css          # Main stylesheet
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main recruitment page
├── components/
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── constants.ts         # Application constants
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
├── public/
│   └── images/
│       └── icsd-logo.png    # Club logo
└── README.md
```

## Supabase Integration Guide

The application is structured to easily integrate with Supabase. Here's how to set it up:

### 1. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### 2. Create Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Create Supabase Client

Create `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
```

### 4. Database Schema

Create these tables in your Supabase database:

#### Applications Table
```sql
CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  registration_number TEXT NOT NULL,
  email TEXT NOT NULL,
  first_preference TEXT NOT NULL,
  second_preference TEXT NOT NULL,
  first_preference_reason TEXT NOT NULL,
  second_preference_reason TEXT NOT NULL,
  previous_experience TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Departments Table
```sql
CREATE TABLE departments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  value TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Positions Table
```sql
CREATE TABLE positions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  department_id UUID REFERENCES departments(id),
  requirements TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. Update Form Submission

Replace the TODO comment in `app/page.tsx` with actual Supabase integration:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const { data, error } = await supabase
      .from('applications')
      .insert([{
        name: formData.name,
        registration_number: formData.registrationNumber,
        email: formData.email,
        first_preference: formData.firstPreference,
        second_preference: formData.secondPreference,
        first_preference_reason: formData.firstPreferenceReason,
        second_preference_reason: formData.secondPreferenceReason,
        previous_experience: formData.previousExperience,
      }])
    
    if (error) throw error
    
    // Reset form and show success message
    setFormData({...})
    alert('Application submitted successfully!')
  } catch (error) {
    console.error('Error submitting application:', error)
    alert('Error submitting application. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

### 6. Fetch Data from Supabase

You can also fetch departments, positions, and other data from Supabase:

```typescript
// Fetch departments
const { data: departments } = await supabase
  .from('departments')
  .select('*')
  .eq('is_active', true)

// Fetch positions
const { data: positions } = await supabase
  .from('positions')
  .select('*')
  .eq('is_active', true)
```

## Customization

### Colors and Styling

All colors and styling are defined in `app/globals.css`. The main color variables are:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #171717;
  --secondary: #f5f5f5;
  /* ... more variables */
}
```

### Club Information

Update club information in `lib/constants.ts`:

```typescript
export const CLUB_INFO = {
  name: 'Your Club Name',
  website: 'https://your-club-website.com',
  email: 'contact@your-club.com',
  description: 'Your club description',
}
```

### Departments and Positions

Modify departments and positions in `lib/constants.ts` to match your club's structure.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email [contact@icsd-club.com](mailto:contact@icsd-club.com) or create an issue in the repository.
