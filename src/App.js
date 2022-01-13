import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Loader from './components/Loader';
import Search from './components/Search';


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const data = await result.json();

      setItems(data)
      setIsLoading(false)
      console.log(data);

    }
    fetchItems();
  }, [query])

  return (
    <>
      <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        {!isLoading ? <Characters isLoading={isLoading} items={items} /> : <Loader />}
      </div>

    </>
  );
}

export default App;
