<!-- db1f0cac-698c-4abf-89a7-d14e9298acd4 1d2faa52-ab65-4a8a-b4d3-0738de15ccfb -->
# Portfolio Content Update with Modern React/Next.js Learning

## Overview

Update all portfolio sections with Sarmad Allawi's actual work and experience by editing existing component files directly. This approach teaches TypeScript patterns, component composition, and Tailwind responsive design while working with real content.

## Key Learning Objectives

1. **TypeScript Type Safety**: Add interfaces/types directly in component files
2. **Component Composition**: Update components with actual data while maintaining reusability
3. **Responsive Design**: Apply Tailwind responsive patterns consistently
4. **Modern Next.js**: Use proper server/client component patterns
5. **Data Management**: Define data structures inline, preparing for future refactoring

## Implementation Steps

### 1. Update Hero Section

Modify `src/app/hero.tsx`:

- Update personal introduction with name (Sarmad Allawi)
- Add location (Baghdad, Iraq)
- Include professional title (App Developer & Designer)
- Replace email form with a call-to-action button linking to contact section
- Apply responsive Tailwind classes
- Learn: TypeScript string literals, component composition

### 2. Update Skills Section

Modify `src/app/skills.tsx`:

- Update SKILLS array with actual technologies (React, Next.js, Tailwind, etc.)
- Add real descriptions of your expertise
- Define TypeScript interface for Skill type inline
- Maintain responsive grid layout
- Learn: Array types, interface definitions, component props

### 3. Update Projects Section

Modify `src/app/projects.tsx`:

- Update PROJECTS array with real projects
- Add actual project descriptions
- Include technologies used for each project
- Add optional links to live projects or GitHub (enhance ProjectCard if needed)
- Apply responsive grid (1 col mobile, 2 tablet, 4 desktop)
- Learn: Optional properties in TypeScript, conditional rendering

### 4. Update Resume Section

Modify `src/app/resume.tsx`:

- Update RESUME_ITEMS array with actual education and certifications
- Add professional experience description
- Enhance with TypeScript interface for resume items
- Consider adding a downloadable resume link
- Learn: Type definitions, data structures

### 5. Update Contact Form

Modify `src/app/contact-form.tsx`:

- Update email to jmtrx@proton.me
- Add actual social media links (GitHub, LinkedIn, etc.)
- Update contact information section
- Improve form with basic validation
- Learn: Form handling, event handlers, useState

### 6. Update Testimonials

Modify `src/app/testimonial.tsx`:

- Update testimonial content with real client feedback (if available)
- Or create placeholder structure for future testimonials
- Define TypeScript interface for testimonial data
- Maintain interactive testimonial switcher
- Learn: State management, array mapping, conditional rendering

### 7. Update Clients Sections

Modify `src/app/clients.tsx` and `src/app/popular-clients.tsx`:

- Update CLIENTS array with actual client logos/brands (if applicable)
- Or remove/consolidate sections if not applicable
- Learn: Array mapping, conditional rendering, optional sections

### 8. Enhance Components

Update components to demonstrate best practices:

- Add TypeScript interfaces where needed
- Use proper props destructuring
- Apply conditional rendering patterns
- Ensure responsive Tailwind utilities (sm:, md:, lg:, xl:)
- Maintain component reusability
- Proper Image optimization with Next.js Image component

## Files to Modify

- `src/app/hero.tsx` - Personal introduction and CTA
- `src/app/skills.tsx` - Actual skills and technologies
- `src/app/projects.tsx` - Real projects with descriptions
- `src/app/resume.tsx` - Education and experience
- `src/app/contact-form.tsx` - Contact information and form
- `src/app/testimonial.tsx` - Client testimonials
- `src/app/clients.tsx` - Client logos/brands
- `src/app/popular-clients.tsx` - Popular clients section
- `src/components/project-card.tsx` - Enhanced with links and better typing

## Learning Outcomes

After this implementation, you'll understand:

- How to structure TypeScript types for application data
- Data-driven component architecture
- Separation of concerns (data vs presentation)
- Component composition patterns
- Tailwind responsive design utilities
- Type-safe props and data handling
- Next.js Image optimization
- Form handling patterns

## Additional Notes

- All content will be easily updatable via the data file
- Components remain presentation-focused
- TypeScript ensures type safety throughout
- Responsive design patterns are consistently applied
- Structure supports easy addition of i18n later

### To-dos

- [ ] Create TypeScript interfaces in src/types/portfolio.ts for all content types (HeroContent, Skill, Project, ResumeItem, Testimonial, ContactInfo, Client)
- [ ] Create centralized data file src/data/portfolio.ts with Sarmad Allawi actual content (personal info, skills, projects, resume, contact)
- [ ] Update Hero section with personal introduction, location (Baghdad, Iraq), and professional title using typed data
- [ ] Update Skills section with actual technologies (React, Next.js, Tailwind) and real descriptions using typed Skill[] data
- [ ] Update Projects section with real projects, descriptions, technologies, and optional links using typed Project[] data
- [ ] Update Resume section with actual education, certifications, and professional experience using typed resume data
- [ ] Update Contact form with email (jmtrx@proton.me), actual social links, and improved form handling
- [ ] Update Testimonials section with real client feedback or placeholder structure using typed testimonial data
- [ ] Update Clients sections with actual client logos or consolidate/remove if not applicable
- [ ] Refactor components to demonstrate TypeScript props, conditional rendering, and responsive Tailwind patterns