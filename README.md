# Modern Portfolio Website

A beautiful, modern, and responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with animations
- 🚀 Fast performance
- 💾 Contact form functionality
- 🧩 Component-based architecture
- 🔍 SEO friendly
- 🌙 Smooth scrolling
- 🔄 Animated sections
- 📊 Skills visualization

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- EmailJS for contact form
- React Intersection Observer
- React Type Animation

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or 
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`

## Customization

### Personal Information

Update your personal information in each component:

- `Hero.tsx`: Update your name, title, and introduction
- `About.tsx`: Update your bio, experience, and interests
- `Skills.tsx`: Update your skills and proficiency levels
- `Projects.tsx`: Add your own projects with descriptions and links
- `Contact.tsx`: Update your contact information and social links
- `Footer.tsx`: Update links and copyright information

### Styling

The website uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements in the `tailwind.config.js` file.

### Contact Form

To make the contact form functional:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and template
3. Update the EmailJS configuration in `Contact.tsx` with your service ID, template ID, and user ID

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with optimized files for production.

### Deploy to GitHub Pages

1. Update the `base` property in `vite.config.ts` with your repository name:
   ```js
   base: '/your-repo-name/'
   ```

2. Deploy using GitHub Actions or manually using gh-pages.

### Deploy to Netlify/Vercel

You can also deploy this website to Netlify or Vercel with a few clicks by connecting your repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Placeholder images from [Unsplash](https://unsplash.com/) 