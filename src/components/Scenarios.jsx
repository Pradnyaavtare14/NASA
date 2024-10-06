import { useState, useEffect } from 'react';
import axios from 'axios';

const Scenarios = () => {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    axios.get('/api/climate-data')
      .then(response => setScenarios(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="scenarios-grid grid grid-cols-3 gap-6 p-6">
      {scenarios.map((scenario) => (
        <div key={scenario._id} className="scenario-card bg-light-blue p-4 rounded">
          <h2 className="text-2xl">{scenario.title}</h2>
          <p>{scenario.description}</p>
          <a href={`/scenario/${scenario._id}`} className="text-blue-500">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default Scenarios;
