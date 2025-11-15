# ☑️ Selectable Pages Component

A simple, clean, and fully interactive React component allowing users to select individual pages or toggle all pages at once. Built with clarity, maintainability, and minimalism in mind.

---

## 🚀 Live Demo

**Live Preview:** _[[ellty-round-1-test.vercel.app](https://ellty-round-1-test.vercel.app/)]_

**GitHub Repository:** _[[This Repository](https://github.com/RyoDagg/ellty-round-1-test/)]_

---

## 📌 Overview

This project implements a UI component where users can:

- Select or deselect individual items
- Select or deselect all items at once
- Press a CTA: _Done_
- Clearly visualize selection state through clean styling and animation

The component is fully interactive and designed with readable, maintainable code using React + TypeScript + TailwindCSS.

---

## 🎯 Features

### ✓ Select All

A global toggle updates the selection state of all pages.

### ✓ Individual Selection

Each page row includes a custom checkbox built using an icon and accessible HTML.

### ✓ Custom UI Components

- `Button` component
- `PageRow` component
- `Checkbox` component

### ✓ Clean Separation of Concerns

Logic is centralized in the `App` component, while visual and interactive responsibilities live in small isolated components.

---

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Icons**

---

## Project Structure

```
src/
  components/
    Button.tsx
    Checkbox.tsx
    PageRow.tsx
  App.tsx
  App.css
  main.tsx
```

---

## 🧠 How It Works

- Each page entry stores its `selected` boolean.
- `togglePage(id)` updates only the clicked page.
- `toggleAll()` checks whether all pages are selected and flips them accordingly.
- UI instantly reflects updated state through clear component props.

---

Yes — you should mention it, because `pnpm` isn’t as universally known as `npm` or `yarn`. A small note at the start clarifying the package manager will help anyone who tries to run your project. For example:

---

## Installation & Setup

> This project uses **pnpm** as its package manager. If you don’t have it installed, you can get it with `npm install -g pnpm`.

```bash
# 1. Clone the repository
git clone https://github.com/RyoDagg/ellty-round-1-test.git

# 2. Navigate into the project directory
cd ellty-round-1-test

# 3. Install dependencies
pnpm install

# 4. Start the development server
pnpm dev
```

After running `pnpm dev`, open your browser at [http://localhost:5173](http://localhost:5173) to view the project.

---

## Notes

This project was completed as part of the **Ellty React Component Test**, focusing on interactivity, clarity, and clean implementation.
