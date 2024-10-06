import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PieChartComponent from './components/PieChartComponent';
import AreaChartComponent from './components/AreaChartComponent';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';

function App() {
  return (
    <Router>
      <div className="bg-dark-blue text-black">
        <nav className="p-4 flex justify-between items-center">
          <div className="text-lg font-bold">Climate Live Data</div>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/scenarios">Scenarios</a></li>
            <li><a href="/action">Take Action</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/scenarios" 
            element={
              <div className="p-4">
                <div className="flex flex-wrap gap-4">
                  {/* First row with two components */}
                  <div className="w-1/2">
                    <PieChartComponent />
                  </div>
                  <div className="w-1/2">
                    <AreaChartComponent />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  {/* Second row with two components */}
                  <div className="w-1/2">
                    <BarChartComponent />
                  </div>
                  <div className="w-1/2">
                    <LineChartComponent />
                  </div>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
