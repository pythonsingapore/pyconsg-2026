# Contributing to PyCon Singapore 2026 Landing Page

Welcome to the PyCon Singapore 2026 project! 🐍🇸🇬

We are excited to have you contribute to creating an amazing website for PyCon Singapore 2026. This project is part of **Hacktoberfest 2025**, and we welcome contributions from designers and developers of all skill levels.

## 🎯 Project Overview

We are building a beautiful and responsive website for PyCon Singapore 2026 that showcases Singapore's culture and landmarks while providing essential conference information.

### Current Status ✅

**Foundation Complete!** The basic structure and styling are now in place:

- ✅ **HTML Structure**: Complete responsive layout with all sections
- ✅ **CSS Styling**: Singapore-themed design with flag colors and modern typography
- ✅ **Banner Graphics**: Singapore landmarks SVG (Marina Bay Sands, Merlion, Singapore Flyer, Supertrees)
- ✅ **Responsive Design**: Mobile-first approach with comprehensive breakpoints
- ✅ **JavaScript Framework**: Basic interactivity and smooth scrolling
- ✅ **Project Structure**: Organized CSS, JS, and images directories

### What We're Building

A landing page (`index.html`) with the following sections:

1. **Header Banner**: ✅ Complete with Singapore landmarks background
2. **Conference Info**: ✅ Structure ready, content needs enhancement
3. **Call for Speakers**: ✅ Basic layout, needs interactive features
4. **Sponsors Section**: ✅ Grid layout ready, needs real sponsor content
5. **Footer**: ✅ Structure complete, needs community links

Other supporting pages:
- **Speaker Page**: List of confirmed speakers with bios and session details
- **Sponsor Page**: Detailed sponsor information and tiers
- **Code of Conduct Page**: Clear guidelines for community behavior
- **Privacy Policy Page**: Transparent data handling practices

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A GitHub account
- *A text editor or IDE
- *Git installed on your machine
*Alternatively, you can also use the web interface directly within your browser.

### Setup (if not using the web interface)

1. **Fork this repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pycon-2026.git
   cd pycon-2026
   ```
3. **Create a new branch** for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start the development server** to preview your changes:
   ```bash
   python -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser to see the live site.

## 📋 How to Contribute

### 🏷️ Good First Issues

Perfect for beginners (foundation is complete, now focusing on enhancements):
- ✨ Add real conference content and speaker information
- 🎨 Create additional Singapore-themed icons and graphics
- 📱 Enhance mobile user experience and touch interactions
- ♿ Implement advanced accessibility features (ARIA labels, screen reader support)
- 🚀 Add loading animations and micro-interactions
- 📝 Improve form validation and user feedback
- 🔗 Add social media integration and sharing features

### 🎨 Design Guidelines

#### Singapore Cultural Elements
- **Colors**: Incorporate Singapore flag colors (red, white) and tropical themes
- **Landmarks**: Marina Bay Sands, Merlion, Gardens by the Bay, Singapore Flyer
- **Cultural Elements**: Orchids (national flower), tropical plants, modern architecture
- **Typography**: Clean, modern fonts that reflect Singapore's tech-forward culture

#### Technical Requirements
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimized images and minimal dependencies
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 🎯 Contribution Possibilities (not exhaustive)

### 1. Header Banner Section ✅ FOUNDATION COMPLETE
**Current status:** Basic structure and Singapore landmarks banner implemented
**What we need next:**
- 📱 Improved mobile hero experience
- 🔄 Dynamic content loading
- 🎯 Better call-to-action button styling and interactions

**Skills needed:** Advanced CSS animations, JavaScript

### 2. Conference Information Section ✅ STRUCTURE READY
**Current status:** Layout and basic styling complete
**What we need next:**
- 📅 Real conference dates and venue information
- 🎫 Registration system integration
- 📍 Interactive venue map
- 📊 Attendee statistics and highlights from previous years

**Skills needed:** Content writing, JavaScript for interactive elements, API integration

### 3. Call for Speakers Section ✅ LAYOUT COMPLETE
**Current status:** Basic form and styling implemented
**What we need next:**
- 📝 Enhanced form validation and user experience
- 📧 Email integration for notifications
- 🏆 Speaker benefits and perks showcase
- 📋 Submission guidelines and requirements
- ⏰ Timeline and important dates

**Skills needed:** Form handling, email integration, UX design

### 4. Sponsors Section ✅ GRID READY
**Current status:** Responsive grid layout implemented
**What we need next:**
- 🏢 Real sponsor logos and information
- 💎 Sponsorship tier styling and benefits
- 📞 "Become a Sponsor" contact form
- 🎨 Hover effects and interactive elements

**Skills needed:** Content management, CSS animations, form handling

