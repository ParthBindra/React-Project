import './App.css';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { getMatches } from './api/Api';
import { useEffect, useState } from 'react';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => setMatches(data.data))
      .catch((error) => alert('Could not load data'));
  }, []);

  return (
    <div className="App">
      <Navbar />
      
      {matches && matches.length > 0 ? (
        matches.map((match, index) => <MyCard key={index} match={match} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

  
 

export default App;