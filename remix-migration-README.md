# Age-O-Matic Remix Migration

This is a server-side rendered version of the Age-O-Matic calculators, built using Remix for improved SEO and performance.

## Project Structure

- `/app/routes`: Contains all calculator pages
- `/app/components`: Shared UI components and calculator components
- `/app/styles`: Global styles and Tailwind configuration
- `/netlify`: Netlify deployment configuration

## Features

- Server-side rendering for all calculators
- Improved SEO with meta tags and structured data
- Responsive design with Tailwind CSS
- Fast page loads and navigation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to Netlify

### Manual Deployment

1. Build the project:
```bash
npm run build:netlify
```

2. Deploy using Netlify CLI:
```bash
netlify deploy --prod
```

### Continuous Deployment

1. Connect your repository to Netlify
2. Configure the build settings:
   - Build command: `npm run build:netlify`
   - Publish directory: `public`
   - Functions directory: `netlify/functions`

3. Add the following environment variables:
   - `NODE_ENV`: `production`

## Calculator Pages

- Age Calculator: Calculate exact age from birthdate
- Age Difference: Calculate the difference between two dates
- Date Calculator: Add/subtract days or find days between dates
- Birthday Countdown: Calculate days until next birthday
- Pregnancy Calculator: Calculate due date and pregnancy milestones
- Leap Year Calculator: Check if a year is a leap year
- Retirement Calculator: Plan retirement finances
- Generation Finder: Find which generation you belong to 