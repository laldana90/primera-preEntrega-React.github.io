import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Cover from './Components/Cover.jsx'
import Categories from './Components/Categories.jsx';
import './Components/Styles/NavBar.css';
import './Components/Styles/CartWidget.css';
import './Components/Styles/ItemListContainer.css';
import './Components/Styles/Categories.css';
import './Components/Styles/Cover.css';





function App() {
  return (
    <>
    <NavBar/>
    <Cover/>
    <ItemListContainer greeting="Nuestras Categorias"/>
    <Categories/>
   
    
    </>

  );
}

export default App;
