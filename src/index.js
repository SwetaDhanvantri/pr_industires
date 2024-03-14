import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/scroll-to-top';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
    <App />
      </ScrollToTop>
   
   
     
    </BrowserRouter>



  </React.StrictMode>
);


