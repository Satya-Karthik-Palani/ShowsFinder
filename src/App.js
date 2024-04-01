import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-[#ffffff]">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
