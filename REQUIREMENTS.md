# Portfolio Project Requirements

## System Requirements
- Node.js version 18 or higher
- npm (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

## Project Dependencies
All dependencies are managed through `package.json` and include:

### Core Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0
- react-scripts: ^5.0.1

### UI and Animation
- three: ^0.177.0 (for 3D animations)
- framer-motion: ^12.18.1 (for smooth animations)

### Communication
- @emailjs/browser: ^4.4.1 (for contact form functionality)

### Development Dependencies
- @testing-library/jest-dom: ^6.6.3
- @testing-library/react: ^16.3.0
- @testing-library/user-event: ^13.5.0

## Setup Instructions

1. **Install Node.js**
   - Download and install Node.js v18 or higher from https://nodejs.org/
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Install Project Dependencies**
   ```bash
   npm install
   ```

3. **Development Server**
   ```bash
   npm start
   ```

4. **Production Build**
   ```bash
   npm run build
   ```

## Deployment Requirements (Netlify)

The project is configured for Netlify deployment with:

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node.js version: 18 (specified in .nvmrc)

2. **Environment Variables**
   - Set up any necessary API keys in Netlify's environment variables
   - Configure EmailJS credentials if using contact form

3. **Redirects**
   - Configured in `netlify.toml` for SPA routing

## Browser Support
The application is tested and supported on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Development Tools Recommended
- VS Code or similar modern IDE
- React Developer Tools browser extension
- Git for version control

## Performance Requirements
- Build size should be optimized for production
- Images should be compressed and optimized
- First Contentful Paint (FCP) should be under 2 seconds
- Time to Interactive (TTI) should be under 3.5 seconds 