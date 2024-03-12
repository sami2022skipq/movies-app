import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch data from the API

    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data); // Initialize filteredData with fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Apply filter when the filter state changes
  useEffect(() => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, filter]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
