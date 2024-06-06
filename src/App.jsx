import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import CategoryManager from './Pages/AdminPages/CategoryManager';
import MenuManager from './Pages/AdminPages/MenuItemManager';
import Footer from './Components/Footer';
import MenuPage from "./Pages/MenuPage/MenuPage";
import CartPage from "./Pages/CartPage/CartPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import ProfilePage from "./Pages/AccountPage/ProfilePage";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";

function App() {

  return (
    <div className='bg-dark'>
      <Router>
        <Routes>

          <Route exact path='/' element={<HomePage />} />

          <Route exact path='/Menu' element={<MenuPage />} />

          <Route exact path='/Cart' element={<CartPage />} />

          <Route exact path="/Login" element={<SignInPage />} />

          <Route exact path='/Manager/Category' element={<CategoryManager />}></Route>

          <Route exact path='/Manager/Menu' element={<MenuManager />}></Route>

          <Route exact path="/Account/Profile" element={<ProfilePage />} />

          <Route exact path="/Account/Orders" element={<OrdersPage />} />

          <Route exact path="/Admin/Menu" element={<MenuManager />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
