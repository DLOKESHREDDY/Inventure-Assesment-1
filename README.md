# Inventure Recruitment Website

A modern, responsive React.js website for Inventure recruitment services. Built with clean design principles and optimized for performance.

## 🚀 Features

- **Modern React.js** - Built with React 18 and functional components
- **Responsive Design** - Mobile-first approach with responsive breakpoints
- **Smooth Animations** - Framer Motion for engaging user interactions
- **Form Validation** - React Hook Form with comprehensive validation
- **Professional UI** - Clean, minimalist design inspired by modern recruitment platforms
- **Performance Optimized** - Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18
- **Styling**: CSS3 with CSS Custom Properties
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Custom SVG icons
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Sectors/
│   ├── Stats/
│   ├── News/
│   ├── Contact/
│   └── Footer/
├── assets/
│   ├── Logo.png
│   └── image.png
└── App.js
```

## 🎨 Design Features

### Header Section
- Fixed navigation with smooth scrolling
- Logo with hover effects
- Dropdown navigation with icons
- Mobile-responsive hamburger menu

### Hero Section
- Full-screen background image
- Animated content with Framer Motion
- Call-to-action buttons
- Responsive typography

### Contact Form
- Professional form design
- Real-time validation
- Success message handling
- Responsive layout

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DLOKESHREDDY/Inventure-Assesment-1.git
   cd Inventure-Assesment-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Key Components

### Header Component
- Fixed positioning with backdrop blur
- Smooth scroll navigation
- Mobile menu with animations
- Logo with hover effects

### Hero Component
- Background image integration
- Animated text content
- Gradient overlays
- Responsive CTA buttons

### Contact Component
- Professional form design
- Field validation
- Success/error messaging
- Responsive layout

## 🎨 Color Scheme

```css
--primary-green: #22c55e
--primary-green-light: #4ade80
--primary-green-dark: #16a34a
--text-primary: #1f2937
--text-secondary: #6b7280
--bg-secondary: #f9fafb
```

## 📄 Content Sections

1. **Hero** - "Recruiting Without Limits. Speed and Scale."
2. **About** - Company overview and mission
3. **Sectors** - Industry specializations
4. **Stats** - Key performance metrics
5. **News** - Latest updates and insights
6. **Contact** - Contact form and information

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `App.js`
4. Update navigation if needed

### Modifying Colors
Update CSS custom properties in `src/index.css`:
```css
:root {
  --primary-green: #your-color;
  --primary-green-light: #your-light-color;
  --primary-green-dark: #your-dark-color;
}
```

## 📦 Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `framer-motion`: ^10.16.4
- `react-hook-form`: ^7.47.0
- `react-intersection-observer`: ^9.5.2

### Development Dependencies
- `@testing-library/jest-dom`: ^5.17.0
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `web-vitals`: ^2.1.4

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**DLOKESHREDDY**
- GitHub: [@DLOKESHREDDY](https://github.com/DLOKESHREDDY)

## 🙏 Acknowledgments

- Design inspiration from modern recruitment platforms
- React community for excellent documentation
- Framer Motion for smooth animations
- React Hook Form for form handling

---

**Note**: This is an assessment project for Inventure recruitment services. The website showcases modern web development practices and responsive design principles.
