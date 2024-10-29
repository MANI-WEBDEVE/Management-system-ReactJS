import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <AuthProvider>
     
        <App />
        <Toaster/>
      
    </AuthProvider>
);
