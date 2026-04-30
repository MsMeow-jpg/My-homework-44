# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Homework 44 — React Context Krapopolis Project

## 📌 Project Description

This is a tutorial project created using **React + Vite**.

The project demonstrates how to create and use global data with **React Context API**.

The application is styled as a fictional ancient mythological city council page inspired by **Krapopolis**.  
It has a chaotic Greek-mythology cartoon atmosphere with golden council panels, purple temple colors, ancient city decorations, sarcastic divine messages, and dramatic citizen cards.

The project implements:

- React project created with Vite
- context created with `createContext`
- meaningful default context values
- custom `AppProvider` component
- global city data passed through Context
- app wrapped with Context Provider
- `useContext` for reading global data
- several nested components using context data
- data sharing without passing props manually
- separate context file
- separate component files
- `React.memo` optimization for the citizen list
- custom Krapopolis-inspired mythological UI design

---

## 🚀 Technologies

- React
- Vite
- JavaScript (ES6+)
- CSS
- Context API
- createContext
- useContext
- React.memo
- AppProvider

---

## 📁 Project Structure

---

```bash
HOMEWORK 44/
   └── my-context-app/
         ├── node_modules/
         ├── public/
         ├── src/
         │   ├── components/
         │   │     ├── CityDashboard.jsx
         │   │     ├── CityHeader.jsx
         │   │     ├── CouncilPanel.jsx
         │   │     ├── CitizenList.jsx
         │   │     └── DivineMessage.jsx
         │   ├── context/
         │   │     └── AppContext.jsx
         │   ├── App.css
         │   ├── App.jsx
         │   ├── index.css
         │   └── main.jsx
         ├── .gitignore
         ├── eslint.config.js
         ├── index.html
         ├── package-lock.json
         ├── package.json
         ├── README.md
         └── vite.config.js
```
---
## ⚙️ Installation and Launch
1. Clone the repository:
```bash
git clone https://github.com/MsMeow-jpg/My-homework-44
```
2. Go to the project folder:
```bash
cd My-homework-44/my-react-app
```
3. Install dependencies:
```bash
npm install
```
4. Launch the project:
```bash
npm run dev
```
---
After this, the project will be available at:
```
http://localhost:5173
```

---
## 🌐 Demo

🔗 Live demo:
https://my-homework-44.vercel.app/
---
## 📦 Functionality

- The project uses React Context API for global data
- `createContext` creates the application context
- default context values prevent undefined errors
- `AppProvider` stores and provides global city data
- the whole app is wrapped with `AppProvider` in `main.jsx`
- components access data using the `useContext` hook
- data is passed through context without manual props
- the project has multiple nested components:
  - CityDashboard
  - CityHeader
  - CouncilPanel
  - CitizenList
  - DivineMessage
- `CityHeader` displays the city name, ruler, and city mood from context
- `CitizenList` displays citizens from the global context data
- `DivineMessage` displays the theme and divine message from context
- `React.memo` is used for optimizing the citizen list component
- custom CSS creates a mythological cartoon-inspired interface

---

## 🧠 What we learned

- Creating a React project with Vite
- Creating a context folder and context file
- Using `createContext`
- Creating meaningful default context values
- Creating a custom Context Provider
- Wrapping the application with a provider
- Using `useContext` to access global data
- Passing data without props
- Creating nested component structure
- Organizing components into separate files
- Using `React.memo` for optimization
- Rendering arrays of data with `.map()`
- Styling a React app with custom CSS
- Creating a themed UI design

---

## 🎨 Design

The application uses an ancient mythology cartoon-inspired visual style.

- Krapopolis-inspired ancient city atmosphere
- Greek temple and city council theme
- golden council panels
- dark purple and mythic gold colors
- cartoon-like dramatic shadows
- ancient citizen report cards
- sarcastic divine message section
- fantasy government notice-board mood
- bold typography and decorative temple icons
- custom styled cards and panels

---

## ✍️ Author

GitHub: MsMeow-jpg

---

## 📌 Note

This project was completed as part of a React + Vite course assignment.

The main goal of the project is to practice fetching data from an API using `axios`, `useEffect`, and `async/await`, while also handling loading and error states correctly.