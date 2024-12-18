import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
import { CartScreen } from './screens/CartScreen.jsx';
import { LoginScreen } from './screens/LoginScreen.jsx';
import { RegisterScreen } from './screens/RegisterScreen.jsx';
import { ShippingScreen } from './screens/ShippingScreen.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { PaymentScreen } from './screens/PaymentScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index="{true}" path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/shipping' element={<ShippingScreen />} />


        <Route path='' element={<PrivateRoute />} />
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
        <Route/>
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
