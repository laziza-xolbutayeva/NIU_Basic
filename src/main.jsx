import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import global_en from "./translations/en/global.json";
import global_uz from "./translations/uz/global.json";
import global_ru from "./translations/ru/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation:{escapeValue:false},
  lng:"uz",
  resources:{
    uz:{global:global_uz},
    en:{global:global_en},
    ru:{
      global:global_ru
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
  </BrowserRouter>
)
