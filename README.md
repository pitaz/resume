# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, inspired by contemporary case study designs.

## Features

- 🎨 **Modern Design** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🌙 **Dark Mode** - Automatic dark mode support based on system preferences
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 🎯 **Case Study Pages** - Detailed project pages with case study format
- 🎭 **Smooth Animations** - Engaging transitions and hover effects
- 🔍 **SEO Optimized** - Built-in SEO best practices

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal introduction and background
3. **Projects** - Showcase of featured projects with case study links
4. **Skills** - Technical skills and expertise
5. **Contact** - Contact form and social links
6. **Case Studies** - Detailed project pages with challenge, solution, and results

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

1. **Navigation** (`app/components/Navigation.tsx`)
   - Update the portfolio name/brand

2. **Hero Section** (`app/components/Hero.tsx`)
   - Update the title, subtitle, and description
   - Modify the call-to-action buttons

3. **About Section** (`app/components/About.tsx`)
   - Replace placeholder text with your personal information
   - Add your photo (replace the placeholder)

4. **Projects** (`app/components/Projects.tsx`)
   - Update the projects array with your own projects
   - Add project images to the `public` folder

5. **Skills** (`app/components/Skills.tsx`)
   - Update skill categories and technologies

6. **Contact** (`app/components/Contact.tsx`)
   - Update email, LinkedIn, and GitHub links
   - Form submission is configured to use Resend API

### Email Setup (Contact Form)

The contact form uses Resend to send emails. To set it up:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the [Resend dashboard](https://resend.com/api-keys)
3. Create a `.env.local` file in the root directory:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Update the `from` email in `app/api/contact/route.ts` with your verified domain (or use `onboarding@resend.dev` for testing)
5. The form will send emails to the address specified in the `to` field of the API route

7. **Metadata** (`app/layout.tsx`)
   - Update the title and description for SEO

### Case Studies

Edit the projects data in `app/projects/[id]/page.tsx` to customize:
- Project descriptions
- Challenges and solutions
- Results and metrics
- Tags and technologies

### Styling

The portfolio uses Tailwind CSS. You can customize:
- Colors: Update gradient colors in `globals.css`
- Fonts: Modify font imports in `layout.tsx`
- Spacing: Adjust padding/margins in component files

### Adding Project Images

1. Add your project images to the `public` folder
2. Update the `image` property in the projects array to match your image filenames

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── projects/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── package.json
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **React 19** - UI library

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please open an issue on GitHub or contact through the portfolio contact form.

---

Built with ❤️ using Next.js and Tailwind CSS
# resume