### 5. Footer Section ✅ STRUCTURE COMPLETE
**Current status:** Basic layout and styling ready
**What we need next:**
- 🔗 Real community links and social media
- 📜 Code of Conduct and legal pages
- 📧 Newsletter signup integration
- 🌐 Multi-language support preparation

**Skills needed:** Content writing, link management, form integration

### 6. Additional Enhancements
- **Animations**: Smooth scrolling, fade-ins, hover effects
- **Interactive Elements**: Image carousels, accordions
- **Performance**: Image optimization, lazy loading
- **SEO**: Meta tags, structured data
- **Accessibility**: Screen reader support, keyboard navigation

## 📝 Contribution Process

### Step 1: Choose Your Task
1. Browse the [Issues](../../issues) tab for available tasks
2. Look for issues labeled with:
   - `good first issue` - Perfect for beginners
   - `hacktoberfest` - Hacktoberfest eligible
   - `help wanted` - We need your help!
   - `design` - Design-related tasks
   - `frontend` - Frontend development

### Step 2: Claim Your Issue
- Comment on the issue saying you'd like to work on it
- Wait for a maintainer to assign it to you
- If no response within 24 hours, feel free to start working

### Step 3: Make Your Changes
1. Work on your assigned issue
2. Follow our coding standards (see below)
3. Test your changes thoroughly
4. Ensure responsive design works

### Step 4: Submit Your Pull Request
1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

2. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request:**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

## 🎨 Coding Standards

### HTML
- Use semantic HTML5 elements
- Include proper meta tags
- Add alt text for all images
- Use proper heading hierarchy (h1, h2, h3, etc.)

### CSS
- Use CSS Grid and Flexbox for layouts
- Follow BEM naming convention for classes
- Mobile-first responsive design
- Use CSS custom properties (variables)
- Minimize use of `!important`

### JavaScript (if needed)
- Use modern ES6+ syntax
- Add comments for complex logic
- Ensure accessibility with keyboard navigation
- Progressive enhancement approach

### File Structure ✅ CURRENT STRUCTURE
```
pycon-2026/
├── index.html                    ✅ Complete with all sections
├── css/
│   ├── style.css                ✅ Singapore-themed styling
│   └── responsive.css           ✅ Mobile-first responsive design
├── js/
│   └── main.js                  ✅ Interactive features and smooth scrolling
├── images/
│   ├── singapore-banner.svg     ✅ Hero section landmarks graphic
│   ├── pycon-sg-logo.svg       ✅ PyCon Singapore logo
│   └── sponsors/                📁 Ready for sponsor assets
├── README.md                    📄 Repository information
├── CONTRIBUTING.md              📄 This file (updated with current status)
└── LICENSE                      📄 Project license
```

**Next steps for file organization:**
- Add real sponsor logos to `images/sponsors/`
- Create additional Singapore-themed icons
- Add speaker photos when available
- Organize any additional assets

## 🏆 Hacktoberfest Guidelines

This project participates in **Hacktoberfest 2025**! Here's what you need to know:

### Eligible Contributions
- ✅ Bug fixes and feature implementations
- ✅ Documentation improvements
- ✅ Design enhancements
- ✅ Accessibility improvements
- ✅ Performance optimizations

### Quality Standards
- All PRs must be meaningful and add value
- No spam or low-quality submissions
- Follow our contribution guidelines
- Test your changes before submitting

### Recognition
- Contributors will be acknowledged in our README
- Top contributors may receive special recognition
- All valid contributions count toward Hacktoberfest

## 🤝 Community Guidelines

### Code of Conduct
We follow the [Python Community Code of Conduct](https://www.python.org/psf/conduct/). Please be respectful and inclusive.

### Getting Help
- **Questions?** Open a [Discussion](../../discussions)
- **Bugs?** Create an [Issue](../../issues)
- **Ideas?** Start a [Discussion](../../discussions)

### Communication
- Be patient and respectful
- Provide constructive feedback
- Help others learn and grow
- Celebrate contributions of all sizes

## 📚 Resources

### Singapore References
- [Visit Singapore Official Site](https://www.visitsingapore.com/)
- [Singapore Tourism Board](https://www.stb.gov.sg/)
- [Singapore Landmarks Photos](https://unsplash.com/s/photos/singapore)

### Technical Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Design Inspiration
- [PyCon US Website](https://us.pycon.org/)
- [PyCon APAC Websites](https://pycon.asia/)
- [Singapore Design Examples](https://www.awwwards.com/websites/singapore/)

## 🎉 Recognition

All contributors will be acknowledged in our project. Thank you for helping make PyCon Singapore 2026 amazing!

### Contributors
<!-- This section will be updated as contributions come in -->

---

**Happy Contributing! 🐍✨**

For questions, reach out to the maintainers or open a discussion. Let's build something amazing together!