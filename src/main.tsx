import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppSearchDados } from './contexts/ContextSearchDados'
import NoticiasProvider from './contexts/NoticiasDados'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NoticiasProvider>
    <AppSearchDados>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppSearchDados>
    </NoticiasProvider>
  </React.StrictMode>
)
