# Giriprasath Portfolio

This is a personal portfolio website built with React.js, featuring a modern UI and interactive components.

## Requirements

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Dependencies

The project uses the following main dependencies:
- React 18.2.0
- Three.js 0.177.0
- Framer Motion 12.18.1
- EmailJS Browser 4.4.1

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd giriprasath-portfolio
```

3. Install dependencies:
```bash
npm install
```

## Development

To run the development server:
```bash
npm start
```
The site will be available at http://localhost:3000

## Building for Production

To create a production build:
```bash
npm run build
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary build settings.

### Netlify Deployment Steps:
1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## Environment Variables
If needed, set the following environment variables in your Netlify deployment settings:
- Any EmailJS configuration keys
- Any other API keys used in the project

## Project Structure
```
giriprasath-portfolio/
  ├── public/           # Static files
  ├── src/             
  │   ├── components/  # React components
  │   ├── App.js       # Main App component
  │   └── index.js     # Entry point
  ├── netlify.toml     # Netlify configuration
  └── package.json     # Project dependencies
```

## Contact

For any questions or issues, please contact [Your Contact Information]
[![Netlify Status](https://api.netlify.com/api/v1/badges/f44e224e-1d15-4ec7-bc00-d97cad364b16/deploy-status)](https://app.netlify.com/projects/giriprasaths/deploys)