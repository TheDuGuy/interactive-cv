# Interactive CV - Edou Mota

A modern, animated personal portfolio website built with React, featuring smooth animations, glassmorphism effects, and a fully functional contact form.

![Interactive CV](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **Smooth Animations** - Powered by Framer Motion for engaging scroll-triggered animations
- **Glassmorphism UI** - Modern glass-effect design with gradient accents
- **Fully Responsive** - Optimised for all devices from mobile to desktop
- **Working Contact Form** - Integrated with Formspree for real message submissions
- **Interactive Timeline** - Visual journey through professional experience
- **Skills Showcase** - Dynamic skill cards with hover effects
- **About Section** - Personal story with interactive interest cards

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Built With

- **React** - UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library
- **Formspree** - Form backend for contact submissions

## 📁 Project Structure

```
interactive-cv/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── AboutMe.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Skills.jsx
│   │   └── Timeline.jsx
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
└── ...config files
```

## 🎨 Customisation

To personalise this CV for your own use:

1. **Update personal information** in `src/components/Hero.jsx`
2. **Add your experience** in `src/components/Timeline.jsx`
3. **List your skills** in `src/components/Skills.jsx`
4. **Share your story** in `src/components/AboutMe.jsx`
5. **Update contact form** with your Formspree endpoint in `src/components/Contact.jsx`
6. **Replace profile image** in `public/profile.jpg`

## 📧 Contact Form Setup

The contact form uses Formspree. To set it up:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the endpoint in `src/components/Contact.jsx`:
   ```javascript
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## 📦 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Edou Mota**
- LinkedIn: [@edou-mota](https://www.linkedin.com/in/edou-mota-b6489a27/)
- GitHub: [@TheDuGuy](https://github.com/TheDuGuy)
- Email: edou.mota@me.com

---

Built with ❤️ using React and Tailwind CSS
