import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import CategoryManager from './Pages/AdminPages/CategoryManager';
import MenuManager from './Pages/AdminPages/MenuItemManager';
import Footer from './Components/Footer';

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>

          <Route exact path='/' element={<HomePage />}></Route>

          <Route exact path='/Manager/Category' element={<CategoryManager />}></Route>

          <Route exact path='/Manager/Menu' element={<MenuManager />}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
