// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://springbootapp1.us-east-1.elasticbeanstalk.com/user?id=1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Data</h1>
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
