import React, { useState } from 'react';
import axios from 'axios';

type ApiResponse = {
  message: string;
};

const App: React.FC = () => {
  const [responseData, setResponseData] = useState<string>('');

  const handleFetchData = async () => {
    try {
      const response = await axios.get<ApiResponse>('http://localhost:8080/api/greet'); // Replace with your backend URL
      setResponseData(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponseData('Failed to fetch data');
    }
  };

  return (
    <div>
      <h1>Welcome to My Frontend</h1>
      <button onClick={handleFetchData}>Fetch Data</button>
      <p>{responseData}</p>
    </div>
  );
};

export default App;
