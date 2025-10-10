
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';   // ✅ import BrowserRouter
import { Provider } from 'react-redux';
import store from "./Redux_Ecomm/store.js"


createRoot(document.getElementById('root')).render( 
    
  <Provider store={store}> {/*get data from store*/}
    <BrowserRouter>    {/* ✅ wrap App inside BrowserRouter */}
    <App/> {/*now the data is avialable to all through app.jsx*/}
    </BrowserRouter>
</Provider>
);

