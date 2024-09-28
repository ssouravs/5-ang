import './App.css';
import FeatureSection from './components/FeatureSection';
import TextSection from './components/TextSection';
import { Routes, Route } from 'react-router-dom';
import BasicPanchang from './components/BasicPanchang';
import AdvancedPanchang from './components/AdvancedPanchang';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <TextSection />
            <FeatureSection />
          </>
        } />
        <Route path="/basic" element={<BasicPanchang />} />
        <Route path="/advanced" element={<AdvancedPanchang />} />
      </Routes>
    </div>
  );
}

export default App;
