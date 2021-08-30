import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login_Register from './components/form/Login_Register';
import { BrowserRouter, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Feature from './components/feature/Feature';
import MenuProducts from './components/menu/MenuProducts';
import Cart from './components/cart/Cart';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SideMenu />

        <Route path="/" component={Home} exact />
        <Route path="/menu" component={MenuProducts} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/feature" component={Feature} exact />
        <Route path="/cart" component={Cart} exact />

        <Route path="/register" component={Login_Register} exact />


      </BrowserRouter>

      <div className="scrollbtn">
        <i className="fas fa-arrow-up"></i>
      </div>

      <div className="loading">
        <img src="images/load.gif" alt="loading..." />
      </div>
    </div>
  );
}

export default App;
