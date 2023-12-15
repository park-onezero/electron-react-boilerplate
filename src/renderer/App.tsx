import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'; 
import './global.css'; 
import Main from './pages/Main';

export default function App() {
  return (
    <div>
      <div id="portal"/>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    </div>
  );
}
