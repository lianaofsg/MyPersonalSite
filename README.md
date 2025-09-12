# Programmer Portfolio Website

A professional programmer portfolio website for job hunting and personal showcase, built with modern web technologies featuring responsive design and rich interactive functionality.

## ✨ Features

- 🎨 **Modern Design** - Using gradient colors and contemporary UI design
- 📱 **Fully Responsive** - Perfectly adapts to various device sizes
- 🚀 **Smooth Animations** - Scroll animations and interactive effects
- 📊 **Skill Showcase** - Dynamic skill progress bars
- 💼 **Project Display** - Beautiful project card layouts
- 📈 **Work Experience** - Timeline-style work experience presentation
- 📧 **Contact Form** - Fully functional contact form
- 🔍 **SEO Optimized** - Semantic HTML and meta tags

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Type System**: TypeScript
- **Styling**: Modern CSS (Grid, Flexbox, CSS Variables)
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: TypeScript Compiler

## 📁 Project Structure

```
MyPersonalSite/
├── index.html              # Main page
├── styles/
│   └── main.css           # Main stylesheet
├── src/
│   └── main.ts            # TypeScript source code
├── dist/                  # Compiled JavaScript files
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Compile TypeScript

```bash
npm run build
```

### 3. Start Development Server

```bash
npm start
```

The website will open at `http://localhost:3000`

## 📝 Customization

### Personal Information

Edit the following sections in `index.html`:

- **Name**: Replace "John Doe" with your name
- **Title**: Change "Full Stack Developer" to your position
- **Description**: Update personal introduction and skill descriptions
- **Contact**: Modify email, phone, and address information

### Project Data

Edit the `projects` array in `src/main.ts`:

```typescript
const projects: Project[] = [
    {
        id: 1,
        title: "Your Project Name",
        description: "Project description",
        technologies: ["Tech Stack 1", "Tech Stack 2"],
        image: "fas fa-icon-name",
        demoUrl: "Demo link",
        githubUrl: "GitHub link"
    }
    // Add more projects...
];
```

### Skills Data

Edit the `skills` array in `src/main.ts`:

```typescript
const skills: Skill[] = [
    { name: "Skill Name", level: 90, category: "Skill Category" }
    // Add more skills...
];
```

### Work Experience

Edit the work experience section in `index.html`, updating company names, positions, dates, and work content.

## 🎨 Style Customization

### Color Theme

Modify CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #667eea;
    --accent-color: #fbbf24;
    --text-color: #1f2937;
    --bg-color: #ffffff;
}
```

### Layout Adjustments

- Modify `.container` `max-width` to adjust content width
- Adjust `padding` and `margin` to change spacing
- Modify `grid-template-columns` to adjust grid layouts

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🔧 Development Commands

```bash
# Compile TypeScript
npm run build

# Watch file changes and auto-compile
npm run dev

# Start development server
npm start
```

## 🌐 Deployment

### Static Hosting

1. Run `npm run build` to compile the project
2. Upload `index.html`, `styles/`, and `dist/` folders to your hosting service
3. Ensure the server supports single-page application routing

### GitHub Pages

1. Push the project to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the `dist` folder as the source directory

### Netlify/Vercel

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📈 Performance Optimization

- Use CDN for external resources
- Compress CSS and JavaScript files
- Optimize image sizes and formats
- Enable browser caching
- Use lazy loading techniques

## 🔍 SEO Optimization

- Semantic HTML tags
- Complete meta tags
- Structured data markup
- Friendly URL structure
- Mobile-friendly

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve this project!

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 📞 Support

If you encounter issues during use, please:

1. Check the [Issues](../../issues) page
2. Create a new Issue describing the problem
3. Contact the project maintainer

---

**Good luck with your job search!** 🚀
