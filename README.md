# Sticky Notes App

A minimal React application featuring an auto-saving textarea that persists your notes using browser localStorage.

## Features

- 📝 **Auto-Save**: Your notes are automatically saved as you type
- 💾 **Persistent Storage**: Notes are saved in your browser's localStorage
- 🔄 **Auto-Restore**: Notes are automatically restored when you reload the page
- 🎨 **Clean UI**: Simple and elegant interface with smooth animations
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shyamnarayan2001/sticky-app-1.git
cd sticky-app-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## How It Works

The app uses React's `useState` and `useEffect` hooks to:
1. Load saved notes from localStorage when the component mounts
2. Automatically save notes to localStorage whenever the text changes
3. Provide a seamless user experience with no manual save button required

## Technologies Used

- **React** - UI library
- **localStorage** - Browser storage API for data persistence
- **CSS3** - Styling with gradients and animations

## Project Structure

```
src/
├── App.js          # Main component with textarea and localStorage logic
├── App.css         # Styling for the application
└── index.js        # React entry point
```

## License

This project is open source and available under the MIT License.
