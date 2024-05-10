import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import CategoryManager from './Pages/AdminPages/CategoryManager';
import MenuManager from './Pages/AdminPages/MenuItemManager';
import Footer from './Components/Footer';
import MenuPage from "./Pages/MenuPage/MenuPage";

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>

          <Route exact path='/' element={<HomePage />}></Route>

          <Route exact path='/Menu' element={<MenuPage />}></Route>

          <Route exact path='/Manager/Category' element={<CategoryManager />}></Route>

          <Route exact path='/Manager/Menu' element={<MenuManager />}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
