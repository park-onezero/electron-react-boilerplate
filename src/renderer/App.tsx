import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'; 
import './global.css';
import { Button } from '@/components/ui/button';

function Hello() {
  return (
    <div> 
        <Button variant="destructive">Button Test</Button>
        <div className="text-center border-solid border-4 border-red-500 bg-black text-white shadow">
          ERB + TAILWIND = ❤
      </div> 
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
