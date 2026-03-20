# AI Agent Guidelines for Pranav Portfolio

This document contains specific instructions for AI agents (like Claude Code) working on this project.

## Project Context

This is a **personal portfolio website** for Pranav Kishori Rlapale. It's a production-ready React application with a polished UI, animations, and interactive elements. The codebase is well-structured and should be treated with care.

## Core Principles

### 1. Preserve Design Intent
- This project has a specific design from Figma
- Maintain the existing visual style and animations
- Don't make unsolicited design changes
- Keep the gradient color scheme (cyan to purple)

### 2. Maintain Consistency
- All components follow a consistent pattern (isDark prop)
- Keep the same animation style across components
- Use the existing color palette
- Follow the established component structure

### 3. Avoid Over-Engineering
- Don't add unnecessary abstractions
- Keep components simple and focused
- Don't create utilities for one-time operations
- Avoid premature optimization

## When Making Changes

### Read First
Always read the relevant files before making modifications:
```bash
# Example: Before modifying Projects component
Read: src/components/ProjectsOrbit.tsx
```

### Component Modifications
When asked to modify a component:
1. Read the component file first
2. Understand its current functionality
3. Make minimal, focused changes
4. Preserve theme support (isDark prop)
5. Test in your mind for both light/dark modes

### Adding Features
When adding new features:
- Add to the appropriate component (don't create new ones unless necessary)
- Follow existing patterns (animations, transitions, styling)
- Ensure mobile responsiveness
- Support both theme modes

### Data Updates
For content updates (projects, skills, certifications, etc.):
- Find the data in the relevant component
- Update only the data structure
- Don't refactor surrounding code
- Preserve the existing format

## Styling Guidelines

### Always Use
- Tailwind utility classes
- Existing color palette
- Consistent spacing (p-4, p-8, p-12 pattern)
- Responsive breakpoints
- Smooth transitions (transition-all, duration-300/500)

### Avoid
- Inline styles
- New color schemes
- Inconsistent spacing
- Removing animations
- Breaking responsive design

## Component Patterns

### Standard Component Structure
```tsx
interface Props {
  isDark: boolean;
}

export const ComponentName = ({ isDark }: Props) => {
  return (
    <section className={`py-20 transition-colors ${isDark ? 'bg-[#0A1628]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        {/* Content with motion animations */}
      </div>
    </section>
  );
};
```

### Theme Support Pattern
```tsx
// Background
className={`${isDark ? 'bg-[#0A1628]' : 'bg-gray-50'}`}

// Text
className={`${isDark ? 'text-white' : 'text-gray-900'}`}

// Cards
className={`${isDark ? 'bg-[#0F2645]' : 'bg-white'}`}
```

## File Organization

### Don't Create Unnecessary Files
- Keep related logic in the same component
- Use the existing ui/ components (Radix)
- Don't extract constants unless they're truly reused
- Don't create separate types files for simple interfaces

### When to Create New Files
Only create new files when:
- Adding a major new section to the portfolio
- Building a complex, reusable component
- Adding substantial new functionality

## Common Requests

### "Add a new project"
- Read: src/components/ProjectsOrbit.tsx
- Add to the projects array
- Follow existing project object structure

### "Update skills"
- Read: src/components/Skills.tsx
- Modify the skills data
- Keep the same categories and format

### "Change contact form"
- Read: src/components/Contact.tsx
- Modify form fields carefully (EmailJS integration)
- Test form validation

### "Add new section"
- Create new component in src/components/
- Follow existing component patterns
- Add to App.tsx import and render
- Maintain section order

### "Fix styling issue"
- Read the component with the issue
- Check both light and dark mode classes
- Ensure responsive breakpoints work
- Test hover/active states

## What NOT to Do

### Don't Refactor Without Permission
- Don't reorganize the project structure
- Don't extract utilities or helpers
- Don't add comments or docstrings to unchanged code
- Don't add error boundaries unless requested
- Don't create configuration files

### Don't Add Unnecessary Features
- No feature flags
- No extra validation beyond user input
- No logging frameworks
- No analytics unless requested
- No extra animations or effects

### Don't Change Dependencies
- Don't update package versions without asking
- Don't add new dependencies for simple tasks
- Don't remove existing dependencies
- Don't change build configuration

## Testing Approach

Since there are no automated tests, mentally verify:
- Component renders in both themes
- Responsive behavior on mobile/tablet/desktop
- Animations work smoothly
- No TypeScript errors
- All props are correctly typed

## Email Integration

The contact form uses EmailJS:
- Don't modify the EmailJS integration without understanding it
- Preserve the service ID, template ID, and public key patterns
- Keep form validation intact
- Maintain loading and success states

## Performance Considerations

- Keep bundle size small
- Don't add heavy dependencies
- Lazy load only when necessary (not by default)
- Optimize images (but don't replace existing ones)
- Maintain smooth animations (avoid jank)

## Git Workflow

When making changes:
- Make focused, atomic commits
- Use clear commit messages
- Don't commit temporary files
- Don't commit node_modules or dist
- Follow the existing commit style

## Questions to Ask Before Acting

1. "Do I need to read existing code first?" → Usually YES
2. "Is this change necessary?" → Be conservative
3. "Will this break theme support?" → Test both modes
4. "Am I adding complexity?" → Keep it simple
5. "Does this match existing patterns?" → Stay consistent

## Remember

- This is a **production portfolio** - treat it with care
- The owner wants a **polished, professional** site
- **Simplicity** is better than complexity
- **Consistency** is more important than cleverness
- When in doubt, **ask the user** before making significant changes

## Quick Reference

### Colors
- Primary Gradient: `from-[#00D4FF] to-[#8B5CF6]`
- Dark BG: `#0A1628`
- Dark Card: `#0F2645`
- Light BG: `gray-50`
- Light Card: `white`

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Common Commands
```bash
npm run dev    # Start dev server
npm run build  # Build for production
```

### Key Files
- App.tsx - Main app component (theme state)
- components/ - All UI components
- package.json - Dependencies and scripts
- index.html - HTML entry point
