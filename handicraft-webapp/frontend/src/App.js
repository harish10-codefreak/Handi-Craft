import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import UserProfile from './pages/UserProfile';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer'; // Update the import path
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/user/profile" component={UserProfile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
