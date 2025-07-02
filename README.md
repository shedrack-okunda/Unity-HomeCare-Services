# Unity Home Care Services Website

A modern, responsive website for Unity Home Care Services - a professional healthcare startup providing compassionate home care services in Nairobi, Kenya.

![Unity Home Care](https://img.shields.io/badge/Unity-Home%20Care-blue?style=for-the-badge&logo=heart&logoColor=white)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Features

### ✨ **User Experience**

-   **🌓 Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions
-   **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
-   **🎨 Modern Design** - Contemporary gradients, animations, and glassmorphism effects
-   **♿ Accessible** - WCAG 2.1 AA compliant with keyboard navigation support
-   **⚡ Fast Loading** - Optimized performance with lazy loading and efficient rendering

### 🏥 **Healthcare Services Showcase**

-   **Post Discharge Care** - Hospital-to-home transition support
-   **Mobility Assistance** - Safe movement and fall prevention
-   **Feeding & Nutrition Support** - Meal planning and feeding assistance
-   **Wound Care Management** - Professional wound care and dressing
-   **Monitoring Vitals** - Regular health monitoring and reporting
-   **Bathing & Grooming** - Personal care with dignity and respect
-   **Elderly Home Care** - Specialized senior care services
-   **Medication Administration** - Safe medication management
-   **Professional Nursing Care** - Licensed nursing professionals

### 🎯 **Interactive Elements**

-   **Auto-rotating Service Highlights** - Dynamic service showcase in hero section
-   **Smooth Scroll Navigation** - Seamless page transitions
-   **Hover Animations** - Engaging micro-interactions
-   **Contact Integration** - One-click phone and email contact
-   **Trust Indicators** - 24/7 availability, client testimonials, and ratings

## 🚀 Quick Start

### Prerequisites

-   Node.js 18+
-   npm or yarn package manager
-   Modern browser with ES6+ support

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/unity-homecare-website.git

# Navigate to project directory
cd unity-homecare-website

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The website will be available at `http://localhost:3000`

## 🛠️ Technology Stack

### **Frontend Framework**

-   **React 18+** with TypeScript for type safety
-   **Functional Components** with React Hooks (useState, useEffect)
-   **Modern ES6+** JavaScript features

### **Styling & UI**

-   **Tailwind CSS 4.1** for utility-first styling
-   **Lucide React** for consistent, beautiful icons
-   **CSS Gradients** for modern visual effects
-   **Responsive Grid** layouts for all screen sizes

### **Development Tools**

-   **TypeScript** for enhanced developer experience
-   **ESLint** for code quality (recommended)
-   **Prettier** for code formatting (recommended)
-   **Git** for version control

## 📁 Project Structure

```
unity-homecare-website/
├── src/
│   ├── components/
│   │   └── UnityHomeCare.tsx    # Main website component
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── styles/
│   │   └── globals.css          # Global styles and Tailwind imports
│   └── utils/
│       └── constants.ts         # App constants and configuration
├── public/
│   ├── favicon.ico              # Website favicon
│   └── images/                  # Static images and assets
├── docs/
│   ├── PRD.md                   # Product Requirements Document
│   └── DEPLOYMENT.md            # Deployment guidelines
├── package.json                 # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

## 🎨 Design System

### **Color Palette**

```css
/* Primary Colors */
--primary-blue: #3B82F6
--primary-purple: #8B5CF6
--primary-gradient: linear-gradient(135deg, #3B82F6, #8B5CF6)

/* Secondary Colors */
--success-green: #10B981
--warning-orange: #F59E0B
--error-red: #EF4444

/* Neutral Colors */
--gray-50: #F9FAFB
--gray-900: #111827
```

### **Typography**

-   **Headings**: Bold, 2xl-7xl sizes with gradient text effects
-   **Body Text**: Regular weight, optimized line height for readability
-   **Interactive Elements**: Semibold weight with hover states

### **Spacing & Layout**

-   **Container**: Max-width with responsive padding
-   **Grid System**: CSS Grid with responsive breakpoints
-   **Spacing Scale**: Tailwind's consistent spacing system (4px base unit)

## 🔧 Configuration

### **Environment Variables**

Create a `.env.local` file in the root directory:

```bash
# Contact Information
NEXT_PUBLIC_PHONE="+254700000000"
NEXT_PUBLIC_EMAIL="info@unityhomecare.co.ke"
NEXT_PUBLIC_ADDRESS="Nairobi, Kenya - Westlands District"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID="GA_MEASUREMENT_ID"

# Business Information
NEXT_PUBLIC_BUSINESS_NAME="Unity Home Care Services"
NEXT_PUBLIC_BUSINESS_HOURS="24/7 Emergency Support Available"
```

### **Tailwind Configuration**

The project uses Tailwind CSS 4.1 with custom configurations:

```javascript
// tailwind.config.js
module.exports = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#eff6ff",
					500: "#3b82f6",
					900: "#1e3a8a",
				},
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.3s ease-out",
			},
		},
	},
};
```

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check

# Testing (if implemented)
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests

# Deployment
npm run deploy       # Deploy to hosting platform
```

