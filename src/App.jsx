import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NupatLogo from './assets/images/NupatLogo.png';
import SignIn from './components/signin/SignIn';
import WelcomePage from './components/pages/welcomepage/WelcomePage';
import InstructionPage from './components/pages/instructionpage/InstructionPage';
import ObjPage from './components/pages/objpage/ObjPage';
import TheoryPage from './components/pages/theorypage/TheoryPage';
import PracticalPage from './components/pages/practicalpage/PracticalPage';

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="absolute right-[20px] top-[10px]">
          <img src={NupatLogo} alt="" />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/instruction" element={<InstructionPage/>} />
            <Route path="/obj" element={<ObjPage/>} />
            <Route path="/theory" element={<TheoryPage/>} />
            <Route path="/pract" element={<PracticalPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
