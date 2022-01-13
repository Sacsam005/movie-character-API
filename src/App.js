import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Loader from './components/Loader';


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await fetch('https://www.breakingbadapi.com/api/characters')
      const data = await result.json();

      setItems(data)
      setIsLoading(false)
      console.log(data);

    }
    fetchItems();
  }, [])

  return (
    <>
      <div className="container">
        <Header />
        {!isLoading ? <Characters isLoading={isLoading} items={items} /> : <Loader />}
      </div>

    </>
  );
}

export default App;
