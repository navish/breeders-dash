# Breeders Dashboard

Testing [builder.io](https://www.builder.io/) code generator with a dashboard UI designed on Figma.

## Features

- **Ona Dashboard**: Agricultural trials management interface
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Modern React**: Built with React 18 and Emotion CSS-in-JS
- **Trial Cards**: Display trial information with location, site, and status details
- **Filter System**: Location-based filtering capability

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/navish/breeders-dash.git
cd breeders-dash-builder
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx     # Main dashboard container
│   ├── TopBar.jsx       # Navigation header
│   ├── FilterSection.jsx # Location filter dropdown
│   └── TrialCard.jsx    # Individual trial display card
├── App.jsx              # Root application component
└── index.js             # React entry point
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Emotion**: CSS-in-JS styling library
- **Create React App**: Build tooling and development server
- **Google Fonts**: Poppins font family for typography

## Design System

The dashboard follows a cohesive design system with:

- **Primary Colors**: Brown tones (#401805, #F9EAE2)
- **Typography**: TT Firs Neue Trial Var Roman and Poppins
- **Spacing**: Consistent 24px grid system
- **Cards**: Elevated design with shadows and rounded corners
- **Responsive**: Mobile-first responsive breakpoints at 991px

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
