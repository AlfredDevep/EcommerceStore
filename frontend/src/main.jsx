import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeScreen } from './screens/HomeScreen.jsx';
import { ProductScreen } from './screens/ProductScreen.jsx';
import { Provider } from 'react-redux';
import store from './store';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index="{true}" path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
    
    
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
