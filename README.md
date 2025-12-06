# Also in the Mind

A dedicated website for the book "Also in the Mind", featuring insights into Buddhist teachings, monk profiles, and wisdom from masters.

## Overview

This project is a modern web application built with [Next.js](https://nextjs.org) and [React](https://react.dev), designed to present spiritual content in an engaging and accessible way. It features a responsive design, smooth animations, and a collection of components to showcase the book's content.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) & [HeroUI](https://heroui.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Documentation/Content:** [Nextra](https://nextra.site)
- **Search:** [Pagefind](https://pagefind.app)
- **Language:** TypeScript

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed. This project uses `pnpm` as the package manager.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd alsointhemind
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Running Locally

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`app/`**: Contains the main application code (App Router).
  - **`components/`**: Reusable UI components like `Hero`, `BookDescription`, `TrustSection`, etc.
  - **`page.tsx`**: The main entry point for the home page.
- **`public/`**: Static assets.

## Scripts

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm run lint`: Runs ESLint checks.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HeroUI Documentation](https://heroui.com/docs/guide/introduction)
