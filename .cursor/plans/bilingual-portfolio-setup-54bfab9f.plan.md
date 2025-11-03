<!-- 54bfab9f-3da0-42da-9d69-4b00ff6b6fb9 e8e49d91-5509-43b1-a816-18863e6206b3 -->
# Bilingual Portfolio with Dark/Light Mode Implementation Plan

## Overview

Transform the Next.js + Tailwind portfolio template into a fully bilingual (English/Arabic) portfolio site with dark/light mode support, customized for Sarmad Allawi as an app developer and designer based in Baghdad, Iraq.

## Key Technical Decisions

1. **Internationalization Strategy**: Use Next.js App Router with client-side language switching (no i18n library initially, but structured for easy migration)
2. **Theme Management**: Implement dark mode using Tailwind's dark mode class strategy with localStorage persistence
3. **RTL Support**: Add RTL support for Arabic using Tailwind's RTL utilities and conditional dir attribute
4. **Font Strategy**: Use Google Fonts supporting both Latin and Arabic characters (consider fonts like Inter/Cairo combination)

## Implementation Steps

### 1. Setup Internationalization Infrastructure

- Create `src/lib/i18n.ts` - Translation context and hooks
- Create `src/locales/en.json` and `src/locales/ar.json` - Translation files
- Add language context provider in `src/components/language-provider.tsx`
- Update `src/app/layout.tsx` to include language provider and handle RTL/dir attribute

### 2. Setup Theme Management

- Create `src/lib/theme.ts` - Theme context and utilities
- Create `src/components/theme-provider.tsx` - Theme provider component
- Update `src/app/layout.tsx` to include theme provider
- Configure `tailwind.config.ts` to enable dark mode with class strategy

### 3. Create Toggle Components

- Create `src/components/language-toggle.tsx` - Language switcher component (EN/AR)
- Create `src/components/theme-toggle.tsx` - Dark/light mode switcher
- Update `src/components/navbar.tsx` to include both toggles

### 4. Update Global Styles

- Update `src/app/globals.css` to include:
- RTL support utilities
- Dark mode color variables
- Custom CSS variables for theme colors
- Font imports for Arabic (Cairo or similar)

### 5. Update Root Layout

- Modify `src/app/layout.tsx`:
- Add Arabic font support
- Set dynamic `lang` and `dir` attributes based on language
- Include both theme and language providers
- Update metadata for bilingual support

### 6. Customize Content Sections

Update all section components with bilingual content and Baghdad context:

- **Hero** (`src/app/hero.tsx`): 
- Update with Sarmad Allawi's introduction
- Mention Baghdad, Iraq location
- Highlight app developer and designer focus

- **Skills** (`src/app/skills.tsx`): 
- Translate skill names and descriptions

- **Projects** (`src/app/projects.tsx`): 
- Update with relevant project examples or placeholders

- **Resume** (`src/app/resume.tsx`): 
- Customize with professional experience

- **Contact Form** (`src/app/contact-form.tsx`): 
- Update email to jmtrx@proton.me
- Translate form labels and placeholders

- **Clients/Popular Clients** (`src/app/clients.tsx`, `src/app/popular-clients.tsx`): 
- Update or customize client logos/sections

### 7. Update Navigation

- Modify `src/components/navbar.tsx`:
- Replace menu items with portfolio-relevant sections (Home, About, Projects, Skills, Contact)
- Add language and theme toggles
- Support RTL layout for Arabic

### 8. Update Footer

- Modify `src/components/footer.tsx`:
- Add bilingual content
- Update copyright to Sarmad Allawi
- Include email contact

### 9. Branding & Assets

- Move favicon assets from `old_site_structure/img/icons/` to `public/`
- Update favicon references in `src/app/layout.tsx`
- Consider creating logo component using the SD logo from old site

### 10. Package Updates

- Update `package.json`:
- Change author to Sarmad Allawi
- Update project name and description
- Consider adding next-themes for theme management (optional enhancement)

### 11. Testing & Polish

- Test language switching across all components
- Test dark/light mode transitions
- Verify RTL layout for Arabic content
- Test responsive design in both languages and themes
- Ensure proper font rendering for Arabic text

## Files to Create

- `src/lib/i18n.ts`
- `src/lib/theme.ts`
- `src/components/language-provider.tsx`
- `src/components/theme-provider.tsx`
- `src/components/language-toggle.tsx`
- `src/components/theme-toggle.tsx`
- `src/locales/en.json`
- `src/locales/ar.json`

## Files to Modify

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/hero.tsx`
- `src/app/skills.tsx`
- `src/app/projects.tsx`
- `src/app/resume.tsx`
- `src/app/contact-form.tsx`
- `src/app/clients.tsx`
- `src/app/popular-clients.tsx`
- `src/components/navbar.tsx`
- `src/components/footer.tsx`
- `src/components/layout.tsx`
- `src/app/globals.css`
- `tailwind.config.ts`
- `package.json`

## Additional Considerations

- Ensure proper SEO meta tags for both languages
- Consider adding language-specific Open Graph tags
- Test accessibility with screen readers in both languages
- Verify proper text direction handling in forms and inputs
- Consider adding smooth transitions for theme/language changes

### To-dos

- [ ] Create i18n infrastructure: translation files (en.json, ar.json), language context provider, and translation hooks
- [ ] Implement theme management: theme context, provider, and Tailwind dark mode configuration
- [ ] Build language toggle and theme toggle components with proper icons and styling
- [ ] Update globals.css with RTL support, dark mode variables, and Arabic font imports
- [ ] Modify root layout to support dynamic lang/dir attributes, include providers, and add Arabic fonts
- [ ] Update all section components (Hero, Skills, Projects, Resume, Contact) with bilingual content and Baghdad context
- [ ] Customize navbar with portfolio sections, add toggles, and implement RTL support
- [ ] Customize footer with bilingual content and contact information
- [ ] Move and integrate favicon assets from old_site_structure, update metadata
- [ ] Update package.json with correct author, name, and description