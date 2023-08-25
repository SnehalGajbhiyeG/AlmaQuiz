
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeQuiz from './Components/MyQuizzes/HomeQuiz';
import PlayQuiz from './Components/PlayQuiz/Play';
import Quiz7 from './Components/CreateNew/Quiz7';
import Home1 from './Components/Home1';
import Navbar2 from './Components/Navbar2';


function App() {

  return (
    <div className="App">
      <Navbar2/>

      <Router>
        <Routes >
          <Route exact path="/" element={<Home1/>} />
          <Route path="/HomeQuiz" element={<HomeQuiz />} />
          <Route path="/Quiz" element={<Quiz7 />} />
          <Route path="/PlayQuiz" element={<PlayQuiz />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
