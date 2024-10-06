// import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div 
      className="hero h-screen flex items-center justify-center text-center "
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/climate-change-with-dry-soil_23-2149217819.jpg?t=st=1728155415~exp=1728156015~hmac=c6534455fe8be53446d0eeb4d7e67fd37661d2f22eda7647f0151d4f7b682868)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-5xl font-bold mb-4 text-green-700">Echoes from the Future</h1>
        <p className="mt-4 text-lg text-gray-800">Explore different climate scenarios and take action to change the future.</p>
        <Link 
          to="/scenarios" 
          className="mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          Explore Scenarios
        </Link>
      </div>
    </div>
  );
};

export default Home;
