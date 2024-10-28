import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
     
        <App />
        <Toaster/>
      
    </AuthProvider>
  </React.StrictMode>
);
