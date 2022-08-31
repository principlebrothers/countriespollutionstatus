import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/countries';
import Statistics from './components/countryStatistics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <h1>Countries</h1>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
