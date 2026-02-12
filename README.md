# Sepezh's Portfolio

Welcome to my personal portfolio! I'm **Saiedeh Nezhad (Sepezh)**, a passionate developer showcasing my skills, experiences, and projects.

## 🌟 About This Project

This is a modern, responsive portfolio website built with **React**, **TypeScript**, and **Vite**. It's designed to provide a comprehensive overview of my professional background, technical skills, projects, and ways to get in touch.

## 📋 Features

- **Home Page** - An engaging introduction with highlights of my skills, experiences, and featured projects
- **About Page** - Detailed information about my background, professional story, skills, and work experience
- **Projects Page** - A showcase of my notable projects with descriptions and images
- **Contact Page** - Easy ways to connect with me
- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme** - Theme context support for a customizable user experience

## 🛠 Tech Stack

- **React 19** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript for robust development
- **Vite** - Lightning-fast build tool with instant HMR
- **CSS Modules** - Scoped styling for component encapsulation
- **React Router** - Client-side routing for navigation

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header with burger menu
│   ├── Footer/         # Footer component
│   └── shared/         # Shared components like IntroSection
├── pages/              # Page components
│   ├── Home/           # Home page with sections
│   ├── About/          # About page with detailed info
│   ├── Projects/       # Projects showcase page
│   └── Contact/        # Contact information page
├── context/            # React Context (theme management)
├── data/               # Static data files
│   ├── companies.ts    # Work experience data
│   ├── experiences.ts  # Professional experiences
│   ├── projects.ts     # Project details
│   └── skills.ts       # Technical skills
├── utils/              # Utility functions
└── assets/             # Images and static media
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sepezh
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Adding New Projects

Edit [src/data/projects.ts](src/data/projects.ts) to add new projects to the portfolio.

### Updating Skills

Modify [src/data/skills.ts](src/data/skills.ts) to update your technical skills.

### Changing Theme

The portfolio supports theme switching via [src/context/theme-context.tsx](src/context/theme-context.tsx).

## 📧 Contact

Feel free to reach out through the Contact page or connect with me on professional networks.

## 📄 License

This project is personal work. Feel free to use it as inspiration for your own portfolio!

---

**Built with ❤️ by Saiedeh Nezhad (Sepezh)**
