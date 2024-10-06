import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store,persistor } from './redux/store.js'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ThemeProvider from './components/ThemeProvider.jsx'

createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
);