## 🌐 Browser Support

### **Desktop Browsers**

-   ✅ Chrome 90+
-   ✅ Firefox 88+
-   ✅ Safari 14+
-   ✅ Edge 90+

### **Mobile Browsers**

-   ✅ iOS Safari 14+
-   ✅ Chrome Mobile 90+
-   ✅ Samsung Internet 13+

### **Responsive Breakpoints**

-   **Mobile**: 320px - 767px
-   **Tablet**: 768px - 1023px
-   **Desktop**: 1024px - 1439px
-   **Large Desktop**: 1440px+

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### **Netlify**

```bash
# Build the project
npm run build

# Deploy build folder to Netlify
# Drag and drop 'build' folder to Netlify dashboard
```

### **Traditional Hosting**

```bash
# Build for production
npm run build

# Upload contents of 'build' folder to your web server
```

## 📊 Performance Optimization

### **Implemented Optimizations**

-   ⚡ **Lazy Loading** for images and components
-   🗜️ **Code Splitting** with dynamic imports
-   📦 **Bundle Optimization** with tree shaking
-   🖼️ **Image Optimization** with modern formats
-   💾 **Caching Strategy** for static assets

### **Performance Targets**

-   **Lighthouse Score**: 90+ for all metrics
-   **First Contentful Paint**: < 1.5s
-   **Largest Contentful Paint**: < 2.5s
-   **Cumulative Layout Shift**: < 0.1

## ♿ Accessibility Features

-   **Semantic HTML** structure
-   **ARIA labels** and descriptions
-   **Keyboard navigation** support
-   **Focus indicators** for interactive elements
-   **High contrast** color ratios
-   **Screen reader** compatibility
-   **Alt text** for all images

## 🔍 SEO Optimization

### **Technical SEO**

-   **Meta tags** with healthcare-focused keywords
-   **Open Graph** tags for social media sharing
-   **Structured data** for healthcare organizations
-   **XML sitemap** generation
-   **Robots.txt** configuration

### **Content SEO**

-   **Keyword optimization** for home care services
-   **Local SEO** for Nairobi market
-   **Mobile-first** indexing ready
-   **Page speed** optimization

## 📞 Contact Information

### **Unity Home Care Services**

-   **Phone**: [+254 700 000 000](tel:+254700000000) _(24/7 Emergency Support)_
-   **Email**: [info@unityhomecare.co.ke](mailto:info@unityhomecare.co.ke)
-   **Location**: Nairobi, Kenya - Westlands District
-   **Hours**: 24/7 availability for emergencies

### **Development Team**

-   **Developer**: [Your Name](mailto:your.email@example.com)
-   **Repository**: [GitHub Repository](https://github.com/your-username/unity-homecare-website)
-   **Issues**: [Report Issues](https://github.com/your-username/unity-homecare-website/issues)

## 📄 License

This project is developed for Unity Home Care Services. All rights reserved.

For licensing inquiries, please contact: [info@unityhomecare.co.ke](mailto:info@unityhomecare.co.ke)

## 🤝 Contributing

This is a commercial project for Unity Home Care Services. If you're part of the development team:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Guidelines**

-   Follow **TypeScript** best practices
-   Use **Tailwind CSS** utility classes
-   Maintain **accessibility** standards
-   Write **semantic HTML**
-   Test on **multiple devices**

## 🆘 Support

Need help with the website? Here are your options:

### **Technical Support**

-   📧 **Email**: [developer@example.com](mailto:developer@example.com)
-   📱 **Phone**: Available during business hours
-   💬 **Slack**: #unity-homecare-website

### **Business Support**

-   📧 **Unity Home Care**: [info@unityhomecare.co.ke](mailto:info@unityhomecare.co.ke)
-   📱 **Emergency**: [+254 700 000 000](tel:+254700000000)

## 📈 Roadmap

### **Phase 1 - Current** ✅

-   Responsive website with service showcase
-   Dark/light mode toggle
-   Contact information integration
-   Mobile optimization

### **Phase 2 - Next Quarter** 🔄

-   Contact form implementation
-   Client testimonials section
-   Blog/news section
-   SEO enhancements

### **Phase 3 - Future** 📋

-   Client portal integration
-   Online appointment booking
-   Service area mapping
-   Multilingual support (Swahili)

---

**Last Updated**: July 2025  
**Version**: 1.0.0  
**Status**: Production Ready ✅
