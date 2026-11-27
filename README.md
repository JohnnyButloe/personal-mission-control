# Personal Mission Control

A personal workflow dashboard designed to help users prioritize meaningful work, stay focused, and understand their productivity through clear visual feedback.

## Overview

Personal Mission Control connects goals, projects, tasks, focus sessions, and reflection into a single workflow system.

The application is built around a simple principle: **Focus before organization.**

Rather than becoming another task management tool, Mission Control aims to help users decide what matters, commit to focused work, and learn from their progress.

### Core Workflow

**Decide → Lock In → Focus → Record → Reflect → Decide**

## Features

The current static prototype includes:

- **Dashboard** — Today's Mission, focus summaries, active projects, and weekly progress.
- **Goals** — An overview of long-term objectives.
- **Projects** — Active projects connected to their parent goals.
- **Tasks** — Organized tasks and their current status.
- **Focus** — A static Lock-In and Focus Session experience.
- **Analytics** — Visual summaries of focus activity and consistency.
- **Responsive Navigation** — Desktop and mobile layouts.

The prototype uses typed mock data. Interactive workflows and data persistence are planned for future development.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js and npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/JohnnyButloe/personal-mission-control.git
cd personal-mission-control
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

Useful commands:

```bash
npm run dev       # Start development server
npx tsc --noEmit  # Check TypeScript
npm run lint      # Run ESLint
npm run build     # Create production build
```

## Project Status

**Phase 1 — Static Prototype**

The current development phase focuses on establishing the application's layout, navigation, reusable components, typed domain models, and static representations of its core features.

Future phases will introduce interactive workflows and persistent application data.

## Product Philosophy

Personal Mission Control is designed to help users spend less time organizing their work and more time doing meaningful work.

The goal is to provide clarity, encourage consistent focus, and turn recorded work into useful insights.
