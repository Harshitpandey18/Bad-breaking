import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './component/Ui/Header.js';
//import Footer from './component/Ui/Footer.js';
import CharacterGrid from './component/Character/CharacterGrid.js';
import Search from './component/Ui/Search.js';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const result = await axios('https://thronesapi.com/api/v2/Characters');

        const filtered = result.data.filter((char) =>
          char.fullName.toLowerCase().includes(query.toLowerCase())
        );

        // Limit to 20 results for safe rendering
        setItems(filtered.slice(0, 20));
      } catch (error) {
        console.error('Error fetching data:', error);
        setItems([]);
      }
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
      {/* <Footer />  <-- disable temporarily if issue persists */}
    </div>
  );
};

export default App;
