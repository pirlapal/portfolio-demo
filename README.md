# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations, dark/light theme support, and an interactive project showcase.

**Live Demo**: [Your deployed URL]

**Original Design**: [Figma Design](https://www.figma.com/design/pZeEuyuiO1WbHkH8BebXwz/Pranav-Portfolio)

---

## ✨ Features

- 🎨 **Beautiful UI/UX** - Modern gradient design with cyan to purple color scheme
- 🌓 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop (including ultra-wide screens)
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🎯 **Interactive Elements** - Orbital project showcase, neural network skills visualization
- 📧 **Working Contact Form** - EmailJS integration for receiving messages
- ♿ **Accessible** - Proper cursor behavior and semantic HTML
- 🚀 **Fast Performance** - Built with Vite for lightning-fast builds
- 📊 **SEO Ready** - Structured for search engine optimization

---

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS

### UI & Animations
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Additional Tools
- **EmailJS** - Contact form email service
- **React Hook Form** - Form validation

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 20.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pirlapal/Pranavportfolio.git
   cd Pranavportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   ```

   The build output will be in the `dist` folder.

---

## 📧 Setting Up EmailJS (Contact Form)

1. **Sign up** at [EmailJS](https://www.emailjs.com/)

2. **Create an Email Service**
   - Go to Email Services
   - Click "Add New Service"
   - Choose your provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Use these template variables:
     - `{{user_name}}` - Sender's name
     - `{{user_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content

4. **Get your credentials**
   - Service ID: From Email Services page
   - Template ID: From Email Templates page
   - Public Key: From Account page (under API Keys)

5. **Add to `.env` file**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## 🎨 Customization Guide

### 1. Personal Information

**Update Hero Section** (`src/components/Hero.tsx`):
- Change name on lines 112-113
- Update location on line 146
- Update social links (lines 174, 188, 202)
- Modify rotating titles (line 11)

**Update About Section** (`src/components/About.tsx`):
- Replace profile image (line 102)
- Edit bio text (lines 122-126)
- Update stats (line 138-140)

### 2. Content Sections

**Experience** (`src/components/Experience.tsx`):
```typescript
const experiences = [
  {
    company: 'Your Company',
    role: 'Your Role',
    date: 'Start - End',
    location: 'Location',
    skills: ['Skill1', 'Skill2'],
    description: ['Achievement 1', 'Achievement 2'],
    category: ['Technical'] // or 'Leadership', 'Design'
  }
];
```

**Projects** (`src/components/ProjectsOrbit.tsx`):
```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Short description',
    longDescription: 'Detailed description',
    image: 'image-url',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/username/repo',
    research: 'optional-paper-link'
  }
];
```

**Education** (`src/components/Education.tsx`):
```typescript
const education = [
  {
    school: 'University Name',
    degree: 'Degree Type',
    field: 'Field of Study',
    date: 'Start – End',
    location: 'Location',
    gpa: '4.0',
    achievements: ['Achievement 1', 'Achievement 2']
  }
];
```

**Skills** (`src/components/Skills.tsx`):
```typescript
const skillCategories = [
  {
    name: 'Category Name',
    icon: IconComponent,
    skills: [
      { name: 'Skill Name', level: 90 }
    ]
  }
];
```

**Publications** (`src/components/Publications.tsx`):
```typescript
const publications = [
  {
    title: 'Paper Title',
    authors: 'Your Name',
    venue: 'Conference/Journal',
    year: '2024',
    abstract: 'Description',
    link: 'publication-url',
    doi: 'DOI-number',
    tags: ['Tag1', 'Tag2']
  }
];
```

**Certifications** (`src/components/Certifications.tsx`):
```typescript
const certifications = [
  {
    certificateId: 'CERT-123',
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    issueDate: 'Date',
    description: 'What you learned',
    skills: ['Skill1', 'Skill2']
  }
];
```

### 3. Styling & Theme

**Colors** (`src/styles/globals.css`):
- Primary gradient: `from-[#00D4FF] to-[#8B5CF6]`
- To change, find and replace these hex codes

**Fonts**:
- System fonts with monospace for code-style elements
- Update in `tailwind.config.js` if needed

**Dark/Light Mode**:
- Toggle button in `src/App.tsx` (line 40)
- Theme state managed with `isDark` prop throughout

---

## 📁 Project Structure

```
Pranavportfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectsOrbit.tsx
│   │   ├── Publications.tsx
│   │   ├── Skills.tsx
│   │   ├── Footer.tsx
│   │   └── ui/          # Reusable UI components
│   ├── styles/
│   │   └── globals.css  # Global styles
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind imports
├── .env.example         # Environment variables template
├── Instructions.md      # Detailed development guide
├── Agent.md            # AI agent guidelines
├── netlify.toml        # Netlify deployment config
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚢 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify

2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment variables**:
   - Add your `VITE_EMAILJS_*` variables in Netlify dashboard

4. **Deploy!**
   - Netlify will automatically deploy on every push to main

### Other Platforms

**Vercel**:
```bash
npm run build
vercel --prod
```

**GitHub Pages**:
- Update `vite.config.ts` with `base: '/repo-name/'`
- Build and deploy to `gh-pages` branch

---

## 📝 Additional Documentation

- **[Instructions.md](Instructions.md)** - Comprehensive development guide
- **[Agent.md](Agent.md)** - AI agent collaboration guidelines

---

## 🐛 Troubleshooting

### Development server not starting
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment variables not working
- Make sure `.env` file is in root directory
- Restart dev server after changing `.env`
- Check that variables start with `VITE_`

### Build errors
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check for missing dependencies
npm install
```

### Contact form not sending emails
- Verify EmailJS credentials in `.env`
- Check EmailJS dashboard for service status
- Test with browser console open to see errors

---

## 🤝 Contributing

While this is a personal portfolio, contributions for bug fixes and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

- **Design**: Original Figma design concept
- **Icons**: [Lucide Icons](https://lucide.dev)
- **UI Components**: [Radix UI](https://www.radix-ui.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)

---

## 📬 Contact

**Pranav Irlapale**
- Email: pirlapal@asu.edu
- LinkedIn: [pranav-irlapale](https://www.linkedin.com/in/pranav-irlapale)
- GitHub: [viraj091](https://github.com/viraj091)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**