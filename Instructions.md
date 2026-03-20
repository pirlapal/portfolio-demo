# Pranav Portfolio - Instructions

## Project Overview

This is a modern, interactive portfolio website built with React, TypeScript, and Vite. The portfolio showcases professional experience, projects, skills, education, certifications, and publications with smooth animations and a polished UI.

**Original Design**: [Figma Design](https://www.figma.com/design/pZeEuyuiO1WbHkH8BebXwz/Pranav-Portfolio)

## Technology Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI primitives
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Notifications**: Sonner
- **Email Service**: EmailJS

## Getting Started

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Main application components
│   ├── Hero.tsx        # Landing section with animated text
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience timeline
│   ├── ProjectsOrbit.tsx # Projects with orbital animation
│   ├── Publications.tsx # Research publications
│   ├── Certifications.tsx # Professional certifications
│   ├── Skills.tsx      # Technical skills showcase
│   ├── Education.tsx   # Academic background
│   ├── Contact.tsx     # Contact form with EmailJS
│   ├── Footer.tsx      # Footer section
│   ├── ProjectModal.tsx # Project details modal
│   ├── LoadingScreen.tsx # Initial loading animation
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   ├── BackToTop.tsx   # Back to top button
│   ├── CursorParticles.tsx # Interactive cursor effects
│   └── ui/             # Reusable UI components (Radix)
├── assets/             # Images and static files
├── styles/             # Global styles
└── App.tsx             # Main application component
```

## Key Features

### Theme System
- Dark mode by default (can toggle to light mode)
- Theme state managed in App.tsx
- Theme passed as prop to all components
- Smooth color transitions with duration-500

### Interactive Elements
- Cursor particle effects on click
- Scroll progress indicator
- Back to top button
- Loading screen animation
- Project modal with detailed information

### Component Guidelines

#### All Components Should:
- Accept `isDark` prop for theme support
- Use consistent color schemes:
  - Dark mode: bg-[#0A1628] background, text-white/gray
  - Light mode: bg-gray-50 background, text-gray-900
- Include smooth transitions (transition-all, duration-300/500)
- Be responsive (mobile-first approach)
- Use Tailwind utility classes

#### Color Palette
- Primary Gradient: `from-[#00D4FF] to-[#8B5CF6]`
- Background Dark: `#0A1628`
- Background Light: `gray-50`
- Accent Colors: `#00D4FF` (cyan), `#8B5CF6` (purple)

#### Animation Patterns
- Use `motion` components for page transitions
- Animate on scroll with viewport detection
- Smooth hover effects with scale transforms
- Fade in/out transitions for modals

## Development Guidelines

### Adding New Components
1. Create component file in `src/components/`
2. Accept `isDark` prop
3. Export named export (not default)
4. Import and add to App.tsx in appropriate order
5. Apply consistent styling patterns

### Modifying Existing Components
1. Read the component file first
2. Maintain existing animation patterns
3. Keep theme prop consistency
4. Test in both light and dark modes
5. Ensure responsive behavior

### Styling Best Practices
- Use Tailwind utility classes
- Avoid inline styles unless necessary
- Use responsive breakpoints: sm, md, lg, xl, 2xl
- Maintain consistent spacing (padding/margin)
- Use gradient backgrounds for emphasis

### Form Handling
- Contact form uses EmailJS
- React Hook Form for form validation
- Sonner for toast notifications
- Handle loading and error states

### EmailJS Setup

The contact form uses EmailJS to send emails without a backend server. Follow these steps:

**1. Create EmailJS Account**
- Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
- Free tier allows 200 emails/month

**2. Create Email Service**
- Go to "Email Services" in dashboard
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Connect your email account
- Copy the Service ID

**3. Create Email Template**
- Go to "Email Templates"
- Click "Create New Template"
- Use these template variables in your template:
  ```
  From: {{user_name}} <{{user_email}}>
  Subject: {{subject}}

  {{message}}
  ```
- Save and copy the Template ID

**4. Get Public Key**
- Go to "Account" → "General"
- Find your Public Key under "API Keys"

**5. Configure Environment Variables**
- Copy `.env.example` to `.env`
- Add your credentials:
  ```env
  VITE_EMAILJS_SERVICE_ID=service_xxxxx
  VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
  VITE_EMAILJS_PUBLIC_KEY=your_public_key
  ```
- Restart dev server to load new variables

**6. Test the Form**
- Fill out the contact form on your site
- Check your email for the message
- Check EmailJS dashboard for send status

**Security Notes:**
- `.env` is in `.gitignore` (never commit credentials)
- Public key is meant to be exposed in client code
- EmailJS has rate limiting and domain restrictions

## Code Quality Standards

### TypeScript
- Use proper types (avoid `any` when possible)
- Define interfaces for component props
- Type check all functions

### Component Structure
```tsx
interface ComponentProps {
  isDark: boolean;
  // other props
}

export const ComponentName = ({ isDark }: ComponentProps) => {
  // hooks
  // state
  // effects

  return (
    <section className={`transition-colors ${isDark ? 'bg-dark' : 'bg-light'}`}>
      {/* content */}
    </section>
  );
};
```

### Performance
- Use React.memo for expensive components
- Lazy load heavy components when appropriate
- Optimize images (use WebP when possible)
- Minimize bundle size

## Deployment

The project is configured for Netlify deployment (see netlify.toml).

**Build command**: `npm run build`
**Publish directory**: `dist`

## Common Tasks

### Adding a New Project
Edit the projects data in ProjectsOrbit.tsx component.

### Adding a Certification
Edit the certifications array in Certifications.tsx component.

### Updating Contact Information
Modify the Contact.tsx component and update EmailJS configuration.

### Changing Theme Colors
Update the color classes in:
- App.tsx (main background)
- Individual components (section backgrounds)
- Tailwind config if needed

### Adding New Skills
Edit the skills data in Skills.tsx component.

## Troubleshooting

### Development Server Issues
- Clear node_modules and reinstall
- Check Node version (recommend 20.x)
- Verify all dependencies are installed

### Build Failures
- Run TypeScript check: `npx tsc --noEmit`
- Check for missing imports
- Verify all assets are in correct locations

### Styling Issues
- Clear Tailwind cache
- Check for conflicting utility classes
- Verify dark mode classes are applied correctly

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
