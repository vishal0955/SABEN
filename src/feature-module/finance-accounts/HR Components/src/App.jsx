import './App.css';
import './index.js';
import Candidate_Score_Card from './Comp[onents/Candidate_Score_Card';
import Hello from './Comp[onents/Hello';
import NavBar from './Comp[onents/NavBar';
  import Performance from './Comp[onents/Performance';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Recruitment from './Comp[onents/Recruitment';
import Composition from './Comp[onents/Composition.jsx';
import My_Profile from './Comp[onents/My_Profile.jsx';
import My_Issues from './Comp[onents/My_Issues.jsx';
import Orgnization from './Comp[onents/Orgnization.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/candidatecard" element={<Candidate_Score_Card />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/composition" element={<Composition />} />
        <Route path="/myprofile" element={<My_Profile />} />
        <Route path="/myissues" element={<My_Issues />} />
        <Route path="/orgnization" element={<Orgnization />} />
      </Routes>
    </Router>
  );
}

export default App;
