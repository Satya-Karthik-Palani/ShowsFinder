import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Helmet } from 'react-helmet';import Home from './components/Home';

function App() {
  return (
    <div className="bg-[#ffffff]">
      <Router>
        <Helmet>
          <title>Shows Finder</title> 
        </Helmet>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
